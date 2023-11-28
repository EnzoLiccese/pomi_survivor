const loading = document.querySelector(".loading");
const content = document.querySelector(".content");
setTimeout(() => {
  loading.style.opacity = "0";
  loading.style.display = "none";
  content.style.opacity = "1";
}, 2000);

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   counter("count1", 0, 3, 4000);
// });

var xValues = ["Ammoniti: 0", "Non ammoniti: 3", "Eliminati: 33"];
var yValues = [0, 8, 92];
var barColors = ["#f8ed62", "#16a083", "red"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data["labels"][tooltipItem[0]["index"]];
        },
        label: function (tooltipItem, data) {
          return data["datasets"][0]["data"][tooltipItem["index"]] + "%";
        },
      },
    },
  },
});

const accordion = document.querySelectorAll(".accordion h3");
let mainParent;
let height;
let answer;
accordion.forEach((item) => {
  item.addEventListener("click", () => {
    height =
      item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
    answer = item.parentElement.nextElementSibling;
    mainParent = item.parentElement.parentElement;
    if (mainParent.classList.contains("active")) {
      mainParent.classList.remove("active");
      answer.style.height = `0px`;
    } else {
      mainParent.classList.add("active");
      answer.style.height = `${height}px`;
    }
  });
});

document.getElementById("teams-list").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "none";
  document.querySelector("#selected-teams-container").style.display = "none";
  document.querySelector("#testimonials").style.display = "block";
  document.querySelector("#rules").style.display = "none";
});

document.getElementById("home").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "block";
  document.querySelector("#testimonials").style.display = "none";
  document.querySelector("#selected-teams-container").style.display = "none";
  document.querySelector("#rules").style.display = "none";
});

document.getElementById("selected-teams").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "none";
  document.querySelector("#testimonials").style.display = "none";
  document.querySelector("#selected-teams-container").style.display = "block";
  document.querySelector("#rules").style.display = "none";
});

document.getElementById("rules-button").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "none";
  document.querySelector("#testimonials").style.display = "none";
  document.querySelector("#selected-teams-container").style.display = "none";
  document.querySelector("#rules").style.display = "block";
});

const filterTeamsList = (e) => {
  const value = e.target.value.toLowerCase();
  const elements = document.querySelectorAll('[id^="teams-player"]');
  const filteredElements = document.querySelectorAll(
    `[id^="teams-player ${value}"]`
  );
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  for (i = 0; i < filteredElements.length; i++) {
    filteredElements[i].style.display = "block";
  }
};

document.getElementById("search-input").addEventListener("input", (event) => {
  filterTeamsList(event);
});

// function updateTimer() {
//   future = Date.parse("November 25, 2023 14:55:00");
//   now = new Date();
//   diff = future - now;

//   days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   hours = Math.floor(diff / (1000 * 60 * 60));
//   mins = Math.floor(diff / (1000 * 60));
//   secs = Math.floor(diff / 1000);

//   d = days;
//   h = hours - days * 24;
//   m = mins - hours * 60;
//   s = secs - mins * 60;

//   if (d < 0 || h < 0 || m < 0 || s < 0) {
//     document.getElementById("timer").innerHTML =
//       "<div>" + "<span>Turno in corso</span></div>";
//     document.getElementById("send-team").style.display = "none";
//     document.getElementById("timer").style.backgroundColor = "transparent";
//     document.getElementById("timer").style.color = "black";
//     document.getElementById("timer").style.textShadow = "0 0 25px #16a083";
//     document.getElementById("timer-text").innerText =
//       "Termine consegna squadra settimo turno scaduto.";
//   } else {
//     document.getElementById("timer").innerHTML =
//       "<div>" +
//       d +
//       "<span>GG</span></div>" +
//       "<div>" +
//       h +
//       "<span>h</span></div>" +
//       "<div>" +
//       m +
//       "<span>m</span></div>" +
//       "<div>" +
//       s +
//       "<span>s</span></div>";
//   }
// }
// setInterval("updateTimer()", 1000);

window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("DOMContentLoaded", onLoad, false);

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(
    () =>
      (document.getElementsByClassName("fireworks")[0].style.display = "none"),
    8000
  );
});

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var canvas,
  ctx,
  w,
  h,
  particles = [],
  probability = 0.04,
  xPoint,
  yPoint;

function onLoad() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();

  window.requestAnimationFrame(updateWorld);
}

function resizeCanvas() {
  if (!!canvas) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
}

function updateWorld() {
  update();
  paint();
  window.requestAnimationFrame(updateWorld);
}

function update() {
  if (particles.length < 500 && Math.random() < probability) {
    createFirework();
  }
  var alive = [];
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].move()) {
      alive.push(particles[i]);
    }
  }
  particles = alive;
}

function paint() {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw(ctx);
  }
}

function createFirework() {
  xPoint = Math.random() * (w - 200) + 100;
  yPoint = Math.random() * (h - 200) + 100;
  var nFire = Math.random() * 50 + 100;
  var c =
    "rgb(" +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    ")";
  for (var i = 0; i < nFire; i++) {
    var particle = new Particle();
    particle.color = c;
    var vy = Math.sqrt(25 - particle.vx * particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy > 0 ? vy : -vy;
    }
    particles.push(particle);
  }
}

function Particle() {
  this.w = this.h = Math.random() * 4 + 1;

  this.x = xPoint - this.w / 2;
  this.y = yPoint - this.h / 2;

  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;

  this.alpha = Math.random() * 0.5 + 0.5;

  this.color;
}

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= 0.01;
    if (
      this.x <= -this.w ||
      this.x >= screen.width ||
      this.y >= screen.height ||
      this.alpha <= 0
    ) {
      return false;
    }
    return true;
  },
  draw: function (c) {
    c.save();
    c.beginPath();

    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.arc(0, 0, this.w, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;

    c.closePath();
    c.fill();
    c.restore();
  },
};
