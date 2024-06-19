const targetElement = document.getElementById("myButton");

targetElement.addEventListener("click", function() {
  const htmlContent = `
    <div class="mounted-content">
      <h2>This is the mounted content!</h2>
      <p>It was added on click.</p>
    </div>
  `;

  const containerElement = document.getElementById("contentContainer");

  // Consider using createElement for more control (safer for user-generated content)
  // const newElement = document.createElement("div");
  // newElement.classList.add("mounted-content");
  // newElement.innerHTML = "<h2>This is the mounted content!</h2><p>It was added on click.</p>";
  // containerElement.appendChild(newElement);

  containerElement.innerHTML = htmlContent;
});