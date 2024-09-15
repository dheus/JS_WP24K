// Elements
const pancakeType = document.getElementById('type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPriceElements = document.querySelectorAll('.totalPrice'); // Selects all elements with the class 'totalPrice'
const priceBanner = document.querySelector('.price-banner');

// Total price
function calculateTotalPrice() {
  const basePrice = parseInt(pancakeType.value);
  let totalPrice = basePrice;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      totalPrice += parseInt(checkbox.value);
    }
  });

  // Update the total price elements
  totalPriceElements.forEach(element => {
    element.textContent = `${totalPrice}€`;
    priceBanner.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: ' scale(1)' },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  });
}

pancakeType.addEventListener('change', calculateTotalPrice);
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', calculateTotalPrice);
});


calculateTotalPrice();