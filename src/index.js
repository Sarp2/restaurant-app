import "./styless.css";
import { Home } from "./home";
import { About } from "./about";
import { Menu } from "./menu";

// Clear the current content
const clearContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
};

// Function to handle navigation
function navigate(path) {
  // Update the URL without page reload
  window.history.pushState({}, "", path);
  renderPage();
};

function renderPage() {
  const url = window.location.pathname;
  clearContent();

  switch(url) {
    case "/":
      Home();
      break; 
    
      case "/menu":
      Menu();
      break;   
    
      case "/about":
      About();
      break;
    
      default:
      console.log("Page not found 404.")
      break;
  }
};
// Initial page load
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to navigation links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      const path = link.getAttribute("href");
      navigate(path);
    });
  });
  
  renderPage();
});
