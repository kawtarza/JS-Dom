// // Select the last child of the <ol> tag and put it at the beginning of the list

const organisedTag = document.querySelector("ol");
console.log(organisedTag);
console.table(organisedTag);

// const lastChildOL = organisedTag.lastChild
console.table(lastChildOL);

const lastChildOL = organisedTag.lastElementChild
console.log(lastChildOL.innerText)
organisedTag.insertBefore(lastChildOL, organisedTag.children[0])


// // Move the <h2> of the third section in the second one and vice-versa

const main = document.querySelector("main");
console.log(main);

const secondSection = main.children[1];
console.log(secondSection); 
const troisiemeSection = main.lastElementChild;
console.log(troisiemeSection);

const divTroisiemeSection = troisiemeSection.firstElementChild;

const secondTitre = document.querySelector("div > h2")
console.log(troisiemeTitre)
const troisiemeTitre = secondSection.firstElementChild;
console.log(secondTitre);

// swap the two titles

secondSection.insertBefore(secondTitre, secondSection.children[0]);
divTroisiemeSection.insertBefore(troisiemeTitre, divTroisiemeSection.children[0]);

const secondSection = main.children[1];
console.log(secondSection);
const troisiemeSection = main.lastElementChild;
console.log(troisiemeSection);

const divtroisiemeSection = troisiemeSection.firstElementChild;

const secondTitle = document.querySelector("div > h2")
console.log(troisiemeTitre)
const troisiemeTitre = secondSection.firstElementChild;
console.log(secondTitre);

// swap the two titles
secondSection.insertBefore(secondTitre, secondSection.children[0]);
divTroisiemeSection.insertBefore(troisiemeTitre, divTroisiemeSection.children[0]);

// // Delete the last section from the DOM, we don't need it anyways

// main.removeChild(thirdSection)