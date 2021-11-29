(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
   function toggleModal() {
    refs.modal.classList.toggle('is-open');

    const isModalClose = refs.modal.classList.contains("is-open");
    const method = isModalClose ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
}) ();
