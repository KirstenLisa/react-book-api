handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const apiKey = 'AIzaSyBEav5lwfjcMJ0VCOHk7GHksa-3H3rNIrE';
    let searchParams = '';


    if(this.state.filterBookType==='No Filter') {
      searchParams = this.state.searchTerm + '&printType=' + this.state.filterPrintType + '&key=' + apiKey;
    } else {
      searchParams = this.state.searchTerm + '&filter=' + this.state.filterBookType + '&printType=' + this.state.filterPrintType + '&key=' + apiKey;
    }


    const searchUrl = baseUrl + searchParams;
    console.log(searchUrl);
    
    fetch(searchUrl)
      .then(response => {
      //check if response is ok
        console.log('About to check for errors');
        if(!response.ok) {
        console.log('An error did occur, let\'s throw an error.');
        throw new Error('Something went wrong'); //throw an error
        }
        return response; //ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          bookList: data.items,
          error: null
        })
        const title = 
              data.items[0].volumeInfo.title;
            console.log(title); 
        const author = data.items[0].volumeInfo.authors;
            console.log(author);
        const picture = data.items[0].volumeInfo.imageLinks.thumbnail;
            console.log(picture); 
    })
    .catch(err => {
      //this catch handles the error condition
      console.log('Handling the error here.', err);
    });
}
