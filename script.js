"use stirct";
const list = document.querySelector(".list");
const icon = document.querySelector(".icon");
const landing = document.querySelector(".landing");
icon.addEventListener("click", () => {
  list.classList.toggle("hidden");
});
landing.addEventListener("click", () => {
  list.classList.add("hidden");
});
