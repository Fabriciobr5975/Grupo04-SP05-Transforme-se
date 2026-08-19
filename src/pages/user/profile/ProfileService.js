"use strict";

export class ProfileService {
    constructor() {
        this.user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    }

    getProfileData() {
        const user = this.user;

        const initial = user.firstName.trim().charAt(0).toUpperCase();
        const email = user.email;
        const userName = user.firstName.concat(" ", user.lastName);
        const accountCreateAt = this.timeSinceCreation(new Date(user.accountCreateAt));

        return { initial, email, userName, accountCreateAt };
    }

    timeSinceCreation(creationDate) {
        const now = new Date();
        const differenceMs = now - creationDate;

        const seconds = Math.floor(differenceMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return `${String(days).padStart(2, "0")}d ${String(hours % 24).padStart(2, "0")}h ${String(minutes % 60).padStart(2, "0")}m`;
    }
}

function handleLogout(event) {
  const button = event.target.closest("#user-logout__btn");
  if (!button) return;

  const confirmed = window.confirm("Deseja sair da sua conta?");
  if (!confirmed) return;

  sessionStorage.removeItem("loggedInUser");
  window.navigateTo("/");
}

window.addEventListener("click", handleLogout);