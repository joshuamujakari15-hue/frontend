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
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault(); // 🚫 STOP PAGE REFRESH

  console.log("✅ Form submit intercepted");

  status.textContent = "Sending message...";

  const payload = {
    action: "contact",
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("https://server-js123.onrender.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    status.textContent = data.reply;
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "❌ Could not send message.";
  }
});
