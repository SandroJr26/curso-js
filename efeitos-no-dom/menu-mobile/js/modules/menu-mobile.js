import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu() {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, events, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}