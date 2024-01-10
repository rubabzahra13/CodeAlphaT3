const checkForm = () => {
    
    if (document.getElementById('title').value == '' || document.getElementById('author').value == '' || document.getElementById('genre').value == '' || document.getElementById('isbn').value == '' || document.getElementById('year').value == '' || document.getElementById('description').value == '' || document.getElementById('imgsrc').value == '') {
        return false;
    }

    return true;
}

const clearForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('year').value = '';
    document.getElementById('description').value = '';
    document.getElementById('imgsrc').value = '';
}

document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').innerText = '';
    document.getElementById('form-message').classList.remove('success');

    if(!checkForm()) {
        document.getElementById('form-message').innerText = 'Please fill in all fields.';
        return;
    }

    const formData = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre : document.getElementById('genre').value,
        isbn : document.getElementById('isbn').value,
        year : document.getElementById('year').value,
        description : document.getElementById('description').value,
        imgsrc : document.getElementById('imgsrc').value,
    };

    fetch('http://localhost:5000/add_book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('form-message').innerText = 'Book added successfully!';
        document.getElementById('form-message').classList.add('success');

        clearForm();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-message').innerText = 'Error adding book.';
        document.getElementById('form-message').classList.add('error');
    });
});