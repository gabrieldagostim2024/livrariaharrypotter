const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    quantity: props.book ? props.book.quantity : '',
    price: props.book ? props.book.price : '',
    date: props.book ? props.book.date : ''
  });