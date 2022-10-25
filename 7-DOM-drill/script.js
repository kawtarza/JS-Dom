
//  Use childNodes to list all the children from the <ul>
//  Write a for loop to iterate over every child. In this loop:
//  Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
const element = document.querySelector("ul");
const childNodes = element.childNodes;

// meme fct que ci-dessous mais en fct flechée
// const child = ()=>{
    
  
//     // console.log(childNodes)
//     // console.log(element)
  
  
//     for (let i = 0; i < childNodes.length; i++) {
//       const child = childNodes[i];
//     //   console.log(child);
//       const fast = "Fast and Furious"
      
//       if(child.nodeType === 1){
//         if (child.innerText.includes(fast)) {
//             // const a = element.firstElementChild
//             // console.log (a.innerText)
//             console.log(child)
 
//             element.insertBefore(child, element.firstElementChild)
//             // element.insertBefore(child, element.children[0])
//             // list.insertBefore(fast,list.firstElementChild)
//             child.classList.add ('important')
//           }
//         //   child.classList.add ('important')
//       }
      
  
//       }
//     }
// child();
  

  

function child() {
    
  
    // console.log(childNodes)
    // console.log(element)
  
  
    for (let i = 0; i < childNodes.length; i++) {
      const child = childNodes[i];
    //   console.log(child);
      const fast = "Fast and Furious"
      
      if(child.nodeType === 1){
        if (child.innerText.includes(fast)) {
            // const a = element.firstElementChild
            // console.log (a.innerText)
            console.log(child)
// // nomdelaconstanteduqueryselector.insertBefore(nomdelaconstanteduchildeNodes,nomdelaconstanteduqueryselectorchildren[placedans le tableau])
            element.insertBefore(child, element.firstElementChild)
            // element.insertBefore(child, element.children[0])
            
        //     //   nomdela constante.classList.add ('nom delaclasse')
          child.classList.add ('important')
        }
        //   agi sur tous les 'ul'
        //   child.classList.add ('important')
        child.addEventListener("click", function(){ 
            if (child.innerText.includes(fast)) {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            }
            else{alert(child.innerText)}

            for( let i = 0; i < childNodes.length; i++){
                
            }


//             let node = document.getElementById("nested");
// if (node.parentNode) {
//   node.parentNode.removeChild(node);
// }
        
        });
      
      
    }
      }
    }
  child();

  

//   body.addEventListener( keyup, "r")
  
document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  const select = document.createElement("select");
  const option1 =document.createElement("option");
  const option2 =document.createElement("option");

  document.body.insertBefore(newDiv, document.body.children[1]);
  newDiv.appendChild(select);
  select.append(option1, option2)
  option1.value = "franchises importantes"
  option2.value = "franchises normales"
  option1.text= option1.value
  option2.text= option2.value

//   const newSection= document.createElement("section")
// document.newDiv(newSection, newDiv);
}

// document.newDiv = addElement;




//   fast.className = "important"
//   nomdela constante.classList.add ('nom delaclasse')

  // const fast = "Fast and Furious";
  
  // if ( childNodes.nodeType === 1)
  // {if (element.innerText(fast)){
  //     console.log(elemen)
  // }
  
  // }
  // 
  
  // Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
  // var aTags = document.getElementsByTagName("li");
  // // var searchText = "var aTags = document.getElementsByTagName("");
  // // var searchText = "var aTags = document.getElementsByTagName("li");
  // var searchText = "Fast and Furious";
  // var found;
  
  
  
  // for (var i = 0; i < aTags.length; i++) {
  //   if (aTags[i].textContent == searchText) {
  //     found = aTags[i];
  //     break;
  //   }
  // }
  // ;
  
  
  
  
  // Since Fast and Furious is the most important franchise ever, add a class .important to the element