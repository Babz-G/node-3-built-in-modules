/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

const order = process.argv[2];
const orderNumber = process.argv[3];

async function getOrder() {
  const data = await fs.readFile("data.json", "utf8");
  const userOrder = JSON.parse(data);

  if (order === "getAllOrders") {
    userOrder.forEach((pizza) => {
      console.log(pizza);
    });
  } else if (order === "getOneOrder") {
    userOrder[orderNumber]
      ? console.log(userOrder[orderNumber])
      : console.log("Order not found. Please enter a valid order number.");
  }
}

getOrder();
