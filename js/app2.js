/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Book {
  #list

  constructor() {
    const localList = JSON.parse(localStorage.getItem('stuff'));
    if (localList !== null) {
      this.#list = localList.arr;
    } else {
      this.#list = [];
    }
  }

  #grab(j) {
    return document.getElementById(j);
  }

  #stack(templateString) {
    const template = document.createElement('template');
    template.innerHTML = templateString.trim();
    document.getElementById('books').appendChild(template.content.firstChild);
  }

  updateList() {
    document.getElementById('books').innerHTML = '';
    for (let j = 0; j < this.#list.length; j++) {
      const book = this.#list[j];
      this.#stack(`<li id="${book.title}">
        <p>"${book.title}"</p> by
        <p>${book.author}</p>
        <button class="removeBtn" id="${j + book.title}" value="${j}" onclick="target(this)">Remove</button>
      </li>
      <hr>`);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('stuff', JSON.stringify({
      arr: this.#list,
    }));
  }

  addBook() {
    const title = this.#grab('title').value;
    const author = this.#grab('author').value;
    const book = {};
    book.author = author;
    book.title = title;
    this.#list.push(book);
    this.updateLocalStorage();
    this.updateList();
    this.#grab('title').value = '';
    this.#grab('author').value = '';
  }

  removeBook(id, position) {
    const p = parseInt(position, 10);
    document.getElementById(id).remove();
    const filteredList = this.#list.slice(0, p).concat(this.#list.slice(p + 1, this.#list.length));
    this.#list = filteredList;
    this.updateLocalStorage();
    this.updateList();
  }

  loadPrev() {
    this.updateList();
  }
}
/* eslint-enable no-plusplus */
/* eslint-enable no-unused-vars */
/* eslint-enable class-methods-use-this */