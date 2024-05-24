const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

const contacts = [
  {
    unicomID: "UT0001",
    name: "Kumar",
    nicNumber: "199272832787",
    mobile: ["077232323", "075874849"],
  },
  {
    unicomID: "UT00012",
    name: "Siva",
    nicNumber: "1993762378",
    mobile: ["0773843746", "07528672878"],
  },
];

//console.log(contacts);

function addContacts1() {
  let unicomID = prompt("Enter your UnicomID : ");
  let name = prompt("Enter your Name : ");
  let nicNumber = prompt("Enter your NIC number : ");
  let mobileNumberStr = prompt(
    "Enter your mobile Numbers separtedby Commas : "
  );

  let mobileNumbers = mobileNumberStr.split(",");
  pushContact(unicomID, name, nicNumber, mobileNumbers);
}

function addContacts2() {
  let unicomID = prompt("Enter your UnicomID : ");
  let name = prompt("Enter your Name : ");
  let nicNumber = prompt("Enter your NIC number : ");
  let noOfMobileNumbers = prompt("Enter Numbers of your Mobile Number : ");

  let mobileNumbers = [];
  for (let i = 0; i < noOfMobileNumbers; i = i + 1) {
    mobileNumbers[i] = prompt(`Enter ${i + 1} Mobile Number : `);
  }
  pushContact(unicomID, name, nicNumber, mobileNumbers);
}

function pushContact(unicomID, name, nicNumber, mobileNumbers) {
  const contact = {
    unicomID: unicomID,
    name: name,
    nicNumber: nicNumber,
    mobile: mobileNumbers,
  };

  contacts.push(contact);
}

addContacts2();

console.log(contacts);
