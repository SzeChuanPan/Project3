// Tool 1: Toggle Skills Section
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.getElementById("skillsSection");
  if (skills) {
    const btn = document.createElement("button");
    btn.textContent = "Toggle Skills";
    btn.style.margin = "10px";
    btn.style.padding = "10px";
    document.body.insertBefore(btn, skills);
    btn.addEventListener("click", () => {
      skills.style.display = skills.style.display === "none" ? "block" : "none";
    });
  }

  // Tool 2: Welcome alert on load
  alert("Welcome to my website!");
});
