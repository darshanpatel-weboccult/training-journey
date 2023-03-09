var time,
  currTime = 0,
  hrs,
  min,
  sec,
  msec,
  elemHrs,
  elemMin,
  elemSec,
  elemMsec,
  countdown;

// INITIALIZATION (storing elements to reduce overall DOM traversal)
$(document).ready(() => {
  elemHrs = $("#hrs");
  elemMin = $("#min");
  elemSec = $("#sec");
  elemMsec = $("#msec");
});

// ON START
$(document).on("click", "button.btn-start", timerStart);

// ON LAP
$(document).on("click", "button.btn-lap", timerLap);

// ON STOP
$(document).on("click", "button.btn-stop", timerStop);

// ON RESET
$(document).on("click", "button.btn-reset", timerReset);

// Function: starts countdown from 'currTime'
function timerStart() {
  if (countdown) return;
  if (currTime === 0) $("p.lap").remove();
  startCountdown();
  $("button.btn-start").text("start");
  $("#info")
    .attr("class", "info info-start").text("Started")
}

// Function: Add Lap with currTime stamp
function timerLap() {
  if (!currTime || !countdown) return;
  $("#info")
    .attr("class", "info info-lap")
    .text(`lap at : ${
      hrs > 0 ? hrs + "H" : ""
    } ${
      min > 0 ? min + "M" : ""
    } ${sec}S ${msec}CS`)
    .parent()
    .append(
      `<p class="info-lap lap">LAP ${$("p.lap").length + 1} AT &rarr; ${
        hrs > 0 ? hrs + "<span>H</span>" : ""
      } ${
        min > 0 ? min + "<span>M</span>" : ""
      } ${sec}<span>S</span> ${msec}<span>CS</span></p>`
    );
}

// Function: stops countdown prior to it's starting stage
function timerStop() {
  if (!currTime) return;
  stopCountdown();
  $("button.btn-start").text("restart");
  $("#info")
    .attr("class", "info info-stop")
    .text(`Stopped at : ${
      hrs > 0 ? hrs + "H" : ""
    } ${
      min > 0 ? min + "M" : ""
    } ${sec}S ${msec}CS`)
    .parent()
    .append(
      `<p class="info-stop lap">STOP AT &rarr; ${
        hrs > 0 ? hrs + "<span>H</span>" : ""
      } ${
        min > 0 ? min + "<span>M</span>" : ""
      } ${sec}<span>S</span> ${msec}<span>CS</span></p>`
    );
  currTime = 0;
}

// Function: reset everything to it's initial value
function timerReset() {
  stopCountdown();
  $("#info").attr("class", "info").text("just hit start");
  currTime = 0;
  updateDisplayTime(0, 0, 0, 0);
  $("#inp").val("");
  $("button.btn-start").text("start");
  $("p.lap").remove();
}

// Function: returns hour, min, seconds from given input in msec
function getTimes(tmsec = 0) {
  let hour = 0,
    minute = 0,
    second = 0;
  milisecond = (tmsec % 1000) / 10;
  let remaining = tmsec / 1000;

  hour = Math.floor(remaining / 3600);
  remaining -= hour * 3600;

  minute = Math.floor(remaining / 60);
  remaining -= minute * 60;

  second = Math.floor(remaining);

  return [hour, minute, second, milisecond];
}

// Function: starts countdown from 'currTime' value
function startCountdown() {
  if (countdown) return;

  currTime += 10;
  countdown = setInterval(() => {
    if (currTime >= time) {
      stopCountdown();
      currTime = undefined;
      return;
    }
    currTime += 10;
    [hrs, min, sec, msec] = getTimes(currTime);

    updateDisplayTime(hrs, min, sec, msec);
  }, 10);
}

// Function: removes interval to stop countdown
function stopCountdown() {
  if (!countdown) return;
  clearInterval(countdown);
  countdown = undefined;
}

// Function: updates values on display (Added check to update DOM only when value is changed)
function updateDisplayTime(hours, minutes, seconds, mseconds) {
  $(elemHrs).text() != hours &&
    $(elemHrs).text(hours < 10 ? "0" + hours : hours);
  $(elemMin).text() != minutes &&
    $(elemMin).text(minutes < 10 ? "0" + minutes : minutes);
  $(elemSec).text() != seconds &&
    $(elemSec).text(seconds < 10 ? "0" + seconds : seconds);
  $(elemMsec).text() != mseconds &&
    $(elemMsec).text(mseconds < 10 ? "0" + mseconds : mseconds);
}
