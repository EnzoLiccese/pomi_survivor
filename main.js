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

document.getElementById("teams-list").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "none";
  document.querySelector("#testimonials").style.display = "block";
});

document.getElementById("home").addEventListener("click", () => {
  document.querySelector("#close-ham-menu").click();
  document.querySelector(".showcase-area").style.display = "block";
  document.querySelector("#testimonials").style.display = "none";
});
