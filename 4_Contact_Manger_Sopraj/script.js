document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.querySelector(".close");
  const contactForm = document.getElementById("contactForm");
  const contactNumbersContainer = document.getElementById("contactNumbers");
  const resultContainer = document.getElementById("result");
  const contacts = [];

  const openModal = () => (modal.style.display = "block");
  const closeModal = () => (modal.style.display = "none");
  const handleWindowClick = (event) => {
    if (event.target === modal) closeModal();
  };

  const addContactField = () => {
    const divEl = document.createElement("div");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "contactInput";
    input.required = true;
    input.placeholder = "Enter your phone number";
    divEl.appendChild(input);
    contactNumbersContainer.appendChild(divEl);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const UnicomID = document.getElementById("unicomID").value;
    const name = document.getElementById("name").value;
    const nicNumber = document.getElementById("nicNumber").value;
    const contactsInput = document.querySelectorAll(".contactInput");

    const contactNumbers = Array.from(contactsInput).map(
      (input) => input.value
    );

    const imageInput = document.getElementById("contactImage");
    const contactImage = URL.createObjectURL(imageInput.files[0]);

    const contact = {
      UnicomID,
      name,
      nicNumber,
      contactNo: contactNumbers,
      image: contactImage,
    };

    contacts.push(contact);
    contactForm.reset();
    contactNumbersContainer.innerHTML = "";
    displayContacts();
  };

  const displayContacts = () => {
    resultContainer.innerHTML = "";
    contacts.forEach((contact, index) => {
      const contactBlock = document.createElement("div");
      contactBlock.className = "contact-block";
      contactBlock.innerHTML = `
            <img src="${contact.image}" alt="contact.image"/>
            <p><strong>UnicomID:</strong> ${contact.UnicomID}</p>
            <button class="viewBtn" data-index="${index}">View</button>
            <button class="closeBtn" data-index="${index}">Close</button>
          `;
      resultContainer.appendChild(contactBlock);
    });

    document.querySelectorAll(".viewBtn").forEach((button) => {
      button.addEventListener("click", handleViewContact);
    });

    document.querySelectorAll(".closeBtn").forEach((button) => {
      button.addEventListener("click", handleCloseContact);
    });
  };

  const handleViewContact = (event) => {
    const index = event.target.getAttribute("data-index");
    const contact = contacts[index];
    alert(`
          Image: ${contact.image}
          UnicomID: ${contact.UnicomID}
          Name: ${contact.name}
          NIC No: ${contact.nicNumber}
          Contact Numbers: ${contact.contactNo.join(", ")}
        `);
  };

  const handleCloseContact = (event) => {
    const index = event.target.getAttribute("data-index");
    contacts.splice(index, 1);
    displayContacts();
  };

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  window.addEventListener("click", handleWindowClick);
  document
    .getElementById("addContact")
    .addEventListener("click", addContactField);
  contactForm.addEventListener("submit", handleFormSubmit);
});
