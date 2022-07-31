const PhoneNumberEl = document.getElementById("phone");
const NetworkNumberEl = document.getElementById("network");

const teamIcon = document.querySelector(".bx-collapse-vertical");
const team2 = document.querySelector(".team2");

const addTeamMembers = function () {
  team2.classList.remove("hidden");
};

const removeTeamMembers = function () {
  team2.classList.add("hidden");
};

teamIcon.addEventListener("click", addTeamMembers);

const checkMTNParameters = ["0803", "0703", "0903", "2340806"];
const checkGloParameters = ["0805", "0705", "0815", "2340905"];
const checkAirtelParameters = ["0802", "0902", "0701", "2340808"];
const check9mobileParameters = ["0809", "0818", "0817", "2340909"];

const sendMail = () => {
  console.log(PhoneNumberEl.value);
  if (checkMTNParameters.includes(PhoneNumberEl.value)) {
    NetworkNumberEl.innerHTML = `<div>
    <img class="network__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/310px-New-mtn-logo.jpg" alt="network" />
    </div>`;
  } else if (checkGloParameters.includes(PhoneNumberEl.value)) {
    NetworkNumberEl.innerHTML = `<div>
    <img class="network__image" src="https://i0.wp.com/businesspost.ng/wp-content/uploads/2021/10/Glo.jpg?w=1200&ssl=1" alt="network" />
    </div>`;
  } else if (checkAirtelParameters.includes(PhoneNumberEl.value)) {
    NetworkNumberEl.innerHTML = `<div>
    <img class="network__image" src="https://upload.wikimedia.org/wikipedia/en/0/0e/Airtel_Logo.jpg" alt="network" />
    </div>`;
  } else if (check9mobileParameters.includes(PhoneNumberEl.value)) {
    NetworkNumberEl.innerHTML = `<div>
    <img class="network__image" src="https://www.wragbysolutions.com/wp-content/uploads/2018/09/Mobile-9.png" alt="network" />
    </div>`;
  } else {
    NetworkNumberEl.innerHTML = "Invalid Network";
  }
};
