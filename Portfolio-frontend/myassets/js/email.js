function php_email_form_submit(thisForm, action, formData) {
    const serviceID = 'service_4nyoj7o'; // EmailJS Service ID
    const templateID = 'template_xclejpe'; // EmailJS Template ID
    const publicKey = 'Q8uUkQza6Ao7H30Dc'; // EmailJS Public Key
  
    // Convert FormData to an object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, formObject, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        displayError(thisForm, error.text || 'Form submission failed. Please try again later.');
      });
  }
  