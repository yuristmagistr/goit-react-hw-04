import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import toast from "react-hot-toast";

import SearchBar from './SearchBar.jsx';
import ImageGallery from './ImageGallery.jsx';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import LoadMoreBtn from './LoadMoreBtn.jsx';
import ImageModal from './ImageModal.jsx';

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [hasMoreImages, setHasMoreImages] = useState(true);
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const Access_Key = 'tduHHbAa4npMMmy9-9F3ymHBTWtNJqSC9pq8S2nRSMo';

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                
                const params = {
                    client_id: Access_Key,
                    query: query,
                    orientation: 'landscape',
                    page: page,
                    per_page: 12,
                };
                const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
                    params: params,
                    headers: {
                        Authorization: `Client-ID ${Access_Key}`
                    }
                });
                const normalizeData = response.data.results.map(({ alt_description, id, urls }) => ({
                    alt: alt_description,
                    id,
                    small: urls.small,
                    regular: urls.regular,
                }));

                if (page === 1) {
                    setImages(normalizeData);
                } else {
                    setImages(prevImages => [...prevImages, ...normalizeData]);
                }

                setError('');

                if (response.data.results.length === 0) {
                    setHasMoreImages(false);
                    toast.error("Sorry, we have not found the photos for your request. Try to write it differently.");
                }
            } catch (error) {
                setError('Error fetching images. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchImages();
        }
    }, [query, page]);

    const handleSearch = (query) => {
        setQuery(query);
        setPage(1);
        setImages([]);
    };

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {images.length > 0 && <ImageGallery images={images} onClick={handleImageClick} />}
            {hasMoreImages && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
            {selectedImage && (
                <ImageModal
                    images={selectedImage}
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                />
            )}
        </>
    );
}

export default App;
