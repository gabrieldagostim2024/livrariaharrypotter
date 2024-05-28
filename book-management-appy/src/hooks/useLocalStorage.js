import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

try {
    const localValue = window.localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialValue;
  } catch (error) {
    return initialValue;
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

return [value, setValue];

  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      quantity: props.book ? props.book.quantity : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : ''
    };
  });