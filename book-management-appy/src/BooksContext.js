import React from 'react';

const BooksContext = React.createContext();

export default BooksContext;

import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';

const { books, setBooks } = useContext(BooksContext);