import { puzzle } from "../js/puzzle-data.js";
import { data } from "./integrations-data.js";

const listRef = document.querySelector(".integrations__list");

const makeListBaseMarkup = (items) =>
  items
    .map(({ name, description, icon }) => {
      return `
        <li class="integrations__item">
          <a href="" class="integrations__link">
            <div class="integrations__wrap">
              <h4 class="integrations__option">
                <svg class="integrations__icon">
                  <use href="./images/icons.svg#${icon}"></use>
                </svg>
                ${name}
              </h4>
              <p class="integrations__desc">${description}</p>
            </div>
          </a>
        </li>`;
    })
    .join("");

const addPuzzleIcons = (blocks) => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1440;
  const isDesktop = window.innerWidth >= 1440;

  const parser = new DOMParser();
  const parsedMarkup = parser.parseFromString(
    makeListBaseMarkup(blocks),
    "text/html"
  );
  const items = [...parsedMarkup.body.children];

  listRef.innerHTML = "";

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

    listRef.append(item);
  });
};

addPuzzleIcons(data);

window.addEventListener("resize", () => {
  addPuzzleIcons(data);
});
