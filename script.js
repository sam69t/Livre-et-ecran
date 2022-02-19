// Images asset
$(document).ready(function () {
  $(window).scrollTop(0);
});
// Global variable to control the scrolling behavior
const step = 50; // For each 30px, change an image
let lastStep = null;

// console.log(fruitImages);
function trackScrollPosition(img) {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y / 120) + 1, 2585);

  // const imageToUse = fruitImages[label];
  const labelForImg = label;
  const imageToUse = "assets/" + labelForImg + ".jpg";
  console.log(label, window.scrollY);

  if (lastStep != labelForImg) {
    img.setAttribute("src", imageToUse);
    // $(".image-container").css("background-image", `url('${imageToUse}')`);
    lastStep = labelForImg;
  }

  if (label <= 65) {
    console.log("go");
    $("header > span:nth-child(1)").css("opacity", "1");
  } else {
    $("header > span:nth-child(1)").css("opacity", "0.3");
  }
  if (label >= 65) {
    console.log("go");
    $("header > span:nth-child(1)").css("opacity", "0.3");

    $("header > span:nth-child(2)").css("opacity", "1");
  } else {
    $("header > span:nth-child(2)").css("opacity", "0.3");
  }

  if (label >= 130) {
    console.log("go");
    $("header > span:nth-child(2)").css("opacity", "0.3");

    $("header > span:nth-child(3)").css("opacity", "1");
  } else {
    $("header > span:nth-child(3)").css("opacity", "0.3");
  }

  if (label >= 190) {
    console.log("go");
    $("header > span:nth-child(3)").css("opacity", "0.3");

    $("header > span:nth-child(4)").css("opacity", "1");
  } else {
    $("header > span:nth-child(4)").css("opacity", "0.3");
  }

  if (label >= 260) {
    console.log("go");
    $("header > span:nth-child(4)").css("opacity", "0.3");

    $("header > span:nth-child(5)").css("opacity", "1");
  } else {
    $("header > span:nth-child(5)").css("opacity", "0.3");
  }
  if (label >= 340) {
    console.log("go");
    $("header > span:nth-child(5)").css("opacity", "0.3");

    $("header > span:nth-child(6)").css("opacity", "1");
  } else {
    $("header > span:nth-child(6)").css("opacity", "0.3");
  }

  if (label >= 420) {
    console.log("go");
    $("header > span:nth-child(6)").css("opacity", "0.3");

    $("header > span:nth-child(7)").css("opacity", "1");
  } else {
    $("header > span:nth-child(7)").css("opacity", "0.3");
  }
  if (label >= 500) {
    console.log("go");
    $("header > span:nth-child(7)").css("opacity", "0.3");

    $("header > span:nth-child(8)").css("opacity", "1");
  } else {
    $("header > span:nth-child(8)").css("opacity", "0.3");
  }
  $(".start").click(function () {
    // $("body").scrollTop(1300);
    // $(window).scrollTop(0);
    $("body").scrollTop(10000);
    window.scrollBy({
      top: -309500, // could be negative
      left: 0,
      behavior: "smooth",
    });
  });

  $(".end").click(function () {
    $("body").scrollTop(5000);
    window.scrollBy({
      top: 309500, // could be negative
      left: 0,
      behavior: "smooth",
    });

    // $(window).scrollTop(300000);
  });
  $(".button").click(function () {
    // $("body").scrollTop(1300);
    window.scrollBy({
      top: 25000, // could be negative
      left: 0,
      behavior: "smooth",
    });
  });

  $(document).ready(function () {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/

    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
      // declare variable
      var topPos = $(this).scrollTop();

      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {}); // click() scroll top EMD

    /*************************************
      LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
    // declare variable
    var h1 = 1000;

    $("#quatre").click(function () {
      // window.scrollY = 20000;
      console.log("quatre");
      // $("html, body").animate(
      //   {
      //     scrollTop: h1.top,
      //   },
      //   500
      // );
      // console.log("click");
    }); // left menu link2 click() scroll END
  }); // ready() END
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
