let vid = document.getElementById("memoire");
let currentTime = vid.currentTime;
let intervalRewind;
let speedValue;

$(document).ready(function () {
  idleTime = 0;

  //Increment the idle time counter every second.
  // var idleInterval = setInterval(timerIncrement, 50);

  // function timerIncrement() {
  //   idleTime++;
  //   if (idleTime > 2) {
  //     doPreload();
  //   }
  // }
  //   console.log(vid.currentTime);

  //Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    // idleTime = 0;
    // vid.play();
    // document.getElementById("info").innerHTML = "Play";
    // console.log(vid.currentTime);
  });
  $(".backward").hover(function (e) {
    document.getElementById("info").innerHTML = "Rewind";
  });
  $(".backward").click(function (e) {
    console.log("back");
    $(".debug-middle").css("display", "none");
    $(".debug-left").css("display", "none");
    $(".debug-right").css("display", "block");

    Halfhover();
  });

  $(".pause").hover(function (e) {
    document.getElementById("info").innerHTML = "Pause";

    stopInterval();
    console.log("pause");
    vid.pause();

    $(".debug-middle").css("display", "block");
    $(".debug-left").css("display", "none");
    $(".debug-right").css("display", "none");
  });
  $(".foward").hover(function (e) {
    document.getElementById("info").innerHTML = "Lecture";

    stopInterval();
    console.log("play");
    vid.play();
    vid.playbackRate = 1.2;
    $(".debug-middle").css("display", "none");
    $(".debug-left").css("display", "block");
    $(".debug-right").css("display", "none");

    console.log(vid.currentTime, vid.playbackRate);
  });

  // function doPreload() {
  //   // console.log("Inact");
  //   vid.pause();
  //   vid.playbackRate = 0;

  //   document.getElementById("info").innerHTML = "Pause";
  // }

  $("#un").click(function () {
    vid.currentTime = 0;
  });
  $("#deux").click(function () {
    vid.currentTime = 7;
  });
  $("#trois").click(function () {
    vid.currentTime = 14;
  });
  $("#quatre").click(function () {
    vid.currentTime = 22;
  });
  $("#cinq").click(function () {
    vid.currentTime = 27;
  });
  $("#six").click(function () {
    vid.currentTime = 34;
  });
  $("#sept").click(function () {
    vid.currentTime = 42;
  });
  $("#huit").click(function () {
    vid.currentTime = 48;
  });
  $("#neuf").click(function () {
    vid.currentTime = 54;
  });
  $("#dix").click(function () {
    vid.currentTime = 58;
  });
  //   if (vid.currentTime <= 25) {
  //     // $("#un").css("opacity", "1");
  //     console.log("how");
  //   } else if (vid.currentTime >= 25) {
  //     $("#un").css("opacity", "0.5");
  //     console.log("hey");
  //   }
  //   if (vid.currentTime > 25) {
  //     $("#deux").css("opacity", "1");
  //   } else {
  //     $("#deux").css("opacity", "0.5");
  //   }

  vid.ontimeupdate = function () {
    myFunction();
  };

  function Halfhover() {
    console.log("hey");
    // vid.play();
    vid.currentTime += -0.3;

    // intervalRewind = setInterval(function () {
    //   vid.currentTime += -0.01;
    // }, 10);

    // intervalRewind = setInterval(function () {
    //   vid.playbackRate = 1.0;
    //   if (vid.currentTime == 0) {
    //     clearInterval(intervalRewind);
    //     vid.pause();
    //   } else {
    //     vid.currentTime += -0.09;
    //     console.log(vid.currentTime);
    //   }
    // }, 100);
  }
  function stopInterval() {
    clearInterval(intervalRewind);
    vid.playbackRate = 1.0;
    ("CLEAREED INTERVAL");
  }

  function myFunction() {
    if (vid.currentTime < 3) {
      // console.log("un");
      $("#un").css("opacity", "1");
    } else {
      $("#un").css("opacity", "0.3");
    }
    if (vid.currentTime > 3) {
      // console.log("deux");
      $("#deux").css("opacity", "1");
    } else {
      $("#deux").css("opacity", "0.3");
    }
    if (vid.currentTime > 9.0) {
      // console.log("deux");
      $("#deux").css("opacity", "0.3");
      $("#trois").css("opacity", "1");
    } else {
      $("#trois").css("opacity", "0.3");
    }
    if (vid.currentTime > 17.0) {
      // console.log("deux");
      $("#trois").css("opacity", "0.3");
      $("#quatre").css("opacity", "1");
    } else {
      $("#quatre").css("opacity", "0.3");
    }
    if (vid.currentTime > 23.0) {
      // console.log("deux");
      $("#quatre").css("opacity", "0.3");
      $("#cinq").css("opacity", "1");
    } else {
      $("#cinq").css("opacity", "0.3");
    }
    if (vid.currentTime > 30.0) {
      // console.log("deux");
      $("#cinq").css("opacity", "0.3");
      $("#six").css("opacity", "1");
    } else {
      $("#six").css("opacity", "0.3");
    }
  }
});

//? VELOCITY;
// let timestamp = 0;
// let mY = 0;
// $(document).mousemove(function (e) {
//   let now = Date.now();
//   currentmY = e.screenY;

//   let dt = now - timestamp;
//   let distance = Math.abs(currentmY - mY);
//   let speed = Math.round((distance / dt) * 1000);
//   // console.log(dt, distance, speed);

//   speedValue = speed * 0.0009;

//   document.getElementById("speed").innerHTML = Math.round(speedValue);

//   vid.playbackRate = speedValue;

//   mY = currentmY;
//   timestamp = now;
// });
