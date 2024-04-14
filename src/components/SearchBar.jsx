// import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import css from "./SearchBar.module.css";
// // import { GoSearch } from "react-icons/go";

// const SearchBar = ({ onSubmit }) => {
//     const [query, setQuery] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!/^[a-zA-Z\s]*$/.test(query.trim())) {
//             toast("❌   Please enter valid letters only.");
//             return;
//         }
//         if (query.trim() === '') {
//             toast.error("Please enter a search query.");
//             return;
//         }
//         onSubmit(query);
//         setQuery('');
//     };

//     return (
//         <header className={css.header}>
//             <form className={css.form} onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Search images and photos..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     className={css.input}
//                 />
//                 <button type="submit" className={css.btn}>Search</button>
//             </form>
//             <Toaster position="top-right" />
//         </header>
//     );
// };

// export default SearchBar;





import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.query.trim().toLowerCase(); // змінено з 'values.search' на 'values.query'

    if (!formattedSearch) {
      toast.error("The search field cannot be empty!");
    } else {
      onSubmit(formattedSearch);
      actions.resetForm();
    }
  };
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit} // використання функції handleSubmit
      >
        <Form className={css.Form}>
          <Field
            className={css.Field}
            placeholder="Search images and photos"
            type="text"
            name="query"
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
};
export default SearchBar;