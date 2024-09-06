document.addEventListener("DOMContentLoaded", function () {
  const selectedDateInput = document.getElementById("selected-date");
  const checkAvailabilityBtn = document.getElementById(
    "check-availability-btn"
  );
  const availableTimesContainer = document.getElementById("available-times");

  checkAvailabilityBtn.addEventListener("click", function () {
    const selectedDate = selectedDateInput.value;
    const availableTimes = generateRandomTimes();
    displayAvailableTimes(selectedDate, availableTimes);
  });

  function generateRandomTimes() {
    const times = [];
    for (let i = 0; i < 3; i++) {
      // Generate 3 random times for demonstration
      const hours = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60);
      const ampm = Math.random() < 0.5 ? "AM" : "PM";
      times.push(`${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`);
    }
    return times;
  }

  function displayAvailableTimes(date, times) {
    let html = `<p>Available Times on ${date}:</p>`;
    if (times.length > 0) {
      html += "<ul>";
      times.forEach((time) => {
        html += `<li>${time}</li>`;
      });
      html += "</ul>";
    } else {
      html += "<p>No available times</p>";
    }
    availableTimesContainer.innerHTML = html;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.querySelector(".header-content button");
  const checkAvailabilityBtn = document.getElementById("check-availability");
  const nextBtn = document.getElementById("next");

  backBtn.addEventListener("click", function () {
    window.location.href = "services.html"; // Redirect to services page
  });

  checkAvailabilityBtn.addEventListener("click", function () {
    const availableTimesContainer = document.getElementById("available-times");
    const selectedDate = document.getElementById("selected-date").value;
    const availableTimes = generateRandomTimes(); // Assuming you have a function that generates random times
    displayAvailableTimes(
      selectedDate,
      availableTimes,
      availableTimesContainer
    );
  });

  nextBtn.addEventListener("click", function () {
    window.location.href = "bookingform.html"; // Redirect to booking form page
  });

  // Sample function to generate random times (you can replace it with your own logic)
  function generateRandomTimes() {
    const times = [];
    for (let i = 0; i < 3; i++) {
      const hours = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60);
      const ampm = Math.random() < 0.5 ? "AM" : "PM";
      times.push(`${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`);
    }
    return times;
  }

  // Sample function to display available times
  function displayAvailableTimes(date, times, container) {
    let html = `<p>Available Times on ${date}:</p>`;
    if (times.length > 0) {
      html += "<ul>";
      times.forEach((time) => {
        html += `<li>${time}</li>`;
      });
      html += "</ul>";
    } else {
      html += "<p>No available times</p>";
    }
    container.innerHTML = html;
  }
});
