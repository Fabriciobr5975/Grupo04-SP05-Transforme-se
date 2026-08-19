import { useEffect } from "react";

export function checkUserIfAuthentication() {
  return sessionStorage.getItem("loggedInUser") ? true : false;
};

export function handleUserAuthentication(fallback = "/") {
  const userLoggedIn = checkUserIfAuthentication();

  if (userLoggedIn) {
    if (history.state && history.state.idx > 0) history.back()
    else window.navigateTo(fallback);
  }
}
