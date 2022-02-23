let queue = new createjs.LoadQueue(false);
let images = new Array(2585);

const container = document.querySelector(".container");

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
queue.on("progress", (event) => {
  let progress = Math.floor(event.progress * 100);
  let progressMin = Math.floor(progress / 10);

  // console.log(scale(progress, 0, 100, 0, 1));

  let num = scale(progress, 0, 100, 0, 1);

  console.log(num);
  container.style.opacity = num;
  document.getElementById("expl").style.opacity = num;

  document.getElementById("loader").textContent = progress + "%";

  if (progress == 100) {
    document.getElementById("loader").textContent = "Entrer";
    $("#loader").addClass("enter");

    $(".enter").click(function () {
      $(".home").css({
        "-webkit-transform": "translateX(-100%)",
        "-ms-transform": "translateX(-100%)",
        transform: "translateX(-100%)",
      });

      console.log("click");
    });
  }
});

queue.on("fileload", handleFileComplete);
function handleFileComplete(event) {}

function preLoad() {
  for (var i = 0; i < 2585; i++) {
    // images[i] = new Image();
    // images[i].src = "assets/" + i + ".jpg";
    queue.loadFile("assets/" + i + ".jpg");
  }
}

preLoad();
