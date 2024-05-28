const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <BooksContext.Provider value={{ books, setBooks }}>
              <Switch>
                <Route component={BooksList} path="/" exact={true} />
                <Route component={AddBook} path="/add" />
                <Route component={EditBook} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </BooksContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };