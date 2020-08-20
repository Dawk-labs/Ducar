const navBarM = document.getElementById("nav-m");
const closeNavM = document.getElementById("closeNav");
const openNavM = document.getElementById("openNav");
openNavM.onclick = () => {
  navBarM.style.left = "0";
};

closeNavM.onclick = () => {
  navBarM.style.left = "100%";
};
