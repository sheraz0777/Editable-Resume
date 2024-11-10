document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resume = document.getElementById("resume") as HTMLElement;
  const formContainer = document.querySelector(
    ".form-container"
  ) as HTMLElement;

  const nameField = document.getElementById("name") as HTMLInputElement;
  const emailField = document.getElementById("email") as HTMLInputElement;
  const contactField = document.getElementById("contact") as HTMLInputElement;
  const educationField = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const skillsField = document.getElementById("skills") as HTMLTextAreaElement;
  const experienceField = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const profilePicField = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;

  const displayName = document.getElementById("displayName") as HTMLElement;
  const displayContact = document.getElementById(
    "displayContact"
  ) as HTMLElement;
  const displayEducation = document.getElementById(
    "displayEducation"
  ) as HTMLElement;
  const displaySkills = document.getElementById(
    "displaySkills"
  ) as HTMLUListElement;
  const displayExperience = document.getElementById(
    "displayExperience"
  ) as HTMLElement;
  const displayProfilePic = document.getElementById(
    "displayProfilePic"
  ) as HTMLImageElement;

  // Hide form and show resume on submit
  form.addEventListener("submit", (event: Event): void => {
    event.preventDefault();
    formContainer.style.display = "none"; // Hide the form
    resume.style.display = "block"; // Show the resume

    // Populate resume fields
    displayName.textContent = nameField.value;
    displayContact.textContent = `${emailField.value} | ${contactField.value}`;
    displayEducation.textContent = educationField.value;
    displayExperience.textContent = experienceField.value;

    const skillsArray = skillsField.value
      .split(",")
      .map((skill) => skill.trim());
    displaySkills.innerHTML = "";
    skillsArray.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      displaySkills.appendChild(li);
    });

    // Profile Picture
    const profilePic = profilePicField.files ? profilePicField.files[0] : null;
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function () {
        displayProfilePic.src = reader.result as string;
      };
      reader.readAsDataURL(profilePic);
    }
  });

  // Toggle visibility of sections
  const toggleButtons = document.querySelectorAll(
    ".toggle-button"
  ) as NodeListOf<HTMLButtonElement>;
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target ?? ""; // Use fallback for undefined
      const targetSection = document.getElementById(targetId) as HTMLElement;
      if (targetSection) {
        targetSection.classList.toggle("hidden");
      }
    });
  });
});
