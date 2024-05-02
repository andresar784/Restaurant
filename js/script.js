document.addEventListener("DOMContentLoaded", function() {
    const openContactButton = document.getElementById("form-button1");
    // Add click event listener to the open contact button
    openContactButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Find the contact form by its ID
        const contactForm = document.getElementById("contacto");
        // Set the hidden attribute of the contact form to false
        contactForm.hidden = false;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openContactButton = document.getElementById("closeButton");
    // Add click event listener to the open contact button
    openContactButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Find the contact form by its ID
        const contactForm = document.getElementById("contacto");
        // Set the hidden attribute of the contact form to false
        contactForm.hidden = true;
    });
});