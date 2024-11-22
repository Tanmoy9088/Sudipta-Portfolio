const li = document.querySelectorAll("li");
const hidden = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");
const overlay = document.querySelector(".overlay");
// const resume = document.querySelector(".resume");
// const resume1 = document.querySelector(".resume1");
// const close1 = document.querySelector(".close1");
// const closeModal = () => {
//   hidden[i].classList.add("hidden");
//   overlay.classList.add("hidden");
// };

hidden[0].style.backgroundColor = "rgba(50,60,90,0.6)";
// hidden[0].style.left ='200 px';
for (let i = 0; i < hidden.length; i++) {
  li[i].addEventListener("click", function () {
    // console.log("hi");
    hidden[i].classList.remove("hidden");
    console.log("hi");
    overlay.classList.remove("hidden");
    // hidden[0].style.width = "100%";
    // hidden[1].style.transiton ='2s';
  });
}
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    hidden[i].classList.add("hidden");
    overlay.classList.add("hidden");
    console.log('hello')
  });
}
for (let i = 0; i < close.length; i++) {
  overlay.addEventListener("click", function () {
    hidden[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
