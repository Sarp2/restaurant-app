import "./styless.css"

export const Home = () => {
  const content = document.getElementById("content");
  content.setAttribute(
    "style",
    "display:flex; align-items: center; flex-direction: column; justify-content: center; margin-top: 50px;"
  );
  
  const headerText = document.createElement("h1");
  headerText.textContent = "Welcome to Rosoko";
  headerText.setAttribute(
    "style", 
    "color: gray; font-size: 50px; font-family: Bebas Neue; margin-top: 20px; letter-spacing: 0.4rem; white-space: nowrap;"
  );
  content.appendChild(headerText);

  const headerSmallText = document.createElement("p");
  headerSmallText.textContent = "Incredible food for incredible people.";
  headerSmallText.setAttribute(
    "style",
    "color: #868C8A; font-family: system-ui; font-weight: bold; margin-bottom: 20px;"
  );
  content.appendChild(headerSmallText);

  const descriptionText = document.createElement("p");
  descriptionText.textContent = "At Rosoko, we believe in creating extraordinary dining experiences that linger in your memory. Our culinary journey began with a simple vision: to serve exceptional food that tells a story. Every dish is crafted with passion, using the finest ingredients sourced from local producers who share our commitment to quality. Our talented chefs blend traditional techniques with innovative approaches, creating a menu that surprises and delights. From our signature dishes to seasonal specials, each plate is a work of art that celebrates the rich flavors and textures of carefully selected ingredients. Whether you're joining us for a romantic dinner, a family celebration, or a casual lunch, our warm and inviting atmosphere sets the perfect stage for your dining experience. We take pride in our attentive service, ensuring that every visit to Rosoko is nothing short of exceptional.";
  descriptionText.setAttribute(
    "style",
    "color: #4A4A4A; font-family: system-ui; font-size: 1.1rem; line-height: 1.6; max-width: 800px; text-align: center; margin: 0 auto 40px; padding: 0 20px;"
  );
  content.appendChild(descriptionText);

  const footer = document.createElement("div");
  footer.setAttribute(
    "style",
    "position: fixed; bottom: 0; left: 0; right: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 32px; background-color: rgba(0, 0, 0, 0.12); box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
  );
  content.appendChild(footer);

  const footerText = document.createElement("p");
  footerText.textContent = "© 2024 Rosoko. All rights reserved.";
  footerText.setAttribute(
    "style",
    "color: white; font-family: Bebas Neue; letter-spacing: 0.4rem; font-size: 15px;"
  );
  footer.appendChild(footerText);
};
