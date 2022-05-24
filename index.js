import inquirer from "inquirer";
import StarbeamUnit from "./functions/starbeam_unit.js";
export default { RandomLetter };

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

menu();

function RandomLetter(result) {
  console.log("\n Imported random letter function");
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charlength = characters.length;
  for (var i = 0; i < charlength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charlength));
  }
  return result;
}

StarbeamUnit();
