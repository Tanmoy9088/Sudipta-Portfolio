const li1 = document.querySelectorAll("li")[0];
const li2 = document.querySelectorAll("li")[1];
const li3 = document.querySelectorAll("li")[2];
const hidden = document.querySelectorAll(".modal");
// const hidden2 = document.querySelector(".modal");
// const hidden3 = document.querySelector(".modal");
// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("p").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// hidden.classList.remove('hidden');
// for(let btn of hidden){
li1.addEventListener("click", function () {
    console.log("hi");
    hidden[0].classList.toggle("hidden1");
    hidden[1].classList.add("hidden2");
    hidden[2].classList.add("hidden3");
  });

li2.addEventListener("click", function () {
  console.log("hi");
  hidden[1].classList.toggle("hidden2");
  hidden[0].classList.add("hidden1");
  hidden[2].classList.add("hidden3");
});
li3.addEventListener("click", function () {
  console.log("hi");
  hidden[2].classList.toggle("hidden3");
  hidden[1].classList.add("hidden2");
  hidden[0].classList.add("hidden1");
});
// }
