// Get list of draggable element.

const workOptions = document.getElementsByClassName("flex-list");

let options = document.querySelectorAll(".draggable")

var clickedId;

//** iterate through all work options */

options.forEach (option =>  {
  option.addEventListener("dragstart", (event) => {
    console.log("dragstarted");
    // e.target.className += " hold";
    event.dataTransfer.setData("text", event.target.id);
    console.log('data ' + event.dataTransfer.getData("text"))
    setTimeout(() => {}, 0);
  });

  option.addEventListener("dragend", (e) => {
    console.log("dragend");
    // e.target.className = 'option'
    e.target.classList.add("option")
  });
});

let accepts = document.getElementsByClassName("accep");
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

for (accept of accepts) {
  accept.addEventListener("click", (e) => {
    // alert('hello')
    console.log("event is" + JSON.stringify(e.target));
    console.log('event id is' + e.target.id)
    this.clickedId = e.target.id
    toggleModal();
})

    accept.addEventListener('dragover' , () => {

    })
    
    accept.addEventListener('dragenter' , () => {
    
    })
    
    accept.addEventListener('dragleave' , (e) => {
        e.preventDefault();
        console.log('drag leave')
        // e.target.append("flex-list")
        // console.log('data is ' + e.dataTransfer.getData("text"))
        e.target.classList.add("accep")
        // console.log('value is '+ e.target.value)
    
    })
    
    accept.addEventListener('drop' , (e) => {
        e.preventDefault();
        console.log('drag drop')
        // e.target.append("flex-list")
        e.target.classList.add("accep")
        console.log('value is '+ e.target.value)
  });


}


function addTask(e) {
  let added = document.getElementById("task");
//   alert(added.value + "added successfully");
  let ids = document.getElementById(this.clickedId)
  ids.innerHTML = added.value
  ids.classList.add("flex-list")
  toggleModal();
}
