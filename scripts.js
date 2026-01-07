// Initialize EmailJS with your public key
emailjs.init("eHLEkyfIwoH3R0v33");

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
      "wouejduldkbcnfdx",   // Your EmailJS service ID
      "template_yu8de4k",   // Your EmailJS template ID
      payload
    );

    console.log(res); // optional: see response in console
    status.textContent = "✅ Message sent successfully!";
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "❌ Could not send message. Try again.";
  }
});
