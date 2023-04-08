const titleInput = document.querySelector("#title");
const categoryInput = document.querySelector("#category");
const submitButton = document.querySelector("#submit");
const noticeBoard = document.querySelector("#notice-board");

// Retrieve notices from local storage
let notices = JSON.parse(localStorage.getItem("notices")) || [];

// Function to create a new notice element
function createNotice(title, category) {
  const notice = document.createElement("div");
  notice.classList.add("notice");

  const titleElement = document.createElement("div");
  titleElement.classList.add("notice-title");
  titleElement.textContent = title;
  titleElement.setAttribute("contenteditable", "true");
  titleElement.addEventListener("blur", () => {
    updateNotice(title, category, notice);
  });
  titleElement.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      updateNotice(title, category, notice);
    }
  });

  const categoryElement = document.createElement("div");
  categoryElement.classList.add("notice-category");
  categoryElement.textContent = category;
  categoryElement.setAttribute("contenteditable", "true");
  categoryElement.addEventListener("blur", () => {
    updateNotice(title, category, notice);
  });
  categoryElement.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      updateNotice(title, category, notice);
    }
  });

  const bodyElement = document.createElement("div");
 
}