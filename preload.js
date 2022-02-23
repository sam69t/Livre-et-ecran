let queue = new createjs.LoadQueue(false);
let images = new Array(2585);

queue.on("progress", (event) => {
  let progress = Math.floor(event.progress * 100);
  console.log(progress);

  document.getElementById("loader").textContent = progress + "%";

  if (progress == 100) {
    console.log("all done");
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
