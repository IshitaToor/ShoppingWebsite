function subscribeNewsletter() {
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value.trim();
  
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
  
    // Simulate subscription action
    alert(`Thank you for subscribing with ${email}!`);
    emailInput.value = "";
  }
  