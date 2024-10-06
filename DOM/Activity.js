let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  let text = input.value;
  item.innerText = text;

  let delet = document.createElement("button");
  delet.textContent = "Delete";
  delet.classList.add("delete");
  item.appendChild(delet);
  

  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
