const white = document.querySelectorAll(".white");
const black = document.querySelectorAll(".black");

for (let i = 0; i < white.length; i++) {
  white[i].addEventListener("click", (event) => {
    if (event.target === white[i]) {
      play();
    }
  });
}

for (let i = 0; i < black.length; i++) {
  black[i].addEventListener("click", (event) => {
    if (event.target === black[i]) {
      play();
    }
  });
}

function play() {
  console.log("연주");
}