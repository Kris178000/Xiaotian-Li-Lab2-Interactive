let picture = document.getElementById("character-image");
let nameText = document.getElementById("character-name");
let factionText = document.getElementById("character-faction");
let introText = document.getElementById("character-description");
let skillsText = document.getElementById("character-skills");
let currentButton = document.getElementById("optimus-btn");

function selectButton(id) {
  currentButton.className = "character-button";
  currentButton.setAttribute("aria-pressed", "false");

  currentButton = document.getElementById(id);
  currentButton.className = "character-button selected";
  currentButton.setAttribute("aria-pressed", "true");
}

function showOptimus() {
  picture.src = "images/optimus.jpg";
  picture.alt = "Optimus Prime";
  nameText.textContent = "Optimus Prime";
  factionText.textContent = "AUTOBOT";
  introText.textContent = "Optimus Prime is the leader of the Autobots.";
  skillsText.textContent = "Strength, leadership and combat skills.";
  selectButton("optimus-btn");
}

function showBumblebee() {
  picture.src = "images/bumblebee.jpg";
  picture.alt = "Bumblebee";
  nameText.textContent = "Bumblebee";
  factionText.textContent = "AUTOBOT";
  introText.textContent = "Bumblebee is a small and brave Autobot scout.";
  skillsText.textContent = "Scouting, speed and agility.";
  selectButton("bumblebee-btn");
}

function showMegatron() {
  picture.src = "images/megatron.jpg";
  picture.alt = "Megatron";
  nameText.textContent = "Megatron";
  factionText.textContent = "DECEPTICON";
  introText.textContent = "Megatron is the leader of the Decepticons.";
  skillsText.textContent = "Strength, combat skills and a fusion cannon.";
  selectButton("megatron-btn");
}

function showSkills() {
  let panel = document.getElementById("skills-panel");
  let button = document.getElementById("skills-btn");

  panel.hidden = !panel.hidden;
  button.textContent = "Show / hide abilities";
  button.setAttribute("aria-expanded", !panel.hidden);
}

function enlargeText() {
  let button = document.getElementById("text-size-btn");

  if (introText.style.fontSize === "20px") {
    introText.style.fontSize = "";
    skillsText.style.fontSize = "";
    button.textContent = "Larger text";
  } else {
    introText.style.fontSize = "20px";
    skillsText.style.fontSize = "20px";
    button.textContent = "Normal text";
  }
}

function openWebsite() {
  window.open("https://corporate.hasbro.com/en-us", "_blank", "noopener");
}

document.getElementById("optimus-btn").addEventListener("click", showOptimus);
document.getElementById("bumblebee-btn").addEventListener("click", showBumblebee);
document.getElementById("megatron-btn").addEventListener("click", showMegatron);
document.getElementById("skills-btn").addEventListener("click", showSkills);
document.getElementById("text-size-btn").addEventListener("click", enlargeText);
document.getElementById("website-btn").addEventListener("click", openWebsite);

showOptimus();