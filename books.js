// const titleBooks = [
//   "Гарри Потер",
//   "Властелин Колец",
//   "война ими",
//   "Преступление и наказание",
// ];
// const listEl = document.querySelector("ul");
// function renderMarkup(titles) {
//   const liEl = titles
//     .map((title) => {
//       return `<li>${title}</li>`;
//     })
//     .join("");
//   listEl.innerHTML = liEl;
// }
// renderMarkup(titleBooks);
// localStorage.setItem("titleBooks", JSON.stringify(titleBooks));
//
//
//
// const titleBooks = JSON.parse(localStorage.getItem("titleBooks"));

// const listEl = document.querySelector("ul");
// function renderMarkup(titles) {
//   const liEl = titles
//     .map((title) => {
//       return `<li>${title}</li>`;
//     })
//     .join("");
//   listEl.innerHTML = liEl;
// }
// renderMarkup(titleBooks);
//
//
//
//
//
//
//
const refs = {
  button: document.querySelector("button"),
  input: document.querySelector("input"),
  listEl: document.querySelector("ul"),
};
const titleBooks = JSON.parse(localStorage.getItem("titleBooks") || "[]");

function renderMarkup(titles) {
  const liesEl = titles
    .map((title) => {
      return `<li>${title}</li>`;
    })
    .join("");
  refs.listEl.innerHTML = liesEl;
}
renderMarkup(titleBooks);

function addBook(e) {
  if (refs.input.value === "") return false;

  titleBooks.push(refs.input.value);
  localStorage.setItem("titleBooks", JSON.stringify(titleBooks));
  renderMarkup(titleBooks);
  refs.input.value = "";
}
refs.button.addEventListener("click", addBook);
