// popup box function

const overlayer = document.querySelector(".overlay");
const popUpBox = document.querySelector(".popupbox");

function popupshow() {
  overlayer.style.display = "block";
  popUpBox.style.display = "block";
}

function popUpClose() {
  overlayer.style.display = "none";
  popUpBox.style.display = "none";
}

// Add Number Function
// const contactNumberContainer = document.querySelector(".contact-number-input-container");
// const contactNumber = document.querySelector("#contactNumber")

// function addMobileNumber(event){
//     const newInput = document.createElement("input");
//     newInput.setAttribute("type","number");
//     newInput.setAttribute("placeholder","Enter Mobile Number");
//     contactNumberContainer.append(newInput);

// }

// Submit Function
const studentCardContainer = document.querySelector(".student-card-container");

const idNumberInput = document.getElementById("id-number-input");
const nameInput = document.getElementById("name-input");
const nicNumberInput = document.getElementById("nic-number-input");

const contact1Input = document.getElementById("contact1-input");
const contact2Input = document.getElementById("contact2-input");

function submit() {
  // create student-card div
  const studentCardDiv = document.createElement("div");
  studentCardDiv.setAttribute("class", "student-card");
  studentCardContainer.append(studentCardDiv);

  // Create image container
  const imageContainerDiv = document.createElement("div");
  imageContainerDiv.setAttribute("id", "image-container");
  studentCardDiv.append(imageContainerDiv);
  // add image
  const imagetag = document.createElement("img");
  imagetag.setAttribute("src", "idpic.png");
  imageContainerDiv.append(imagetag);

  // create Contact container
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");
  studentCardDiv.append(contactContainer);

  // create h2 tag for id number
  const idNumberH2 = document.createElement("h2");
  idNumberH2.setAttribute("id", "id-number");
  idNumberH2.innerHTML = idNumberInput.value;
  contactContainer.append(idNumberH2);

  // create h2 tag for name
  const nameH2 = document.createElement("h2");
  nameH2.setAttribute("id", "name");
  nameH2.innerHTML = nameInput.value;
  contactContainer.append(nameH2);

  // create h2 tag for Nic Number
  const nicNumberH2 = document.createElement("h2");
  nicNumberH2.setAttribute("id", "nic-number");
  nicNumberH2.innerHTML = nicNumberInput.value;
  contactContainer.append(nicNumberH2);

  const ptag = document.createElement("p");
  ptag.innerHTML = "Contact";
  contactContainer.append(ptag);

  // create ul element
  const ul = document.createElement("ul");
  contactContainer.append(ul);

  const li1 = document.createElement("li");
  li1.innerHTML = contact1Input.value;
  ul.append(li1);
  const li2 = document.createElement("li");
  li2.innerHTML = contact2Input.value;
  ul.append(li2);

  // create div for delete button
  const divForDeleteBtn = document.createElement("div");
  divForDeleteBtn.innerHTML = `<button class="delbtn"  onclick='deleteBtn(event)'>Delete</button>`;
  contactContainer.append(divForDeleteBtn);
}

function deleteBtn(event) {
  event.target.parentElement.parentElement.parentElement.remove();
}
