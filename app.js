document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resume = document.getElementById("resume");
    var formContainer = document.querySelector(".form-container");
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var contactField = document.getElementById("contact");
    var educationField = document.getElementById("education");
    var skillsField = document.getElementById("skills");
    var experienceField = document.getElementById("experience");
    var profilePicField = document.getElementById("profilePic");
    var displayName = document.getElementById("displayName");
    var displayContact = document.getElementById("displayContact");
    var displayEducation = document.getElementById("displayEducation");
    var displaySkills = document.getElementById("displaySkills");
    var displayExperience = document.getElementById("displayExperience");
    var displayProfilePic = document.getElementById("displayProfilePic");
    // Hide form and show resume on submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        formContainer.style.display = "none"; // Hide the form
        resume.style.display = "block"; // Show the resume
        // Populate resume fields
        displayName.textContent = nameField.value;
        displayContact.textContent = "".concat(emailField.value, " | ").concat(contactField.value);
        displayEducation.textContent = educationField.value;
        displayExperience.textContent = experienceField.value;
        var skillsArray = skillsField.value
            .split(",")
            .map(function (skill) { return skill.trim(); });
        displaySkills.innerHTML = "";
        skillsArray.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill;
            displaySkills.appendChild(li);
        });
        // Profile Picture
        var profilePic = profilePicField.files ? profilePicField.files[0] : null;
        if (profilePic) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                displayProfilePic.src = reader_1.result;
            };
            reader_1.readAsDataURL(profilePic);
        }
    });
    // Toggle visibility of sections
    var toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var _a;
            var targetId = (_a = button.dataset.target) !== null && _a !== void 0 ? _a : ""; // Use fallback for undefined
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.toggle("hidden");
            }
        });
    });
});
