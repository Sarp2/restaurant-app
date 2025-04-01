import "./styless.css"

export const About = () => {
  const content = document.getElementById("content");
  content.setAttribute(
    "style",
    "display:flex; align-items: flex-start; flex-direction: column; justify-content: flex-start; margin-top: 50px;"
  );

  const developerText = document.createElement("p");
  developerText.textContent = "Developed by Sarp, a passionate software engineer focused on creating elegant and functional web applications. This restaurant menu application was crafted as part of The Odin Project curriculum, demonstrating modern JavaScript and DOM manipulation skills.";
  developerText.setAttribute(
    "style",
    "color: #4A4A4A; font-family: system-ui; font-size: 1.1rem; line-height: 1.6; max-width: 800px; text-align: center; margin: 0 auto 40px; padding: 0 20px;"
  );
  content.appendChild(developerText);

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/sarp2";
  githubLink.textContent = "Visit my GitHub";
  githubLink.setAttribute(
    "style",
    "font-family: system-ui; color: #4a4a4a; text-decoration: none; font-weight: 500; border-bottom: 1px solid #4a4a4a; margin: 0 auto 40px;"
  );
  content.appendChild(githubLink);
}