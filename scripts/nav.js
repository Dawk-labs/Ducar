var navBarM = document.getElementById("nav-m");
var closeNavM = document.getElementById("closeNav");
var openNavM = document.getElementById("openNav");
openNavM.onclick = () => {
  navBarM.style.left = "0";
};

closeNavM.onclick = () => {
  navBarM.style.left = "100%";
};
