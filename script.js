// Images asset
$(document).ready(function () {
  $(window).scrollTop(0);
});

// Global variable to control the scrolling behavior
let lastStep = null;

// let images = new Array(2585);

const observer = lozad();
observer.observe();

// function preLoad() {
//   for (var i = 0; i < 2585; i++) {
//     images[i] = new Image();
//     images[i].src = "assets/" + i + ".jpg";
//   }
// }

// preLoad();
// preload = preLoad();

// preload.onprogress = (event) => {
//   document.getElementById("progress").textContent = event.progress + "%";
//   console.log(event.progress);
// };
// console.log(fruitImages);
function trackScrollPosition(img) {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y / 100), 2585);

  // const imageToUse = fruitImages[label];
  const labelForImg = label;
  const imageToUse = "assets/" + labelForImg + ".jpg";
  console.log(label);

  if (lastStep != labelForImg) {
    img.setAttribute("src", imageToUse);
    img.setAttribute("loading", "lazy");

    // $(".image-container").css("background-image", `url('${imageToUse}')`);
    lastStep = labelForImg;
  }

  if (label <= 65) {
    $("header > span:nth-child(1)").css("opacity", "1");
  } else {
    $("header > span:nth-child(1)").css("opacity", "0.3");
  }
  if (label >= 65) {
    $("header > span:nth-child(1)").css("opacity", "0.3");

    $("header > span:nth-child(2)").css("opacity", "1");
  } else {
    $("header > span:nth-child(2)").css("opacity", "0.3");
  }

  if (label >= 130) {
    $("header > span:nth-child(2)").css("opacity", "0.3");

    $("header > span:nth-child(3)").css("opacity", "1");
  } else {
    $("header > span:nth-child(3)").css("opacity", "0.3");
  }

  if (label >= 190) {
    $("header > span:nth-child(3)").css("opacity", "0.3");

    $("header > span:nth-child(4)").css("opacity", "1");
  } else {
    $("header > span:nth-child(4)").css("opacity", "0.3");
  }

  if (label >= 260) {
    $("header > span:nth-child(4)").css("opacity", "0.3");

    $("header > span:nth-child(5)").css("opacity", "1");
  } else {
    $("header > span:nth-child(5)").css("opacity", "0.3");
  }
  if (label >= 340) {
    $("header > span:nth-child(5)").css("opacity", "0.3");

    $("header > span:nth-child(6)").css("opacity", "1");
  } else {
    $("header > span:nth-child(6)").css("opacity", "0.3");
  }

  if (label >= 420) {
    $("header > span:nth-child(6)").css("opacity", "0.3");

    $("header > span:nth-child(7)").css("opacity", "1");
  } else {
    $("header > span:nth-child(7)").css("opacity", "0.3");
  }
  if (label >= 450) {
    $("header > span:nth-child(7)").css("opacity", "0.3");

    $("header > span:nth-child(8)").css("opacity", "1");
  } else {
    $("header > span:nth-child(8)").css("opacity", "0.3");
  }
  if (label >= 540) {
    $("header > span:nth-child(8)").css("opacity", "0.3");

    $("header > span:nth-child(9)").css("opacity", "1");
  } else {
    $("header > span:nth-child(9)").css("opacity", "0.3");
  }

  if (label >= 600) {
    $("header > span:nth-child(9)").css("opacity", "0.3");

    $("header > span:nth-child(10)").css("opacity", "1");
  } else {
    $("header > span:nth-child(10)").css("opacity", "0.3");
  }
  if (label >= 680) {
    $("header > span:nth-child(10)").css("opacity", "0.3");

    $("header > span:nth-child(11)").css("opacity", "1");
  } else {
    $("header > span:nth-child(11)").css("opacity", "0.3");
  }
  if (label >= 750) {
    $("header > span:nth-child(11)").css("opacity", "0.3");

    $("header > span:nth-child(12)").css("opacity", "1");
  } else {
    $("header > span:nth-child(12)").css("opacity", "0.3");
  }
  if (label >= 820) {
    $("header > span:nth-child(12)").css("opacity", "0.3");

    $("header > span:nth-child(13)").css("opacity", "1");
  } else {
    $("header > span:nth-child(13)").css("opacity", "0.3");
  }
  if (label >= 905) {
    $("header > span:nth-child(13)").css("opacity", "0.3");

    $("header > span:nth-child(14)").css("opacity", "1");
  } else {
    $("header > span:nth-child(14)").css("opacity", "0.3");
  }

  if (label >= 1005) {
    $("header > span:nth-child(14)").css("opacity", "0.3");

    $("header > span:nth-child(15)").css("opacity", "1");
  } else {
    $("header > span:nth-child(15)").css("opacity", "0.3");
  }

  if (label >= 1075) {
    $("header > span:nth-child(15)").css("opacity", "0.3");

    $("header > span:nth-child(16)").css("opacity", "1");
  } else {
    $("header > span:nth-child(16)").css("opacity", "0.3");
  }
  if (label >= 1150) {
    $("header > span:nth-child(16)").css("opacity", "0.3");

    $("header > span:nth-child(17)").css("opacity", "1");
  } else {
    $("header > span:nth-child(17)").css("opacity", "0.3");
  }

  if (label >= 1220) {
    $("header > span:nth-child(17)").css("opacity", "0.3");

    $("header > span:nth-child(18)").css("opacity", "1");
  } else {
    $("header > span:nth-child(18)").css("opacity", "0.3");
  }

  if (label >= 1295) {
    $("header > span:nth-child(18)").css("opacity", "0.3");

    $("header > span:nth-child(19)").css("opacity", "1");
  } else {
    $("header > span:nth-child(19)").css("opacity", "0.3");
  }
  if (label >= 1370) {
    $("header > span:nth-child(19)").css("opacity", "0.3");

    $("header > span:nth-child(20)").css("opacity", "1");
  } else {
    $("header > span:nth-child(20)").css("opacity", "0.3");
  }
  if (label >= 1445) {
    $("header > span:nth-child(20)").css("opacity", "0.3");

    $("header > span:nth-child(21)").css("opacity", "1");
  } else {
    $("header > span:nth-child(21)").css("opacity", "0.3");
  }
  if (label >= 1540) {
    $("header > span:nth-child(21)").css("opacity", "0.3");

    $("header > span:nth-child(22)").css("opacity", "1");
  } else {
    $("header > span:nth-child(22)").css("opacity", "0.3");
  }
  if (label >= 1615) {
    $("header > span:nth-child(22)").css("opacity", "0.3");

    $("header > span:nth-child(23)").css("opacity", "1");
  } else {
    $("header > span:nth-child(23)").css("opacity", "0.3");
  }

  if (label >= 1700) {
    $("header > span:nth-child(23)").css("opacity", "0.3");

    $("header > span:nth-child(24)").css("opacity", "1");
  } else {
    $("header > span:nth-child(24)").css("opacity", "0.3");
  }

  if (label >= 1775) {
    $("header > span:nth-child(24)").css("opacity", "0.3");

    $("header > span:nth-child(25)").css("opacity", "1");
  } else {
    $("header > span:nth-child(25)").css("opacity", "0.3");
  }
  if (label >= 1845) {
    $("header > span:nth-child(25)").css("opacity", "0.3");

    $("header > span:nth-child(26)").css("opacity", "1");
  } else {
    $("header > span:nth-child(26)").css("opacity", "0.3");
  }

  if (label >= 1915) {
    $("header > span:nth-child(26)").css("opacity", "0.3");

    $("header > span:nth-child(27)").css("opacity", "1");
  } else {
    $("header > span:nth-child(27)").css("opacity", "0.3");
  }
  if (label >= 1980) {
    $("header > span:nth-child(27)").css("opacity", "0.3");

    $("header > span:nth-child(28)").css("opacity", "1");
  } else {
    $("header > span:nth-child(28)").css("opacity", "0.3");
  }

  if (label >= 2075) {
    $("header > span:nth-child(28)").css("opacity", "0.3");

    $("header > span:nth-child(29)").css("opacity", "1");
  } else {
    $("header > span:nth-child(29)").css("opacity", "0.3");
  }

  if (label >= 2150) {
    $("header > span:nth-child(29)").css("opacity", "0.3");

    $("header > span:nth-child(30)").css("opacity", "1");
  } else {
    $("header > span:nth-child(30)").css("opacity", "0.3");
  }
  if (label >= 2215) {
    $("header > span:nth-child(30)").css("opacity", "0.3");

    $("header > span:nth-child(31)").css("opacity", "1");
  } else {
    $("header > span:nth-child(31)").css("opacity", "0.3");
  }

  if (label >= 2310) {
    $("header > span:nth-child(31)").css("opacity", "0.3");

    $("header > span:nth-child(32)").css("opacity", "1");
  } else {
    $("header > span:nth-child(32)").css("opacity", "0.3");
  }

  if (label >= 2405) {
    $("header > span:nth-child(32)").css("opacity", "0.3");

    $("header > span:nth-child(33)").css("opacity", "1");
  } else {
    $("header > span:nth-child(33)").css("opacity", "0.3");
  }
  if (label >= 2475) {
    $("header > span:nth-child(33)").css("opacity", "0.3");

    $("header > span:nth-child(34)").css("opacity", "1");
  } else {
    $("header > span:nth-child(34)").css("opacity", "0.3");
  }

  if (label >= 2555) {
    $("header > span:nth-child(34)").css("opacity", "0.3");

    $("header > span:nth-child(35)").css("opacity", "1");
  } else {
    $("header > span:nth-child(35)").css("opacity", "0.3");
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
    // $("body").scrollTop(5000);
    // window.scrollBy({
    //   top: 260000, // could be negative
    //   left: 0,
    //   behavior: "smooth",
    // });

    $("body").scrollTop(5000);
    window.scrollBy({
      top: 160000, // could be negative
      left: 0,
      behavior: "smooth",
    });

    // $(window).scrollTop(300000);
  });
  $(".button").click(function () {
    // $("body").scrollTop(1300);
    // window.scrollBy({
    //   top: 7000, // could be negative
    //   left: 0,
    //   behavior: "smooth",
    // });
    window.scrollBy({
      top: 17000, // could be negative
      left: 0,
      behavior: "smooth",
    });
  });
  if (label >= 70) {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
    $(".plus-down > div:nth-child(2)").css("opacity", "0");
  } else {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
    $(".plus-down > div:nth-child(2)").css("opacity", "0");
  }

  if (label >= 70) {
    $(".bibliographie").css("opacity", "0");
  } else {
    $(".bibliographie").css("opacity", "1");
  }
  if (label >= 550) {
    $(".plus-down > div:nth-child(1)").css("opacity", "1");
    $(".plus-down > div:nth-child(1)").css("cursor", "pointer");
  } else {
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
    $(".plus-down > div:nth-child(1)").css("cursor", "default");
  }
  if (label >= 695) {
    $(".plus-down > div:nth-child(1)").css("cursor", "default");
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
  } else {
  }

  if (label >= 760) {
    $(".plus-down > div:nth-child(1)").css("opacity", "1");
  } else {
  }
  if (label >= 1100) {
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
  } else {
  }
  if (label >= 1100) {
    $(".plus-down > div:nth-child(2)").css("opacity", "1");
  } else {
  }
  if (label >= 1220) {
    $(".plus-down > div:nth-child(2)").css("opacity", "0");
  } else {
  }
  if (label >= 1380) {
    $(".plus-down > div:nth-child(1)").css("opacity", "1");
  } else {
  }

  if (label >= 1440) {
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
  } else {
  }

  if (label > 1550 && label < 1630) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");
    $(".plus-down > div:nth-child(2)").css("opacity", "1");
    $(".plus-up > div:nth-child(1)").css("cursor", "pointer");
    $(".plus-down > div:nth-child(2)").css("cursor", "pointer");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else {
    $(".plus-up > div:nth-child(1)").css("cursor", "default");
    $(".plus-down > div:nth-child(2)").css("cursor", "default");
    // $(".plus-up > div:nth-child(1)").css("opacity", "0");
    // $(".plus-down > div:nth-child(2)").css("opacity", "0");
  }
  if (label > 1630 && label < 1700) {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-down > div:nth-child(2)").css("opacity", "0");

    $(".plus-up > div:nth-child(2)").css("opacity", "1");
    $(".plus-up > div:nth-child(2)").css("cursor", "pointer");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else {
    $(".plus-up > div:nth-child(2)").css("cursor", "default");

    // $(".plus-up > div:nth-child(2)").css("opacity", "0");
  }
  if (label > 1700 && label < 1780) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else if (label <= 1700) {
  }
  if (label >= 1780) {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");
    $(".plus-down > div:nth-child(2)").css("opacity", "1");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else {
  }
  if (label >= 1850) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");
    $(".plus-up > div:nth-child(2)").css("opacity", "1");
    $(".plus-down > div:nth-child(2)").css("opacity", "0");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else {
  }
  if (label >= 1915) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");

    $(".video-container").click(function () {
      $(".video-container").css("display", "none");
    });
  } else {
  }
  if (label >= 2080) {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-up > div:nth-child(2)").css("opacity", "1");
  } else {
  }
  if (label >= 2150) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");
  } else {
  }
  if (label >= 2315) {
    $(".plus-up > div:nth-child(1)").css("opacity", "1");
    $(".plus-up > div:nth-child(2)").css("opacity", "1");
    $(".plus-down > div:nth-child(1)").css("opacity", "1");
    $(".plus-down > div:nth-child(2)").css("opacity", "1");
  }
  if (label >= 2405) {
    $(".plus-up > div:nth-child(1)").css("opacity", "0");
    $(".plus-up > div:nth-child(2)").css("opacity", "0");
    $(".plus-down > div:nth-child(1)").css("opacity", "0");
    $(".plus-down > div:nth-child(2)").css("opacity", "0");
  }

  $(document).ready(function () {
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
}

$(document).ready(() => {
  const img = document.getElementById("pic");
  // register an event listener on window
  $(window).scroll(() => {
    // We don't need to use 'event' as the scroll exist in window
    trackScrollPosition(img);
  });
});
