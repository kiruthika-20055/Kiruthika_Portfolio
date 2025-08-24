// Toggle dark mode
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  alert("Thanks for reaching out! You can also connect with me on GitHub or LinkedIn.");

  // Optionally, show links dynamically
  const contactSection = document.getElementById("contact");
  
  const socialDiv = document.createElement("div");
  socialDiv.innerHTML = `
    <p>Connect with me:</p>
    <a href="https://github.com/kiruthikas" target="_blank">🐱 GitHub</a><br/>
    <a href="https://www.linkedin.com/in/kiruthika-s" target="_blank">💼 LinkedIn</a>
  `;

  contactSection.appendChild(socialDiv);
});
