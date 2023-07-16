// This is click animations for the cards present on the home page and about page

const cardParent = document.querySelector("[card='parent']");

if (cardParent) {
  let initialLargeCard = null; // Variable to store the initially large card

  const cards = document.querySelectorAll("[card='wrapper']");
  // Add event listeners to each card
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Add 'is-large' class to the hovered card
      card.classList.add("is-large");

      // Remove 'is-large' class from other cards
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("is-large");
        }
      });
    });

    // Check if the card initially has the 'is-large' class
    if (card.classList.contains("is-large")) {
      initialLargeCard = card; // Store the initially large card
    }
  });

  // Add event listener to the parent wrapper
  cardParent.addEventListener("mouseleave", () => {
    // Add 'is-large' class back to the initially large card
    if (initialLargeCard) {
      initialLargeCard.classList.add("is-large");
    }

    // Remove 'is-large' class from other cards
    cards.forEach((card) => {
      if (card !== initialLargeCard) {
        card.classList.remove("is-large");
      }
    });
  });
}
