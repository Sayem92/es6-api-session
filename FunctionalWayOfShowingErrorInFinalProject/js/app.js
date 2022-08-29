document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';
document.getElementById('author-details').textContent=''
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    // clear data
    searchField.value = '';
    
    // Handle empty search request
    if (searchText == '') {
        // please write something to display
        displayError();
    }
    else {
        // Display Spinner
        document.getElementById('spinner').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))
            .catch(error => displayError());
    }
}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('book-numbers').textContent ='';
    document.getElementById('author-details').textContent='';
    
}
// Display Search Result
const displaySearchResult = books =>{
    document.getElementById('book-numbers').textContent ='';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    const bookList = books.docs;
    if (bookList.length == 0) {
        displayError();
    }
    else{
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('book-numbers').innerText = `Books Found ${bookList.length}`;
        // Retrieve each book and display in a card
        bookList.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadAuthorDetail('${book.author_key ? book.author_key[0] : "n/a"}')" class="card h-100 text-center">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    
                    <h5 class="card-title">Title: ${book.title}</h5>
                    <p class="card-text">Author Name:${book.author_name ? book.author_name[0] : "n/a"}</p>
                    <p class="card-text">Publisher: ${book.publisher ? book.publisher[0] : "n/a"}</p>
                    <p class="card-text">First Year of Publication: ${book.first_publish_year ? book.first_publish_year: "n/a"}</p>
                </div>
            </div>
            `;
            
            searchResult.appendChild(div);
        });
    }
    
}

// Fetch author detail
const loadAuthorDetail = authorId =>{
    fetch(`https://openlibrary.org/authors/${authorId}.json`)
    .then(res => res.json())
    .then(res => displayAuthorDetail(res));
}
// Display author detail at the top
const displayAuthorDetail = (authorDetail) =>{
    window.scrollTo(0, 40);
    const authorShow = document.getElementById('author-details');
    authorShow.textContent =''
    const div = document.createElement('div');
    div.classList.add('card', 'bg-gray', 'text-warning', 'text-center');
    div.innerHTML = `
    <div class="card-body">
        
        <h1 class="card-title">Author name: ${authorDetail.name}</h1>
    </div>
    `;
    authorShow.appendChild(div);
}