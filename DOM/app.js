let url="http://universities.hipolabs.com/search?name=";
let button=document.querySelector("button");
let ul=document.querySelector("#colList");


button.addEventListener("click", async ()=>{
  let country=document.querySelector("input").value;
  console.log(country);
  let colArr=await getCollege(country);

  Show(colArr);
})


async function getCollege(country) {
  try{
    let colList= await axios.get(url+country);
    return colList.data;
  }catch(e){
    console.log("Soory for error:",e);
    return [];
  }
}

function Show(colArr){
  ul.innerHTML="";

  for(col of colArr){
    let li=document.createElement("li");
    ul.appendChild(li);

    li.innerHTML+=`<a href="#">${col.name}</a><br>`;
  }
}