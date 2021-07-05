/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
let i = 0;
let list = [];
function g(j) {
  return document.getElementById(j);
}
function stack(templateString) {
  let template = document.createElement('template');
  template.innerHTML = templateString.trim();
  document.getElementById('books').appendChild(template.content.firstChild);
}
function addBook() {
  let title = g('t').value;
  let author = g('a').value; (unused-lets+ title) + "\">\n      <p>" + title + "</p>\n      <p>" + author + "</p>\n      <button id=\"" + (i + title) + "\" value=\"" + i + "\" onclick=\"removeBook(this.id, this.value)\">Remove</button>\n    </div>\n    <hr>";
  let book = {
    author: author,
    title: title,
  };
  list[i] = book;
  i += 1;
  window.localStorage.setItem('stuff', JSON.stringify({ arr: list }));
}
function removeBook(id, p) {
  let position = parseInt(p);
  list.splice(position, 1);
  document.getElementById(id).remove();
  localStorage.list = list;
}
function loadPrev() {
  if (typeof (Storage) !== 'undefined') {
    let mList = JSON.parse(localStorage.getItem('stuff')).arr;
    for (let j = 0; j < mList.length; j++) {
      let book = mList[j];
      stack("<div id=\"" + (j + book.title) + "\">\n        <p>" + book.title + "</p>\n        <p>" + book.author + "</p>\n        <button id=\"" + (j + book.title) + "\" value=\"" + j + "\" onclick=\"removeBook(this.id, this.value)\">Remove</button>\n      </div>\n      <hr>");
    }
  }
  else {
    alert(0);
  }
}
window.onload = loadPrev();
/* eslint-enable no-unused-vars */
/* eslint-enable prefer-const */
/* eslint-enable no-unused-expressions */
/* eslint-enable no-plusplus */

//# sourceMappingURL=app.js.map