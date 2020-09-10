const faker = require('faker');
let database = {
  contacts: [],
  analytics: []
};
const threshold = 10;

const month = faker.date.month();

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= threshold; i++) {
  database.contacts.push({
    id: i,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    image: faker.random.image()
  });
}
for (let i = 1; i <= 30; i++) {
  database.analytics.push({
    id: i,
    income: randomInteger(10000, 40000),
    spend_month: month,
    spend_day : randomInteger(1, 30)
  });
}
database.user = {
  id: faker.random.uuid(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  image: faker.image.people(),
  date_joined: faker.date.past(),
  last_login: faker.date.recent()
}
database.cards = [{
    "id": 1,
    "type": "MasterCard",
    "number": faker.finance.creditCardNumber(),
    "balance": faker.finance.amount(),
    "exp": "04/21",
    "cvv": faker.finance.creditCardCVV,
    "imgSrc": "https://img.icons8.com/color/16/000000/mastercard.png",
    "active": true,
    "account_name": faker.finance.accountName(),
  },
  {
    "id": 2,
    "type": "Visa",
    "number": faker.finance.creditCardNumber(),
    "balance": faker.finance.amount(),
    "exp": "10/20",
    "cvv": faker.finance.creditCardCVV,
    "active": true,
    "imgSrc": "https://img.icons8.com/color/16/000000/visa.png",
    "account_name": faker.finance.accountName(),
  }
]

database.transactions = [{
    "id": 1,
    "description": "uber eats",
    "price": faker.commerce.price(),
    "transaction_date": faker.date.recent(),
    "iconSrc": "fab fa-uber",
  },
  {
    "id": 2,
    "description": "telecom services",
    "price": faker.commerce.price(),
    "transaction_date": faker.date.recent(),
    "iconSrc": "fas fa-home",
  },
  {
    "id": 3,
    "description": "mobile phone recharge",
    "price": faker.commerce.price(),
    "transaction_date": faker.date.recent(),
    "iconSrc": "fas fa-mobile-alt",
  }
]

console.log(JSON.stringify(database))
