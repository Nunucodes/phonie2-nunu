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

const checkMTNParameters = [
  "0803",
  "0703",
  "0903",
  "0913",
  "07025",
  "0704",
  "+2340806",
  "07026",
  "0704",
  "0706",
  "0806",
  "0810",
  "0813",
  "0814",
  "0816",
  "0906",
  "+234803",
  "+234703",
  "+234903",
  "+234913",
  "+2347025",
  "+234704",
  "+2347026",
  "+234704",
  "+234706",
  "+0806",
  "+234810",
  "+234813",
  "+234814",
  "+234816",
  "+234906",
];
const checkGloParameters = [
  "0805",
  "0705",
  "0815",
  "0807",
  "+2340905",
  "0905",
  "+234811",
  "+234805",
  "+234705",
  "+234815",
  "+234807",
  "+234905",
  "+234811",
];
const checkAirtelParameters = [
  "0802",
  "0902",
  "0701",
  "+2340808",
  "0907",
  "0708",
  "0812",
  "0808",
  "+234802",
  "+234902",
  "+234701",
  "+234907",
  "+234708",
  "+234812",
];
const check9mobileParameters = [
  "0809",
  "0818",
  "0817",
  "+2340909",
  "0908",
  "0909",
  "+234809",
  "+234818",
  "+234817",
  "+234908",
];
let carrierChecker = document.querySelector("#checker");
phoneId.addEventListener("keyup", function () {
  let name = phoneId.value;
  name = name.substring(0, 4);
  carrierChecker.value = name;
});
console.log(carrierChecker.value);

const sendMail = () => {
  console.log(phoneId.value);
  if (checkMTNParameters.includes(carrierChecker.value)) {
    NetworkNumberEl.innerHTML =
      '<img src="./images/MTN Logo.png" alt="network" >';
  } else if (checkGloParameters.includes(carrierChecker.value)) {
    NetworkNumberEl.innerHTML = `<img src="./images/Glo logo.png" alt="network" >`;
  } else if (checkAirtelParameters.includes(carrierChecker.value)) {
    NetworkNumberEl.innerHTML = `<img src="./images/Airtel logo.png" alt="network" >`;
  } else if (check9mobileParameters.includes(carrierChecker.value)) {
    NetworkNumberEl.innerHTML = ` <img src="./images/9mobile Logo.png" alt="network" >`;
  } else {
    NetworkNumberEl.innerHTML = "<p> Invalid Network </p>";
  }
};
