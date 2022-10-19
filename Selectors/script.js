// // Add a title attribut

// const imp = document.querySelectorAll('.important');
// for (const elem of imp)
// {
//     elem.title= "This is an important item"
//     console.log(elem.title)
// }
function myFunction() {
    const element = document.getElementById('ro'); 
     element.title = "This is an important item";
  }
  myFunction();

// //    Select all the img tags


const items = document.querySelectorAll('img');
console.log(items);
for (const element of items) {
    console.log(element);
  };
  document.getElementById("img.important").style.display = "block";
  document.getElementById("img").style.display = "none"

