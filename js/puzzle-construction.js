import { puzzle } from "../js/puzzle-data.js";

const isMobile = window.matchMedia(
  "only screen and (max-width: 767px)"
).matches;
const isTablet = window.matchMedia(
  "only screen and (min-width: 768px) and (max-width: 1439px)"
).matches;
const isDesktop = window.matchMedia(
  "only screen and (min-width: 1440px)"
).matches;

const listRef = document.querySelector(".integrations__list");
const listItemsRef = listRef.querySelectorAll(".integrations__item");

const addPuzzleIcons = (items) => {
  [...items].forEach((item, idx) => {
    if (isMobile) {
      if (idx % 2 === 1) {
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__small--top");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__small--bottom");
      }
    }
    if (isTablet) {
      if (idx % 4 === 0 || (idx + 1) % 4 === 0) {
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--top");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--bottom");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--right");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--left");
      }
    }
    if (isDesktop) {
      if (
        idx % 8 === 0 ||
        (idx + 6) % 8 === 0 ||
        (idx + 3) % 8 === 0 ||
        (idx + 1) % 8 === 0
      ) {
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--right");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--left");
      }
      if (
        (idx + 7) % 8 === 0 ||
        (idx + 5) % 8 === 0 ||
        (idx + 4) % 8 === 0 ||
        (idx + 2) % 8 === 0
      ) {
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--top");
        item.insertAdjacentHTML("beforeend", puzzle);
        item.lastChild.classList.add("puzzle__large--bottom");
      }
    }
  });
};

addPuzzleIcons(listItemsRef);
