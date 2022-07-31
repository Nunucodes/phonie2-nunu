const teamIcon = document.querySelector(".bx-collapse-vertical");
const team2 = document.querySelector(".team2");

const addTeamMembers = function () {
  team2.classList.remove("hidden");
};

const removeTeamMembers = function () {
  team2.classList.add("hidden");
};
teamIcon.addEventListener("click", addTeamMembers);

// for the form

const phoneId = document.querySelector("#phone");
const NetworkNumberEl = document.querySelector(".network_img");

const checkMTNParameters = ["0803", "0703", "0903", "2340806"];
const checkGloParameters = ["0805", "0705", "0815", "2340905"];
const checkAirtelParameters = ["0802", "0902", "0701", "2340808"];
const check9mobileParameters = ["0809", "0818", "0817", "2340909"];

const sendMail = () => {
  console.log(phoneId.value);
  if (checkMTNParameters.includes(phoneId.value)) {
    NetworkNumberEl.textContent = `<img src="./images/MTN Logo.png" alt="network" >
    `;
  } else if (checkGloParameters.includes(phoneId.value)) {
    NetworkNumberEl.textContent = `<img src="./images/Glo logo.png" alt="network" >" />`;
  } else if (checkAirtelParameters.includes(phoneId.value)) {
    NetworkNumberEl.textContent = `<img src="./images/Airtel logo.png" alt="network" >`;
  } else if (check9mobileParameters.includes(phoneId.value)) {
    NetworkNumberEl.textContent = ` <img src="./images/9mobile Logo.png" alt="network" >`;
  } else {
    NetworkNumberEl.textContent = "<p> Invalid Network </p>";
  }
};
