const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    const newdiv = document.createElement('div');
    newdiv.classList.add("displayedsquare");
    const color = e.target.classList[1];
    newdiv.classList.add(`${color}`);
    const final = document.querySelector(".displayedsquare-wrapper");
    final.appendChild(newdiv);
    var new_li = document.createElement('li');
    let txt = document.createTextNode( "["+ getElapsedTime () +"]"+' created a new '+ " "+ color + " "  + 'square');
    const parent = document.querySelectorAll('section')[2].childNodes[3];
    new_li.append(txt);
    parent.appendChild(new_li);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// const displayedsquare = document.querySelectorAll('.displayedsquare')
// for (let displayedsquare of displayedsquare) {
// displayedsquare.addEventListener('click', clickOnSquare)
// }


// //Add an event listener on the document <body>, listening for the keypress event. 

// const boody = document.querySelector('body')
// for (let body of boody) {
//   body.addEventListener('click',clickOnSquare )
// }

const spacebarEffect = (e) => {
  const a = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);
  const c = Math.floor(Math.random() * 254);

  if(e.code == "Space" || e.keyCode == 32) {
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    const li = document.createElement("li");
    li.innerHTML = `Spacebar used brah!`;
    ul.appendChild(li);
  }
};  


const removeAllChilds = (parent) => {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const lEffect = (e) => {
  //console.log(e.key);
  //console.log(e.code);
  if(e.key == "l" || e.keyCode == "Keyl") {
    removeAllChilds(ul);
  }
};

const sEffect = (e) => {
  if(e.key == "s" || e.keyCode == "Keys") {
    removeAllChilds(goal);
  }
};

document.body.addEventListener("keypress", spacebarEffect);
document.body.addEventListener("keypress", lEffect);
document.body.addEventListener("keypress", sEffect)

// const spacebar = (e) => {
// function randomColor() {
//   let r = Math.floor(Math.random() * 255) + 1;
//   let g = Math.floor(Math.random() * 255) + 1;
//   let b = Math.floor(Math.random() * 255) + 1;

//   return "rgb(" + r + ", " + g + ", " + b + ")"

// }

// document.querySelector(".actionsquare").addEventListener("click" , clickOnSquare);

