// Get list of draggable element.

const workOptions = document.getElementsByClassName("flex-list");

//** iterate through all work options */

for (option of workOptions) {

  option.addEventListener("dragstart", (e) => {
      console.log('dragstarted')
    e.target.className += " hold";
    setTimeout(() => {
    }, 0);
  });

  option.addEventListener('dragend' , (e) => {
    // e.target.className = 'option'
})
}

let accept = document.getElementById('accep');
console.log(accept)

accept.addEventListener('click' , () => {
    alert('clicked!!')

    accept.addEventListener('dragleave' , (e) => {
        e.target.append(option)
    
    })
    
    accept.addEventListener('drop' , (e) => {
        e.target.append(option)
    
    })
})
