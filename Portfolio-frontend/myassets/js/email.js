document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload
  
      // Show loading message
      const loadingMessage = form.querySelector(".loading");
      const errorMessage = form.querySelector(".error-message");
      const sentMessage = form.querySelector(".sent-message");
  
      loadingMessage.style.display = "block";
      errorMessage.style.display = "none";
      sentMessage.style.display = "none";
  
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // EmailJS configuration
      const serviceID = 'service_4nyoj7o'; // EmailJS Service ID
      const templateID = 'template_uk4pb9z'; // EmailJS Template ID
      const publicKey = 'Q8uUkQza6Ao7H30Dc'; // EmailJS Public Key
  
      // Send the email
      emailjs.send(serviceID, templateID, data, publicKey)
        .then(() => {
          loadingMessage.style.display = "none";
          sentMessage.style.display = "block"; // Show success message
          form.reset(); // Reset the form fields
        })
        .catch((error) => {
          loadingMessage.style.display = "none";
          errorMessage.innerText = `Error: ${error.text || 'An error occurred'}`;
          errorMessage.style.display = "block"; // Show error message
        });
    });
  });
  