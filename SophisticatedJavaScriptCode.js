// Filename: SophisticatedJavaScriptCode.js

// This code demonstrates a complex web application that manages a library system with books, authors, and users.

// Class representing a Book in the library
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  // Method to display book details
  display() {
    console.log(`Book: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

// Class representing an Author of a book
class Author {
  constructor(name, nationality, birthYear) {
    this.name = name;
    this.nationality = nationality;
    this.birthYear = birthYear;
  }

  // Method to display author details
  display() {
    console.log(`Author: ${this.name}`);
    console.log(`Nationality: ${this.nationality}`);
    console.log(`Birth Year: ${this.birthYear}`);
  }
}

// Class representing a User of the library
class User {
  constructor(name, email, membershipLevel) {
    this.name = name;
    this.email = email;
    this.membershipLevel = membershipLevel;
  }

  // Method to display user details
  display() {
    console.log(`User: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Membership Level: ${this.membershipLevel}`);
  }
}

// Library class that manages books, authors, and users
class Library {
  constructor() {
    this.books = [];
    this.authors = [];
    this.users = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to add an author to the library
  addAuthor(author) {
    this.authors.push(author);
  }

  // Method to add a user to the library
  addUser(user) {
    this.users.push(user);
  }

  // Method to display all books in the library
  displayBooks() {
    console.log("--- Books in the Library ---");
    this.books.forEach((book) => {
      book.display();
      console.log("------------------------");
    });
  }

  // Method to display all authors in the library
  displayAuthors() {
    console.log("--- Authors in the Library ---");
    this.authors.forEach((author) => {
      author.display();
      console.log("------------------------");
    });
  }

  // Method to display all users of the library
  displayUsers() {
    console.log("--- Users of the Library ---");
    this.users.forEach((user) => {
      user.display();
      console.log("------------------------");
    });
  }
}

// Create instances of Book, Author, and User
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

const author1 = new Author("J.D. Salinger", "American", 1919);
const author2 = new Author("Harper Lee", "American", 1926);
const author3 = new Author("George Orwell", "English", 1903);

const user1 = new User("John Doe", "john@example.com", "Gold");
const user2 = new User("Jane Smith", "jane@example.com", "Silver");

// Create an instance of Library
const library = new Library();

// Add books, authors, and users to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.addAuthor(author1);
library.addAuthor(author2);
library.addAuthor(author3);

library.addUser(user1);
library.addUser(user2);

// Display all books, authors, and users in the library
library.displayBooks();
library.displayAuthors();
library.displayUsers();