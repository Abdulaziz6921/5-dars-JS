// Night Mode Function
let Mode = document.querySelector("body");
let Sidebar = document.querySelector(".sidebar");
let Text = document.querySelector(".text > p");
let Title = document.querySelector(".title > p");
let Title2 = document.querySelector("#creator");
let sidebarTop = document.querySelector(".top>button");
let sidebarMiddle = document.querySelector(".middle");
let sidebarBottom = document.querySelector(".bottom");

let nightMode = () => {
  Mode.classList.add("nightmode");
  Sidebar.style = "background: #5b5b5e; border: 2px solid white";
  Text.style.color = "white";
  Title.style.color = "white";
  Title2.style.color = "white";
  sidebarBottom.style.color = "white";
};

let lightMode = () => {
  Mode.classList.remove("nightmode");
  Sidebar.style = "background: white";
  Text.style.color = "black";
  Title.style.color = "black";
  Title2.style.color = "black";
  sidebarBottom.style.color = "black";
};

// Sidebar Size Function

let bigSidebar = () => {
  // Sidebar.className = "js_sidebar";
  Sidebar.style = "width:200px; z-index:2; transiton: 3s;";
  sidebarMiddle.style = "align-items: flex-end; padding-right: 40px";
  sidebarBottom.style = "align-items: flex-start; margin-right: -70px";
  sidebarTop.style = "margin-left: 100px";
};

let smallSidebar = () => {
  Mode.classList.remove("sidebar_size");
};
