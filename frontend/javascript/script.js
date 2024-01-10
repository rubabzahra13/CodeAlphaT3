const bookMapping = {
    "novels" : "Novels",
    "foreign_language" : "Foreign Language",
    "mathematics" : "Math",
    "history" : "History",
    "medical" : "Medical"
}

function getGenreFromUrl() {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    return pathParts[pathParts.length - 1].split('.')[0];
}

function fetchBooksByGenre(genre) {
    return fetch(`http://localhost:5000/category/${genre}`)
        .then(response => response.json())
        .then(books => {
            return books;  
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            throw error;  // Propagate the error
        });
}

async function getBooks(genre){

    if(genre === "index")
        return [];
    else {
        const books = await fetchBooksByGenre(bookMapping[genre]);
        return books;
    }
}

function renderBooks(books) {
    const container = document.getElementById('book-container');
    container.innerHTML = '';
    container.classList.add('book-container');


    books.forEach(book => {
        // Create a new book element with class book
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        // Create a new image element with class book-cover
        const imageElement = document.createElement('img');
        imageElement.src = book.imgsrc;
        imageElement.alt = book.title;
        imageElement.classList.add('book-cover');

        // Create a new div element with class book-info
        const infoElement = document.createElement('div');
        infoElement.classList.add('book-info');
        
        // Create a new h2 element for the book title
        const titleElement = document.createElement('h2');
        titleElement.innerText = book.title;

        // Create a new p element with class author
        const authorElement = document.createElement('p');
        authorElement.innerText = book.author;
        authorElement.classList.add('author');

        // Create a new p element with class description
        const descriptionElement = document.createElement('p');
        // make sure description is less than 20 characters
        let shortdesc;
        if (book.description.length > 20) {
            shortdesc = book.description.substring(0, 80) + "...";
        }
        descriptionElement.innerText = shortdesc;
        descriptionElement.classList.add('description');

        // Append the title, author, and description to the info element
        infoElement.appendChild(titleElement);
        infoElement.appendChild(authorElement);
        infoElement.appendChild(descriptionElement);

        // Append the image and info elements to the book element
        bookElement.appendChild(imageElement);
        bookElement.appendChild(infoElement);

        // Append the book element to the container

        // put on click event
        bookElement.addEventListener('click', () => {
            openModal(book);
        });

        container.appendChild(bookElement);
    });
}

const genre = getGenreFromUrl();
getBooks(genre).then(books => {
    console.log(books);
    renderBooks(books);
})

const searchFunction = () => {

    const search = document.getElementById('search-bar').value;
    fetch(`http://localhost:5000/search?keyword=${search}`)
        .then(response => response.json())
        .then(books => {
            renderBooks(books);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            throw error;  // Propagate the error
        });
}

const closeModal = () => {
    document.getElementById('book-detail-modal').style.display = 'none';
}

const deleteBook = (id) => {
    fetch(`http://localhost:5000/delete_book/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            console.log('Delete response:', data);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error deleting book:', error);
        });
}

const openModal = (book) => {
    //  <div id="book-detail-modal" class="modal">
    //     <div class="modal-content">
    //         <span class="close-button" onclick="closeModal()">&times;</span>
    //         <div class="modal-content-main">
    //             <h2 id="bookTitle">Book Title</h2>
    //             <p id="bookAuthor">Author: </p>
    //             <p id="bookYear">Year: </p>
    //             <img id="bookImage" src="" alt="Book Cover" style="max-width:200px; height:auto;">
    //             <p id="bookDescription">Description: </p>
    //         </div>
    //     </div>
    // </div>

    document.getElementById('bookTitle').innerText = book.title;
    document.getElementById('bookAuthor').innerText = `Author: ${book.author}`;
    document.getElementById('bookYear').innerText = `Year: ${book.year}`;
    document.getElementById('bookImage').src = book.imgsrc;
    document.getElementById('bookDescription').innerText = `Description: ${book.description}`;

    const deleteButton = document.getElementById('delete-button');

    deleteButton.addEventListener('click', () => {
        deleteBook(book.id);
        // closeModal();
    })

    document.getElementById('book-detail-modal').style.display = 'block';
}