let imgIndex = 0;
let maxIndex = 0;
var inter;

$(document).ready(function () {
  // INITIALIZATION
  maxIndex = $("img").length - 1;
  animateSlider();
  $("img").each(function (index) {
    $("#imgNavs").append(
      `<span class="${index === imgIndex ? "active" : ""}" ></span>`
    );
  });

  //   ON NEXT
  $(document).on("click", "#btnNext", () => {moveRight();resetAnimation()});

  //   ON PREV
  $(document).on("click", "#btnPrev", () => {moveLeft();resetAnimation()});

  //   ON PLAY / PAUSE
  $(document).on("click", "#btnPlayPause", animateSlider);

  //   ON DOT CLICK
  $(document).on("click", "#imgNavs span", function () {
    imgIndex = $(this).index();
    displayImage(imgIndex);
    stopAnimation();
  });
});

// FUNCTION : Display Image Given by Index
const displayImage = (index) => {
  $("#slides")
    .stop()
    .animate(
      {
        left: -(index * $("img").width()),
      },
      700,
      "swing"
    );
  $("#imgNavs span").removeClass("active").eq(index).addClass("active");
};

// Function: Move using Prev & Next buttons
const moveRight = () => {
  imgIndex = imgIndex === maxIndex ? 0 : imgIndex + 1;
  displayImage(imgIndex);
};
const moveLeft = () => {
  imgIndex = imgIndex === 0 ? maxIndex : imgIndex - 1;
  displayImage(imgIndex);
};

// Function: Toggle Automatic animation
const animateSlider = () => {
  if (inter) {
    clearInterval(inter);
    inter = undefined;
    $("#btnPlayPause").attr("data-state", "pause").text("Play");
  } else {
    inter = setInterval(moveRight, 4000);
    $("#btnPlayPause").attr("data-state", "play").text("Pause");
  }
};

// Function: stop animation if user jumps on specific slide
const stopAnimation = () => {
  if (inter) {
    clearInterval(inter);
    inter = undefined;
    $("#btnPlayPause").attr("data-state", "pause").text("Play");
  }
};

// Function: Reset Animation Duration when user manually changes the slide LEFT || RIGHT
const resetAnimation = () => {
  if (inter) {
    clearInterval(inter);
    inter = setInterval(moveRight, 4000);
  }
}
