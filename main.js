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
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 32, 2500);
});

var xValues = ["Ammoniti: 10", "Non ammoniti: 15", "Eliminati: 7"];
var yValues = [30, 45, 25];
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

function updateTimer() {
  future = Date.parse("September 30, 2023 12:00:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  if (d < 0 || h < 0 || m < 0 || s < 0) {
    document.getElementById("timer").innerHTML =
      "<div>" + "<span>Turno in corso</span></div>";
    document.getElementById("send-team").style.display = "none";
    document.getElementById("timer").style.textShadow = "0 0 25px #16a083";
  } else {
    document.getElementById("timer").innerHTML =
      "<div>" +
      d +
      "<span>GG</span></div>" +
      "<div>" +
      h +
      "<span>h</span></div>" +
      "<div>" +
      m +
      "<span>m</span></div>" +
      "<div>" +
      s +
      "<span>s</span></div>";
  }
}
setInterval("updateTimer()", 200);
