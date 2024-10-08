// DOM Elements
const form = document.querySelector('.form-container');
const customerName = document.querySelector('#customerName');
const orderButton = document.querySelector('#order-button');
const typeSelect = document.querySelector('#type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPriceElement = document.querySelector('.totalPrice');
const priceBanner = document.querySelector('.price-banner');

// Global Variables
let total;
let toppings = [];
let extras = [];

// Functions
const pancakePriceCalc = () => {
  total = parseInt(typeSelect.value);
  checkToppings();
  totalPriceElement.textContent = `€${total}`;

  priceBanner.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: ' scale(1)' }], {
    duration: 200,
    iterations: 1,
  });
};

const addItem = (itemName, category) => {
  if (category == 'toppings') {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};

const removeItem = () => {};


const checkToppings = () => {
  toppings = [];
  extras = [];
  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;
    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
};
const displayOrder = () => {
  const orderType = document.querySelector('#order_type');
  const orderToppings = document.querySelector('#order_toppings');
  const orderExtras = document.querySelector('#order_extras');
  const orderName = document.querySelector('#order_name');
  const orderPrice = document.querySelector('#order_price');

  let customerNameValue = customerName.value;
  if (!customerNameValue) {
    alert('Please enter your name');
    return;
  }
  // Displaying the values
  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(', ');
  orderExtras.textContent = extras.join(', ');
  orderName.textContent = customerNameValue;
  orderPrice.textContent = `€ ${total}`;
};


// Event Listenors
form.addEventListener('change', pancakePriceCalc);
orderButton.addEventListener('click', displayOrder);