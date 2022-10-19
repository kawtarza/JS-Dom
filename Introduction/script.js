
let body=document.querySelector("body")

// afficher titre dans la  console
let title = document.querySelector("title")
console.log(document.title)

// changement du titre
title.textContent = "Modifying the DOM"
console.log(document.title)

// background color #...
document.body.style.backgroundColor = "#FF69B4"
// body.style.backgroundColor = "rgb(100,5,10)"

// background color rbg façon aléatoire
let x = Math.floor(Math.random() * 255); 
let y = Math.floor(Math.random() * 255); 
let z = Math.floor(Math.random() * 255); 
console.log(x,y,z); 
body.style.backgroundColor = 'rgb('+ x +','+ y +' , '+ z +')';
console.log(x,y,z); 


// boucles

function display()
{
        var element = document.querySelector("body");
        var children = element.children;
        for(var i=0; i<children.length; i++)
        { 
            var child = children[i];
            console.log(child);
        }

    }
display();
