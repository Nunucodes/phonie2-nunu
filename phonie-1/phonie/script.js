"use strict";
const teamIcon = document.querySelector(".bx-collapse-vertical");
const team2 = document.querySelector(".team2");
const addTeamMembers = function () {
  team2.classList.remove("hidden");
};
const removeTeamMembers = function () {
  team2.classList.add("hidden");
};
teamIcon.addEventListener("click", addTeamMembers);
