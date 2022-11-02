function hamburguer() {
  const burguerEl = document.querySelector(".navbar__hamb");
  const modalMenuEl = document.querySelector(".navbar__modal-menu");
  const closeBtn = document.querySelector(".modal-menu__close-btn");

  burguerEl.addEventListener("click", () => {
    console.log("clickead");
    modalMenuEl.setAttribute("style", "display: flex");
  });

  closeBtn.addEventListener("click", () => {
    modalMenuEl.setAttribute("style", "display: none");
  });
}
