 // JavaScript to handle form validation and submission
 const form = document.getElementById('contactForm');
 const successMessage = document.getElementById('success-message');
 form.addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent form from submitting the traditional way
     const name = document.getElementById('name').value.trim();
     const email = document.getElementById('email').value.trim();
     const message = document.getElementById('message').value.trim();
     // Validate input fields
     if (name === "" || email === "" || message === "") {
         alert("All fields are required.");
         return;
     }
     // Simple email format validation
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
         alert("Please enter a valid email address.");
         return;
     }
     // If validation passes, show success message and log input to the console
     successMessage.style.display = 'block';
     console.log("Name:", name);
     console.log("Email:", email);
     console.log("Message:", message);
     // Optionally clear the form
     form.reset();
 });