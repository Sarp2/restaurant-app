import "./styless.css"

export const Menu = () => {
  const content = document.getElementById("content");
  content.setAttribute(
    "style",
    "display:flex; align-items: flex-start; flex-direction: column; justify-content: flex-start; margin-top: 50px;"
  );

  const descriptionText = document.createElement("p");
  descriptionText.textContent = "Join us for Chef Gerry Klaskala's take on modern American cuisine. We offer a nightly à la carte menu and an eight-course Chef's tasting menu. (Chef's tasting menu is available for the entire table only. Our menus change with the seasons and are updated nightly."
  descriptionText.setAttribute(
    "style",
    "color: #4A4A4A; font-family: system-ui; font-size: 1.1rem; line-height: 1.6; max-width: 800px; text-align: center; margin: 0 auto 40px; padding: 0 20px;"
  );
  content.appendChild(descriptionText);

  const menu = document.createElement("div");
  menu.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; margin-left: 28px;"
  );
  content.appendChild(menu);

  const menuHeader = document.createElement("h3");
  menuHeader.textContent = "MARCH 2025";
  menuHeader.setAttribute(
    "style",
    "font-family: system-ui; color: #595959;"
  );
  menu.appendChild(menuHeader);

  const snacksText = document.createElement("h3");
  snacksText.textContent = "shareable snacks";
  snacksText.setAttribute(
    "style",
    "font-family: system-ui; letter-spacing: 0.2rem; font-weight: 300; color: #595959; text-transform: uppercase;"
  );
  menu.appendChild(snacksText);

  
  
  const snacksDiv = document.createElement("div");
  snacksDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-left: 28px; margin-top: 20px;"
  );
  menu.appendChild(snacksDiv);

  const snacksTextOne = document.createElement("p");
  snacksTextOne.textContent = "castelvetrano olives";
  snacksTextOne.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextOne);

  const snacksTextOneDetail = document.createElement("p");
  snacksTextOneDetail.textContent = "toasted fennel, evoo";
  snacksTextOneDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextOneDetail);

  const snacksTextTwo = document.createElement("p");
  snacksTextTwo.textContent = "grilled tender beef";
  snacksTextTwo.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextTwo);

  const snacksTextTwoDetail = document.createElement("p");
  snacksTextTwoDetail.textContent = "korean bbq sauce, lime, cilantro";
  snacksTextTwoDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextTwoDetail);

  const snacksTextThree = document.createElement("p");
  snacksTextThree.textContent = "4 month old manchego";
  snacksTextThree.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextThree);

  const snacksTextThreeDetail = document.createElement("p");
  snacksTextThreeDetail.textContent = "apricot jam, walnuts, toasted baguette";
  snacksTextThreeDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextThreeDetail);

  const snacksTextFour = document.createElement("p");
  snacksTextFour.textContent = "crisped berkshire pork belly";
  snacksTextFour.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextFour);

  const snacksTextFourDetail = document.createElement("p");
  snacksTextFourDetail.textContent = "apple-cranberry chutney";
  snacksTextFourDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextFourDetail);

  const snacksTextFive = document.createElement("p");
  snacksTextFive.textContent = "chickpea fritters";
  snacksTextFive.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextFive);

  const snacksTextFiveDetail = document.createElement("p");
  snacksTextFiveDetail.textContent = "harissa, pickled cucumbers";
  snacksTextFiveDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextFiveDetail);

  const snacksTextSix = document.createElement("p");
  snacksTextSix.textContent = "country style pâte";
  snacksTextSix.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  snacksDiv.appendChild(snacksTextSix);

  const snacksTextSixDetail = document.createElement("p");
  snacksTextSixDetail.textContent = "pistachios, cornichons, dijon mustard, toasted ciabatta";
  snacksTextSixDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  snacksDiv.appendChild(snacksTextSixDetail);

  
  
  const soupAndSaladText = document.createElement("h3");
  soupAndSaladText.textContent = "Salad & Soup";
  soupAndSaladText.setAttribute(
    "style",
    "font-family: system-ui; letter-spacing: 0.2rem; font-weight: 300; color: #595959; text-transform: uppercase;"
  );
  menu.appendChild(soupAndSaladText);

  const saladAndSoupDiv = document.createElement("div");
  saladAndSoupDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-left: 28px; margin-top: 20px;"
  );
  menu.appendChild(saladAndSoupDiv);

  const saladAndSoupTextOne = document.createElement("p");
  saladAndSoupTextOne.textContent = "creamless celery root soup";
  saladAndSoupTextOne.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextOne);

  const saladAndSoupTextOneDetail = document.createElement("p");
  saladAndSoupTextOneDetail.textContent = "black truffles, parmigiano reggiano";
  saladAndSoupTextOneDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextOneDetail);

  const saladAndSoupTextTwo = document.createElement("p");
  saladAndSoupTextTwo.textContent = "ruby red & golden beets";
  saladAndSoupTextTwo.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextTwo);

  const saladAndSoupTextTwoDetail = document.createElement("p");
  saladAndSoupTextTwoDetail.textContent = "crispy quinoa, meyer lemon yogurt";
  saladAndSoupTextTwoDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextTwoDetail);

  const saladAndSoupTextThree = document.createElement("p");
  saladAndSoupTextThree.textContent = "romaine hearts";
  saladAndSoupTextThree.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextThree);

  const saladAndSoupTextThreeDetail = document.createElement("p");
  saladAndSoupTextThreeDetail.textContent = "fuji apple, red onion, blue cheese, burnt honey vinaigrette";
  saladAndSoupTextThreeDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextThreeDetail);

  const saladAndSoupTextFour = document.createElement("p");
  saladAndSoupTextFour.textContent = "arugula and endive";
  saladAndSoupTextFour.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextFour);

  const saladAndSoupTextFourDetail = document.createElement("p");
  saladAndSoupTextFourDetail.textContent = "thinly sliced mushrooms, fennel, parmesan, citrus vinaigrette";
  saladAndSoupTextFourDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextFourDetail);

  const saladAndSoupTextFive = document.createElement("p");
  saladAndSoupTextFive.textContent = "cucumber, chickpea, avocado";
  saladAndSoupTextFive.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextFive);

  const saladAndSoupTextFiveDetail = document.createElement("p");
  saladAndSoupTextFiveDetail.textContent = "tomato, romaine, lemon sesame dressing";
  saladAndSoupTextFiveDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  saladAndSoupDiv.appendChild(saladAndSoupTextFiveDetail);



  const startersText = document.createElement("h3");
  startersText.textContent = "starters";
  startersText.setAttribute(
    "style",
    "font-family: system-ui; letter-spacing: 0.2rem; font-weight: 300; color: #595959; text-transform: uppercase;"
  );
  menu.appendChild(startersText);

  const startersDiv = document.createElement("div");
  startersDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-left: 28px; margin-top: 20px;"
  );
  menu.appendChild(startersDiv);

  const startersTextOne = document.createElement("p");
  startersTextOne.textContent = "black truffle burrata";
  startersTextOne.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  startersDiv.appendChild(startersTextOne);

  const startersTextOneDetail = document.createElement("p");
  startersTextOneDetail.textContent = "arugula, prosciutto cotto, endives, evoo";
  startersTextOneDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  startersDiv.appendChild(startersTextOneDetail);

  const startersTextTwo = document.createElement("p");
  startersTextTwo.textContent = "crisped duck confit";
  startersTextTwo.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  startersDiv.appendChild(startersTextTwo);

  const startersTextTwoDetail = document.createElement("p");
  startersTextTwoDetail.textContent = "louisiana style dirty rice, scallions, duck jus";
  startersTextTwoDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  startersDiv.appendChild(startersTextTwoDetail);

  const startersTextThree = document.createElement("p");
  startersTextThree.textContent = "crisped jumbo lump crab cake";
  startersTextThree.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  startersDiv.appendChild(startersTextThree);

  const startersTextThreeDetail = document.createElement("p");
  startersTextThreeDetail.textContent = "nu’ó’c châ’m, pecans, basil, cilantro, crispy shallots	";
  startersTextThreeDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  startersDiv.appendChild(startersTextThreeDetail);

  const startersTextFour = document.createElement("p");
  startersTextFour.textContent = "yellowtail hamachi sashimi";
  startersTextFour.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  startersDiv.appendChild(startersTextFour);

  const startersTextFourDetail = document.createElement("p");
  startersTextFourDetail.textContent = "fuji apple, avocado, radish, cilantro, ponzu";
  startersTextFourDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  startersDiv.appendChild(startersTextFourDetail);

  const startersTextFive = document.createElement("p");
  startersTextFive.textContent = "three cheese agnolotti";
  startersTextFive.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  startersDiv.appendChild(startersTextFive);

  const startersTextFiveDetail = document.createElement("p");
  startersTextFiveDetail.textContent = "lamb bolognese, pecorino romano";
  startersTextFiveDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  startersDiv.appendChild(startersTextFiveDetail);



  const entreesText = document.createElement("h3");
  entreesText.textContent = "entrées";
  entreesText.setAttribute(
    "style",
    "font-family: system-ui; letter-spacing: 0.2rem; font-weight: 300; color: #595959; text-transform: uppercase;"
  );
  menu.appendChild(entreesText);

  const entreesDiv = document.createElement("div");
  entreesDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-left: 28px; margin-top: 20px;"
  );
  menu.appendChild(entreesDiv);

  const entreesTextOne = document.createElement("p");
  entreesTextOne.textContent = "herb-crusted lemon sole";
  entreesTextOne.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextOne);

  const entreesTextOneDetail = document.createElement("p");
  entreesTextOneDetail.textContent = "pan roasted cauliflower, shiitakes, lemon caper sauce";
  entreesTextOneDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextOneDetail);

  const entreesTextTwo = document.createElement("p");
  entreesTextTwo.textContent = "pan seared sea scallops";
  entreesTextTwo.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextTwo);

  const entreesTextTwoDetail = document.createElement("p");
  entreesTextTwoDetail.textContent = "ratatouille, roasted red pepper sauce with fine herbs";
  entreesTextTwoDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextTwoDetail);

  const entreesTextThree = document.createElement("p");
  entreesTextThree.textContent = "mountain trout";
  entreesTextThree.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextThree);

  const entreesTextThreeDetail = document.createElement("p");
  entreesTextThreeDetail.textContent = "spinach, snap beans, green grapes, toasted almonds, lemon";
  entreesTextThreeDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextThreeDetail);

  const entreesTextFour = document.createElement("p");
  entreesTextFour.textContent = "spiced bourbon glazed chilean salmon";
  entreesTextFour.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextFour);

  const entreesTextFourDetail = document.createElement("p");
  entreesTextFourDetail.textContent = "haricot vert, zucchini, fingerling potato, basil";
  entreesTextFourDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextFourDetail);

  const entreesTextFive = document.createElement("p");
  entreesTextFive.textContent = "roasted branzino";
  entreesTextFive.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextFive);

  const entreesTextFiveDetail = document.createElement("p");
  entreesTextFiveDetail.textContent = "flaked sea salt, lemon, roasted fingerling potatoes";
  entreesTextFiveDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextFiveDetail);

  const entreesTextSix = document.createElement("p");
  entreesTextSix.textContent = "breast of duck";
  entreesTextSix.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  entreesDiv.appendChild(entreesTextSix);

  const entreesTextSixDetail = document.createElement("p");
  entreesTextSixDetail.textContent = "honey spice glaze, fuji apples, savoy cabbage, carrots, natural jus";
  entreesTextSixDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  entreesDiv.appendChild(entreesTextSixDetail);



  const dessertText = document.createElement("h3");
  dessertText.textContent = "dessert";
  dessertText.setAttribute(
    "style",
    "font-family: system-ui; letter-spacing: 0.2rem; font-weight: 300; color: #595959; text-transform: uppercase;"
  );
  menu.appendChild(dessertText);

  const dessertDiv = document.createElement("div");
  dessertDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; margin-left: 28px; margin-top: 20px;"
  );
  menu.appendChild(dessertDiv);

  const dessertTextOne = document.createElement("p");
  dessertTextOne.textContent = "warm chocolate cheesecake";
  dessertTextOne.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextOne);

  const dessertTextOneDetail = document.createElement("p");
  dessertTextOneDetail.textContent = "softly whipped cream, chocolate sauce";
  dessertTextOneDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextOneDetail);

  const dessertTextTwo = document.createElement("p");
  dessertTextTwo.textContent = "lemon pound cake";
  dessertTextTwo.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextTwo);

  const dessertTextTwoDetail = document.createElement("p");
  dessertTextTwoDetail.textContent = "lemon custard, golden pineapple, honey-lemon yogurt";
  dessertTextTwoDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextTwoDetail);

  const dessertTextThree = document.createElement("p");
  dessertTextThree.textContent = "vanilla panna cotta";
  dessertTextThree.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextThree);

  const dessertTextThreeDetail = document.createElement("p");
  dessertTextThreeDetail.textContent = "navel orange, lemon sorbet, pistachio, pecan shortbread";
  dessertTextThreeDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextThreeDetail);

  const dessertTextFour = document.createElement("p");
  dessertTextFour.textContent = "chocolate toffee ice cream sandwich";
  dessertTextFour.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextFour);

  const dessertTextFourDetail = document.createElement("p");
  dessertTextFourDetail.textContent = "toffee chocolate wafers";
  dessertTextFourDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextFourDetail);

  const dessertTextFive = document.createElement("p");
  dessertTextFive.textContent = "maple-caramel nut cake";
  dessertTextFive.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextFive);

  const dessertTextFiveDetail = document.createElement("p");
  dessertTextFiveDetail.textContent = "almonds, pecans, cashews, walnuts, malt ice cream";
  dessertTextFiveDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextFiveDetail);

  const dessertTextSix = document.createElement("p");
  dessertTextSix.textContent = "georgia fuji apple tart";
  dessertTextSix.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 600;"
  );
  dessertDiv.appendChild(dessertTextSix);

  const dessertTextSixDetail = document.createElement("p");
  dessertTextSixDetail.textContent = "ginger brown butter, vanilla ice cream";
  dessertTextSixDetail.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300; margin-bottom: 20px;"
  );
  dessertDiv.appendChild(dessertTextSixDetail);

  const priceText = document.createElement("p");
  priceText.textContent = "snacks are priced between $5 - $14, starters between $12 - $29, entrees between $32 - $48, desserts between $11 - $12"
  priceText.setAttribute(
    "style",
    "font-family: system-ui; color: #595959; font-weight: 300;"
  );
  menu.appendChild(priceText);

  const gapDiv = document.createElement("div");
  gapDiv.setAttribute(
    "style",
    "width: 100px; height: 100px;"
  );

  menu.appendChild(gapDiv);

  const footer = document.createElement("div");
  footer.setAttribute(
    "style",
    "position: fixed; bottom: 0; left: 0; right: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 32px; background-color: rgba(0, 0, 0, 0.12); box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
  );
  menu.appendChild(footer);

  const footerText = document.createElement("p");
  footerText.textContent = "© 2024 Rosoko. All rights reserved.";
  footerText.setAttribute(
    "style",
    "color: white; font-family: Bebas Neue; letter-spacing: 0.4rem; font-size: 15px;"
  );
  footer.appendChild(footerText);
}
;