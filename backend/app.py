from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Database configuration
db_config = {
    'user': 'root',
    'password': 'madagascar21',  # Replace with your MySQL password
    'host': 'localhost',
    'database': 'online_library',  # Replace with your database name
}

# Function to connect to the database
def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM books')
    books = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', books=books)

@app.route('/search')
def search():
    keyword = request.args.get('keyword', '')  # Retrieve the search keyword from query parameters
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)  # Use `dictionary=True` to get results as dictionaries
    query = "SELECT * FROM books WHERE title LIKE %s OR author LIKE %s"
    cursor.execute(query, ('%' + keyword + '%', '%' + keyword + '%'))
    books = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(books) 

@app.route('/add_book', methods=['POST'])
def add_book():
    data = request.json
    print(data)
    title = data.get('title')
    author = data.get('author')
    genre = data.get('genre')
    isbn = data.get('isbn')
    year = data.get('year')
    description = data.get('description')
    imgsrc = data.get('imgsrc')

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO books (title, author, genre, isbn, year, description, imgsrc) VALUES (%s, %s, %s, %s, %s, %s, %s)', (title, author, genre, isbn, year, description, imgsrc))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Book added successfully'}), 201  # 201 Created

@app.route('/delete_book/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM books WHERE id = %s', (book_id,))
    deleted = cursor.rowcount  # Number of rows deleted
    conn.commit()
    cursor.close()
    conn.close()

    if deleted:
        return jsonify({'message': f'Book with ID {book_id} deleted successfully'}), 200
    else:
        return jsonify({'error': 'Book not found'}), 404

@app.route('/category/<category_name>')
def category(category_name):
    print(category_name)
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM books WHERE genre = %s', (category_name,))
    books = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(books)


if __name__ == '__main__':
    app.run(debug=True)
