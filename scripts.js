const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending message...";

  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await emailjs.send(
      "wouejduldkbcnfdx",   // The service you connected in EmailJS
      "template_yu8de4k",  // The template you created
      payload              // Form data
    );

    status.textContent = "✅ Message sent successfully!";
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "❌ Could not send message. Try again.";
  }
});
