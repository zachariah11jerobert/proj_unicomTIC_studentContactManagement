const readlineSync = require("readline-sync");

const contacts = [
  {
    unicomID: "UT11070",
    name: "Nirojan",
    nicNumber: "970783288v",
    contactNumber: ["0778934438", "0758934404"],
  },
  {
    unicomID: "UT01432",
    name: "Shampavee",
    nicNumber: "200364400266",
    contactNumber: ["0756750053", "0758934404"],
  },
];

function addContacts() {
  let unicomID = readlineSync.question("Enter your Unicom ID : ");
  let name = readlineSync.question("Enter your Name : ");
  let nicNumber = readlineSync.question("Enter your NIC number : ");
  let numberOfPhoneNumbers = readlineSync.question(
    "Enter Number of phone number you are Having :  "
  );

  let phoneNumberArr = [];
  for (let i = 0; i < numberOfPhoneNumbers; i = i + 1) {
    let phoneNumber = readlineSync.question(
      `Enter your ${i + 1} phone Number :`
    );
    phoneNumberArr[i] = phoneNumber;
  }

  const contact = {
    unicomID: unicomID,
    name: name,
    nicNumber: nicNumber,
    contactNumber: phoneNumberArr,
  };

  contacts.push(contact);
}

addContacts();

console.log(contacts);
