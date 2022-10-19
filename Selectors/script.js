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


// const items = document.querySelectorAll('img');
// console.log(items);
// for (const element of items) {
//     console.log(element);
//   };
//   document.getElementById("img.important").style.display = "block";
//   document.getElementById("img").style.display = "none"

// //Loop through all the paragraphs 

// var para = document.querySelectorAll("p");

// for (let element of para) {
// 	console.log(element.innerText);
// 	console.log(element.className);
// }


// Give each of the paragraph a random text color 
var para = document.querySelectorAll("p");

for (let element of para) {
	function getRandomColor() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		element.style.color = color;
}
getRandomColor();
}