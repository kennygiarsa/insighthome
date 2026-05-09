<script>
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
      console.error("Error: Could not find the form with ID 'contactForm'");
      return;
    }

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log("Form submitted!"); // Check your browser console for this

      try {
        const name = document.getElementById('formName').value;
        const email = document.getElementById('formEmail').value;
        const service = document.getElementById('formService').value || "General Inquiry";
        const message = document.getElementById('formMessage').value;

        const phoneNumber = "6287773336210"; 
        
        // Properly encode the text for a URL
        const rawText = `Halo B Music Studio!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
        const encodedText = encodeURIComponent(rawText);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        
        console.log("Redirecting to:", whatsappUrl);

        // This is the action that opens WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success UI
        const successToast = document.getElementById('successToast');
        if (successToast) successToast.classList.remove('hidden');
        
        contactForm.reset();
      } catch (err) {
        console.error("An error occurred during redirect:", err);
      }
    });
  });
</script>