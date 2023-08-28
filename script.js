function toggleMenu() {
  const menu = document.querySelector(" .menu-links");
  const Icon = document.querySelector(" .hamburger-icon");
  menu.classList.toggle("open")
  Icon.classList.toggle("open")
}