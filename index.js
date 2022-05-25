import inquirer from "inquirer";
import StarbeamUnit from "./functions/starbeam_unit.js";

async function menu() {
  console.log("Select a code type:");
  const selection = [
    {
      type: "list",
      name: "Type",
      message: "Enter a code format.",
      choices: ["Starbeam Unit", "KSF S.A.T.", "KEPIS Designation"],
    },
  ];
  inquirer.prompt(selection).then((answers) => {
    console.log("\n Result:");
    console.log(selection);
  });
}

export default function RandomLetter() {
  console.log("\nImported random letter function");
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const result = alphabet[Math.floor(Math.random() * alphabet.length)]
  console.log(result);
}



menu();




StarbeamUnit();
