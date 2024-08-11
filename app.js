const btn = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");
btn.addEventListener("click" , function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
   if(item.innerText = inp.value){
    ul.appendChild(item);

    let dlebut = document.createElement("button");
    dlebut.innerText = "complete";
    dlebut.classList.add("complete");

    item.appendChild(dlebut);
    ul.appendChild(item);
    inp.value = "";
  
   }
   else{
    alert("enter task");
}
    


});

ul.addEventListener("click" , function (event) {
    if(event.target.nodeName == "BUTTON" ){
       let listItem = event.target.parentElement;
       listItem.remove();
    }
});


//borign , fain