window.addEventListener("DOMContentLoaded", (event) => {
  $(window).scrollTop(0);

  let queue = new createjs.LoadQueue(false);
  let images = new Array(2585);

  // setTimeout(() => {
  //   $("#loader").addClass("opapa");
  // }, 5000);

  const container = document.querySelector(".container");
  var el = document.getElementById("preloadjs-container");

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
  queue.on("progress", (event) => {
    let progress = Math.floor(event.progress * 100);
    let progressMin = Math.floor(progress / 10);

    // console.log(scale(progress, 0, 100, 0, 1));

    let num = scale(progress, 0, 100, 0, 1);

    // console.log(num);
    container.style.opacity = num;
    document.getElementById("expl").style.opacity = num;

    document.getElementById("loader").textContent = progress + "%";
    document.getElementById("title").textContent =
      "Chargement..." + progress + "%";

    if (progress == 100) {
      window.scrollBy({
        top: 0, // could be negative
        left: 0,
        behavior: "smooth",
      });

      document.getElementById("title").textContent = "Livre & écran";
      document.getElementById("loader").textContent = "Terminer";

      $(".entrer").css("display", "flex");

      $(".entrer").click(function () {
        $(".bibliographie").css("opacity", "1");

        $(".home").css("opacity", "0");
        $(".entrer").css("display", "none");
        $("body").css("overflow-y", "scroll");

        console.log("click");
        setTimeout(() => {
          $(".home").css("display", "none");
        }, 600);
      });
    }
  });

  function preLoad() {
    for (var i = 0; i < 640; i++) {
      // images[i] = new Image();
      // images[i].src = "assets/" + i + ".jpg";
      queue.loadFile("assets/" + i + ".jpg");
      // console.log("loading");
    }
  }
  // function preLoadTwo() {
  //   for (var i = 1000; i < 2000; i++) {
  //     // images[i] = new Image();
  //     // images[i].src = "assets/" + i + ".jpg";
  //     queue.loadFile("assets/" + i + ".jpg");
  //     console.log("loading");
  //   }
  // }

  preLoad();
});
