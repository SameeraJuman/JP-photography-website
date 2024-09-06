document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("booking-form");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add form validation here if needed

    // Submit the form data (you can send it to a server using AJAX or handle it in another way)
    const formData = new FormData(bookingForm);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      // Here you can process the form data as needed (e.g., send it to a server)
    });

    alert("Booking submitted successfully!"); // You can replace this with your desired action after form submission
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("back-btn");

  backBtn.addEventListener("click", function () {
    window.history.back(); // This will take the user to the previous page
  });
});
