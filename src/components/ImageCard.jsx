import css from './ImageCard.module.css';

 const ImageCard = ({ imageUrl, alt, onClick }) => {
   return (
     <li className={css.card}>
       <div className={css.container}>
         <img src={imageUrl} alt={alt} onClick={onClick} width="350" height="220"/>
       </div>
     </li>
   );
 };

 export default ImageCard;