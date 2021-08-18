const svg = document.querySelectorAll(".svg path");
for (let i = 0; i<svg.length; i++) {
  console.log(`Letter ${i} is ${svg[i].getTotalLength()}`);
}

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".index");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});


