// Move to Note Making Page
const navBarElements = document.getElementsByClassName("nav-item");
const newButton = navBarElements[2];
for (const child of newButton.children) {
  console.log(child.textContent);
}
