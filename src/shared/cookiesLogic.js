// Cookies names
const CONSENT_ACCEPTED = "consent_accepted";

// Cookies time expires
const FIVE_HOURS = 5 * 60;
const EIGHT_HOURS = 8 * 60;

// Functions
const getCookieValue = (name) => {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return false;
};

const setCookie = (name, value, minutesToLive = 60) => {
  let expires = "";

  if (minutesToLive) {
    const date = new Date();
    date.setTime(date.getTime() + minutesToLive * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie =
    name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure;";
};

export { getCookieValue, setCookie, CONSENT_ACCEPTED, EIGHT_HOURS };
