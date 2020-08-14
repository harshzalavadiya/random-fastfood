const FASTFOOD_LIST = [
  "🍔 Burger",
  "🍟 Fries",
  "🍕 Pizza",
  "🌭 Hot Dog",
  "🥪 Sandwich",
  "🌮 Taco",
  "🌯 Burrito",
];

function getRandomFastFood() {
  return FASTFOOD_LIST[Math.floor(Math.random() * FASTFOOD_LIST.length)];
}

module.exports = getRandomFastFood;
