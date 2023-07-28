const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can set any port you want.

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

let data = [ {
  "products": [
    {
      "name": "Sam",
      "brand": "Apple iPhone 10",
      "category": "Other",
      "price": "480",
      "description": "SmartPhone, used",
      "createdAt": "2023-03-07",
      "id": 1
    },
    {
      "name": "Ron ",
      "brand": "Apple iPhone 10",
      "category": "Other",
      "price": "600",
      "description": "SmartPhone",
      "createdAt": "2023-03-07",
      "id": 2
    },
    {
      "name": "Sarah",
      "brand": "Apple iPhone 10",
      "category": "Phones",
      "price": "600",
      "description": "SmartPhone",
      "createdAt": "2023-03-07",
      "id": 3
    },
    {
      "name": "Lily",
      "brand": "Macbook Pro",
      "category": "Other",
      "price": "2400",
      "description": "16 inch",
      "createdAt": "2023-04-22",
      "id": 4
    },
    {
      "name": "Darell",
      "brand": "Apple iPhone 10",
      "category": "Other",
      "price": "600",
      "description": "SmartPhone",
      "createdAt": "2023-04-25",
      "id": 5
    },
    {
      "name": "Jade",
      "brand": "Chromebook",
      "category": "Other",
      "price": "700",
      "createdAt": "2023-04-25",
      "id": 6,
      "description": "12 inch, missing esc key"
    },
    {
      "name": "Jordan",
      "brand": "Apple Ipad",
      "category": "Other",
      "price": "660",
      "createdAt": "2023-04-28",
      "id": 7,
      "description": "5th gen"
    },
    {
      "name": "Pauline",
      "brand": "Iphone",
      "category": "Other",
      "price": "300",
      "createdAt": "2023-04-28",
      "id": 8,
      "description": "used"
    },
    {
      "name": "John",
      "brand": "Iphone",
      "category": "Phones",
      "price": "1000",
      "description": "purple",
      "createdAt": "2023-05-20",
      "id": 9
    }
  ]
}];

app.get('/api', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

