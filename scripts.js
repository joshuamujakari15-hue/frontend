// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form logic
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (!form) {
  console.error("❌ contactForm not found");
} else {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page refresh

    console.log("✅ Form submit intercepted");

    status.textContent = "Sending message...";

    const name = document.getElementById("name")?.value.trim() || "Unknown";
    const email = document.getElementById("email")?.value.trim() || "Not provided";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!message) {
      status.textContent = "❌ Please enter a message.";
      return;
    }

    const payload = {
      action: "contact",
      name,
      email,
      message
    };

    try {
      const res = await fetch("https://server-js123.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Network response was not OK");

      const data = await res.json();
      status.textContent = data.reply || "✅ Message sent successfully!";
      form.reset();
      console.log("✅ Contact form submitted successfully");
    } catch (err) {
      console.error("❌ Contact form error:", err);
      status.textContent = "❌ Could not send message. Please try again later.";
    }
  });
}
