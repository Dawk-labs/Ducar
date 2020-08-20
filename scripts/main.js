let index = 0;

const values = [
  {
    left: "0",
  },
  {
    left: "-100%",
  },
  {
    left: "-200%",
  },
  {
    left: "-300%",
  },
];
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.onclick = () => {
  if (index > 0) {
    index = index - 1;
  } else {
    return;
  }
  for (let i = 0; i <= 3; i++) {
    if (i == index) {
      indicators[index].style.backgroundColor = "white";
    }
    if (i != index) {
      indicators[i].style.backgroundColor = "rgba(1,1,1,0)";
    }
  }
  container.style.marginLeft = values[index].left;
  return;
};
rightArrow.onclick = () => {
  if (index < 3) {
    index = index + 1;
  }
  for (i in indicators) {
    if (i == index) {
      indicators[i].style.backgroundColor = "white";
      break;
    }
    indicators[i].style.backgroundColor = "rgba(1,1,1,0)";
  }
  container.style.marginLeft = values[index].left;
  return;
};

const container = document.getElementById("content");

const indicators = document.getElementById("indicators").children;

window.addEventListener("load", () => {
  indicators[index].style.backgroundColor = "white";
});

[...indicators].forEach((e, indx) => {
  indicators[indx].onclick = () => {
    indicators[index].style.backgroundColor = "rgba(1,1,1,0)";
    index = indx;
    e.style.backgroundColor = "white";
    container.style.marginLeft = values[indx].left;
  };
});
