const storageKey = "bookshelf_data";

// check support Local Storage
function checkLocalStorage() {
  return typeof Storage !== "undefined";
}

// mendapatkan daftar buku dari Local Storage
function getBookList() {
  if (checkLocalStorage()) {
    const storedData = localStorage.getItem(storageKey);
    return storedData ? JSON.parse(storedData) : [];
  } else {
    console.error("Browser Anda tidak mendukung local storage");
    return [];
  }
}

// menyimpan daftar buku ke Local Storage
function saveBookList(bookList) {
  if (checkLocalStorage()) {
    localStorage.setItem(storageKey, JSON.stringify(bookList));
  } else {
    console.error("Browser Anda tidak mendukung local storage");
  }
}

// merender daftar buku
function renderBookList() {
  const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
  const completeBookshelfList = document.getElementById("completeBookshelfList");
  const bookList = getBookList();

  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  bookList.forEach(function(book) {
    const article = createBookElement(book);
    if (book.isComplete) {
      completeBookshelfList.appendChild(article);
    } else {
      incompleteBookshelfList.appendChild(article);
    }
  });
}

//  membuat elemen buku
function createBookElement(book) {
  const article = document.createElement("article");
  article.classList.add("book_item");

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const authorPara = createParagraph("Penulis: " + book.author);
  const yearPara = createParagraph("Tahun: " + book.year);

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("action");

  const greenButton = createButton(book.isComplete ? "Belum selesai di Baca" : "Selesai dibaca", "green", function() {
    toggleCompletion(book.id);
  });
  const redButton = createButton("Hapus buku", "red", function() {
    deleteBook(book.id);
  });

  actionDiv.appendChild(greenButton);
  actionDiv.appendChild(redButton);

  article.appendChild(h3);
  article.appendChild(authorPara);
  article.appendChild(yearPara);
  article.appendChild(actionDiv);

  return article;
}

// membuat elemen paragraph
function createParagraph(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

// membuat elemen button
function createButton(text, className, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener("click", onClick);
  return button;
}

// menambahkan buku baru
function addBook(title, author, year, isComplete) {
  const bookList = getBookList();
  const newBook = {
    id: Date.now(), 
    title: title,
    author: author,
    year: year,
    isComplete: isComplete,
  };
  bookList.push(newBook);
  saveBookList(bookList);
  renderBookList();
}

// Event listener form input buku
const formInputBook = document.getElementById("inputBook");
formInputBook.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = parseInt(document.getElementById("inputBookYear").value);
  const isComplete = document.getElementById("inputBookIsComplete").checked;

  addBook(title, author, year, isComplete);

  formInputBook.reset();
});

// Event listener form pencarian
const formSearchBook = document.getElementById("searchBook");
formSearchBook.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTitle = document.getElementById("searchBookTitle").value.trim();
  renderSearchResults(searchTitle);
});

// merender daftar buku saat DOM dimuat
document.addEventListener("DOMContentLoaded", renderBookList);

// dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Fungsi pencarian buku berdasarkan judul
function searchBookByTitle(title) {
  const bookList = getBookList();
  return bookList.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// fungsi merender hasil pencarian
function renderSearchResults(searchTitle) {
  const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
  const completeBookshelfList = document.getElementById("completeBookshelfList");

  const searchResults = searchBookByTitle(searchTitle);

  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  searchResults.forEach(function(book) {
    const article = createBookElement(book);
    if (book.isComplete) {
      completeBookshelfList.appendChild(article);
    } else {
      incompleteBookshelfList.appendChild(article);
    }
  });
}

// Fungsi untuk mengubah status buku
function toggleCompletion(bookId) {
  const bookList = getBookList();
  const index = bookList.findIndex(book => book.id === bookId);
  if (index !== -1) {
    bookList[index].isComplete = !bookList[index].isComplete;
    saveBookList(bookList);
    renderBookList();
  }
}

// Fungsi untuk menghapus buku
function deleteBook(bookId) {
  const bookList = getBookList();
  const index = bookList.findIndex(book => book.id === bookId);
  if (index !== -1) {
    bookList.splice(index, 1);
    saveBookList(bookList);
    renderBookList();
  }
}
