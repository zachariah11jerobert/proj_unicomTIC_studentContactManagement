

function pop() {
    document.getElementById("mod").style.display = "block"
    document.getElementById("lay").style.display = "block"
}
function can() {
    document.getElementById("mod").style.display = "none"
    document.getElementById("lay").style.display = "none"
}


function append() {
    let Name = document.getElementById("first").value
    let unicom = document.getElementById("unic").value
    let nic = document.getElementById("nic").value
    const phoneNumbers = []
    for (let x = 0; x < i; x++) {
        let phonee = document.getElementById(`phone${x}`).value
        phoneNumbers.push(phonee)
    }
     let phonesList = '';
    for (let phonee of phoneNumbers) {
        phonesList += `<li>${phonee}</li>`;
    }



    var item = document.getElementById("item")
    var detail = document.createElement("div")
    detail.setAttribute("class", "col-4 mx-3 mt-3 shadow-lg p-2 bg-secondary")
    detail.innerHTML = `
    <div class="card shadow-lg text-sucess p-1 border-info ">
        <div class="card-body mx-3 p-1 ">
            <div class="row ">
                <div class="col-5">
                    <img src="D:\screen shots\download.png" alt="" height="100%" width="100%">
                </div>
                <div class="col-7">
                    <h3>${unicom}</h3>
                    <h3>${Name}</h3>
                    <h4>${nic}</h4>
                    <h3>Contacts</h3>
                    <ul>
                    ${phonesList}
                    </ul>
                </div>
            </div>


        </div>
    </div>
    <button class="btn btn-info mx-5 mt-3 px-4">Edit</button>
    <button class="btn btn-danger mx-5 mt-3 px-4" onclick="deleteDetail(event)">Delete</button>
`
    item.appendChild(detail)
    can()
}

function deleteDetail(event) {
    event.target.parentElement.remove()
}
let i = 0
function phone() {
    var div = document.createElement("div")
    div.innerHTML = ` <input type="text" id="phone${i}" class="form-control border-info rounded-3 fs-4">`
    document.getElementById("addPhone").appendChild(div)
    i = i + 1



}

// function append() {
//     let Name = document.getElementById("first").value;
//     let unicom = document.getElementById("unic").value;
//     let nic = document.getElementById("nic").value;
//     let phoneNumbers = [];

//     // Collect phone numbers
//     for (let x = 0; x < i; x++) {
//         let phone = document.getElementById(`phone${x}`).value;
//         phoneNumbers.push(phone);
//     }

//     var item = document.getElementById("item");
//     var detail = document.createElement("div");
//     detail.setAttribute("class", "col-4 mx-3 mt-3 shadow-lg p-2 bg-secondary");
//     var phonesList = '';

//     // Create a list of phone numbers
//     for (let phone of phoneNumbers) {
//         phonesList += `<li>${phone}</li>`;
//     }

//     detail.innerHTML = `
//         <div class="card shadow-lg text-sucess p-1 border-info ">
//             <div class="card-body mx-3 p-1 ">
//                 <div class="row ">
//                     <div class="col-5">
//                         <img src="D:\screen shots\download.png" alt="" height="100%" width="100%">
//                     </div>
//                     <div class="col-7">
//                         <h3>${unicom}</h3>
//                         <h3>${Name}</h3>
//                         <h4>${nic}</h4>
//                         <h3>Contacts</h3>
//                         <ul id="ul">${phonesList}</ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <button class="btn btn-info mx-5 mt-3 px-4">Edit</button>
//         <button class="btn btn-danger mx-5 mt-3 px-4" onclick="deleteDetail(event)">Delete</button>
//     `;

//     item.appendChild(detail);
//     can();
// }

// function deleteDetail(event) {
//     event.target.parentElement.remove();
// }

// let i = 0;

// function phone() {
//     i = i + 1;
//     var div = document.createElement("div");
//     div.innerHTML = ` <input type="text" id="phone${i}" class="form-control border-info rounded-3 fs-4">`;
//     document.getElementById("addPhone").appendChild(div);
// }
