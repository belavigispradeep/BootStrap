let todo = [];

let req = prompt("Enter your request");

while(true){
    if(req === "quit"){
        console.log("You quitted");
        break;
        }
    if(req === "list"){
        console.log("************");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("************");
    }else if(req === "add"){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req === "delete"){
      let idx = prompt("Enter the list index");
      todo.splice(idx,1);
      console.log("task deleted");
    }else{
        console.log("Invalid request");
    }

    req = prompt("Enter your request");
}