    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contactForm");
      
        form.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form from reloading the page
      
          // Show loading message
          form.querySelector(".loading").classList.add("d-block");
          form.querySelector(".error-message").classList.remove("d-block");
          form.querySelector(".sent-message").classList.remove("d-block");
      
          // Get form data
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
         // EmailJS setup
            const serviceID = 'service_4nyoj7o'; // EmailJS Service ID
            const templateID = 'template_uk4pb9z'; // EmailJS Template ID
            const publicKey = 'Q8uUkQza6Ao7H30Dc'; // EmailJS Public Key
      
          // Send email using EmailJS
          emailjs.send(serviceID, templateID, data, publicKey)
            .then(() => {
              // Success: Show message and reset form
              form.querySelector(".loading").classList.remove("d-block");
              form.querySelector(".sent-message").classList.add("d-block");
              form.reset();
            })
            .catch((error) => {
              // Error: Show error message
              form.querySelector(".loading").classList.remove("d-block");
              form.querySelector(".error-message").innerHTML = `Error: ${error.text || 'Something went wrong'}`;
              form.querySelector(".error-message").classList.add("d-block");
            });
        });
      });
      