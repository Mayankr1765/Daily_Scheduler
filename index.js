// Get list of draggable element.

const workOptions = document.getElementsByClassName("flex-list");

let options = document.querySelectorAll(".draggable")

var clickedId;
var draggedId;

//** iterate through all work options */

options.forEach (option =>  {
  option.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
    this.draggedId = event.target.id
    
  setTimeout(() => {}, 0);
  });

  option.addEventListener("dragend", (e) => {
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
    this.clickedId = e.target.id
    toggleModal();
})

    accept.addEventListener('dragover' , (e) => {
        e.preventDefault();

    })
    
    accept.addEventListener('dragenter' , (e) => {
        e.preventDefault();
    
    })
    
    accept.addEventListener('dragleave' , (e) => {
        e.preventDefault();
            
    })
    
    accept.addEventListener('drop' , (e) => {
        e.preventDefault();
        let node = document.getElementById(this.draggedId);
        let droppableNode = document.getElementById(e.target.id)
        droppableNode.innerHTML = node.innerHTML
        droppableNode.classList.add("flex-list")
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

