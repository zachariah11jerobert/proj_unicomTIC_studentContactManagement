let contacts = [];

document.getElementById("addContact").addEventListener("click", function () {
  const contactNumbers = document.getElementById("contactNumbers");

  const divEl = document.createElement("div");

  // create input box Element through JavaSacript
  const input = document.createElement("input");
  input.type = "text";
  input.className = "contactInput";
  input.required = true;
  input.placeholder = "Enter your phone number";

  divEl.appendChild(input);
  contactNumbers.appendChild(divEl);
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const UnicomID = document.getElementById("unicomID").value;
    const name = document.getElementById("name").value;
    const nicNumber = document.getElementById("nicNumber").value;

    const contactsInput = document.getElementsByClassName("contactInput");

    const contactNumbers = [];
    for (let i = 0; i < contactsInput.length; i++) {
      let contactNumber = contactsInput[i].value;
      contactNumbers.push(contactNumber);
    }

    const contact = {
      UnicomID: UnicomID,
      name: name,
      nicNumber: nicNumber,
      contactNo: contactNumbers,
    };
    contacts.push(contact);

    document.getElementById("unicomID").value = "";
    document.getElementById("name").value = "";
    document.getElementById("nicNumber").value = "";

    document.getElementById("contactNumbers").innerHTML = "";

    console.log(contacts);
  });
