
<body>
    <h1>📚 Bookshelf Apps</h1>
    <p>Welcome to the Bookshelf Apps project! This web application allows you to manage your personal library with ease. You can add books to your shelf, move them between different categories, and remove them when needed. Your book data is securely stored using localStorage, ensuring it remains intact even after closing the browser.</p>
    <h2>🌟 Features</h2>
    <p>Our Bookshelf Apps comes with the following key features:</p>    
    <h3>1. Add New Books</h3>
    <p>Easily add new books to your shelf. Each book entry includes the following details:</p>
    <ul>
        <li><strong>ID:</strong> Unique identifier for each book.</li>
        <li><strong>Title:</strong> The title of the book.</li>
        <li><strong>Author:</strong> The author of the book.</li>
        <li><strong>Year:</strong> The publication year of the book.</li>
        <li><strong>isComplete:</strong> Status indicating if the book is finished.</li>
    </ul>
    <p>Example of a book object:</p>
    <pre><code>{
  id: 3657848524,
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K. Rowling',
  year: 1997,
  isComplete: false,
}</code></pre>
    <p><em>Note: Each book ID should be unique. You can use the timestamp method to generate unique IDs: <code>+new Date()</code>.</em></p>
    <h3>2. Two Bookshelves</h3>
    <p>Books are organized into two categories:</p>
    <ul>
        <li><strong>Currently Reading:</strong> Contains books that are not yet finished (<code>isComplete: false</code>).</li>
        <li><strong>Completed:</strong> Contains books that are finished (<code>isComplete: true</code>).</li>
    </ul>
    <h3>3. Move Books Between Shelves</h3>
    <p>Books can be easily moved between the "Currently Reading" and "Completed" shelves.</p>
    <h3>4. Delete Books</h3>
    <p>Books can be removed from either shelf as needed.</p>
    <h3>5. Persistent Storage with localStorage</h3>
    <p>Your book data is stored in the browser's localStorage, ensuring it persists even after you close the web page.</p>
    <h2>🛠️ Installation and Setup</h2>
    <p>To set up the Bookshelf Apps locally, follow these steps:</p>
    <ol>
        <li><strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/yourusername/bookshelf-apps.git</code></pre></li>
        <li><strong>Navigate to the project directory:</strong>
        <pre><code>cd bookshelf-apps</code></pre></li>
        <li><strong>Open the project in your favorite code editor.</strong></li>
        <li><strong>Open <code>index.html</code> in your browser to start the application.</strong></li>
    </ol> 
    <h2>🏃‍♂️ Usage</h2>
    <ul>
        <li><strong>Add a Book:</strong> Fill out the book details in the provided form and click the "Add Book" button.</li>
        <li><strong>Move a Book:</strong> Use the "Move" button to transfer a book between shelves.</li>
        <li><strong>Delete a Book:</strong> Click the "Delete" button to remove a book from the shelf.</li>
        <li><strong>Persistence:</strong> All changes are automatically saved to localStorage.</li>
    </ul>
    <h2>🤝 Preview</h2>
  

![rec-Bookshelf-web](https://github.com/MufidValdes/bookshelf-apps/assets/81525382/75a11d4c-1fcd-4929-bcba-75c556dbe0a2)
  
    <p>Happy reading and organizing! If you have any questions or feedback, feel free to open an issue. 😊📚</p>
</body>
