const buttons = Array.from(document.querySelectorAll(".button"));
const playground = document.querySelector(".playground");
const actionBar = document.querySelector(".actions-bar");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;
    updateCSS(type, value);
  });
});

const updateCSS = (type, value) => {
  switch (type) {
    case "color":
      playground.style.color = `var(--color-${value}-text)`;
      playground.style.backgroundColor = `var(--color-${value})`;
      actionBar.style.backgroundColor = `var(--color-${value}-actions-bar)`;
      break;

    case "size":
      break;
  }
};
