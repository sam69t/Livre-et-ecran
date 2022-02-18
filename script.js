// Images asset

// const fruitImages = {
//   1: "assets/30.jpg",
//   2: "assets/31.jpg",
//   3: "assets/32.jpg",
//   4: "assets/33.jpg",
//   5: "assets/34.jpg",
//   6: "assets/35.jpg",
//   7: "assets/36.jpg",
//   8: "assets/37.jpg",
//   9: "assets/38.jpg",
//   10: "assets/39.jpg",
//   11: "assets/40.jpg",
//   12: "assets/41.jpg",
//   13: "assets/42.jpg",
//   14: "assets/43.jpg",
//   15: "assets/44.jpg",
//   16: "assets/45.jpg",
//   17: "assets/46.jpg",
//   18: "assets/47.jpg",
//   19: "assets/48.jpg",
//   20: "assets/49.jpg",
//   21: "assets/50.jpg",
//   22: "assets/51.jpg",
//   23: "assets/52.jpg",
//   24: "assets/53.jpg",
//   25: "assets/54.jpg",
//   26: "assets/55.jpg",
//   27: "assets/56.jpg",
//   28: "assets/57.jpg",
//   29: "assets/58.jpg",
//   30: "assets/59.jpg",
//   31: "assets/60.jpg",
//   32: "assets/61.jpg",
//   33: "assets/62.jpg",
//   34: "assets/63.jpg",
//   35: "assets/64.jpg",
//   36: "assets/65.jpg",
//   37: "assets/66.jpg",
//   38: "assets/67.jpg",
//   39: "assets/68.jpg",
//   40: "assets/69.jpg",
//   41: "assets/70.jpg",
//   42: "assets/71.jpg",
//   43: "assets/72.jpg",
//   44: "assets/73.jpg",
//   45: "assets/74.jpg",
//   46: "assets/75.jpg",
//   47: "assets/76.jpg",
//   48: "assets/77.jpg",
//   49: "assets/78.jpg",
//   50: "assets/79.jpg",
//   51: "assets/80.jpg",
//   52: "assets/81.jpg",
//   53: "assets/82.jpg",
//   54: "assets/83.jpg",
//   55: "assets/84.jpg",
//   56: "assets/85.jpg",
//   57: "assets/86.jpg",
//   58: "assets/87.jpg",
//   59: "assets/88.jpg",
// };
// Text style—
// const textStyle = {
//   1: { opacity: 0, transform: "0px" },
//   2: { opacity: 0, transform: "0px" },
//   3: { opacity: 0, transform: "0px" },
//   4: { opacity: 0, transform: "0px" },
//   5: { opacity: 0.25, transform: "15px" },
//   6: { opacity: 0.5, transform: "10px" },
//   7: { opacity: 0.75, transform: "5px" },
//   8: { opacity: 1, transform: "0px" },
//   9: { opacity: 1, transform: "0px" },
//   10: { opacity: 1, transform: "0px" },
//   11: { opacity: 1, transform: "0px" },
//   12: { opacity: 1, transform: "0px" },
//   13: { opacity: 1, transform: "0px" },
//   14: { opacity: 1, transform: "0px" },
//   15: { opacity: 1, transform: "0px" },
//   16: { opacity: 1, transform: "0px" },
//   17: { opacity: 1, transform: "0px" },
//   18: { opacity: 1, transform: "0px" },
//   19: { opacity: 1, transform: "0px" },
//   20: { opacity: 1, transform: "0px" },
// };

// Global variable to control the scrolling behavior
const step = 50; // For each 30px, change an image
let lastStep = null;

// console.log(fruitImages);
function trackScrollPosition(img) {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y / 180) + 1, 2585);

  // const imageToUse = fruitImages[label];
  console.log(label);
  const labelForImg = label;
  const imageToUse = "assets/" + labelForImg + ".jpg";
  console.log(label);

  if (lastStep != labelForImg) {
    img.setAttribute("src", imageToUse);
    // $(".image-container").css("background-image", `url('${imageToUse}')`);
    lastStep = labelForImg;
  }
  // Change the background image
  // Change the text style
  // const textStep = 2;
  // const textStyleToUseLine1 = textStyle[label];
  // const textStyleToUseLine2 =
  //   textStyle[Math.min(Math.max(label - textStep, 1), 20)];
  // const textStyleToUseLine3 =
  //   textStyle[Math.min(Math.max(label - textStep * 2, 1), 20)];
  // const textStyleToUseLine4 =
  //   textStyle[Math.min(Math.max(label - textStep * 3, 1), 20)];
  // $("#line1").css({
  //   opacity: textStyleToUseLine1.opacity,
  //   transform: `translateY(${textStyleToUseLine1.transform})`,
  // });
  // $("#line2").css({
  //   opacity: textStyleToUseLine2.opacity,
  //   transform: `translateY(${textStyleToUseLine2.transform})`,
  // });
  // $("#line3").css({
  //   opacity: textStyleToUseLine3.opacity,
  //   transform: `translateY(${textStyleToUseLine3.transform})`,
  // });
  // $("#line4").css({
  //   opacity: textStyleToUseLine4.opacity,
  //   transform: `translateY(${textStyleToUseLine4.transform})`,
  // });
}

$(document).ready(() => {
  const img = document.getElementById("pic");
  // register an event listener on window
  $(window).scroll(() => {
    // We don't need to use 'event' as the scroll exist in window
    trackScrollPosition(img);
  });
});
