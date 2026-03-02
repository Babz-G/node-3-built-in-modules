/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */

// ES Module way
import fs from "fs/promises";
// Common JS way
// const fs = require("fs/promises");

// user input
const month = process.argv[2];

// Read birthstone data from data.json and get the birthstone for each month
async function getBirthStone() {
  // The readfile method is part of the fs object
  // It takes in 2 parameters:
  // 1. the file we want to read (relative file path)
  // 2. the way the file is encoded
  const data = await fs.readFile("data.json", "utf8");
  const birthstones = JSON.parse(data);

  birthstones[month]
    ? console.log(`The birthstone for ${month} is ${birthstones[month]}`)
    : console.log(
        "Invalid month, Please enter a valid month name, and make sure it is capitolized."
      );
}
getBirthStone();
