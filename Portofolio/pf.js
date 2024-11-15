console.log("Welcome to my portfolio!");
// Contoh sederhana untuk menambahkan efek hover pada link
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});
