const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

btn.addEventListener("click", () => {
  breadcrums(bc);
});

function breadcrums(info) {
  ul.innerHTML = "";
  info.forEach((each, index, array) => {
    if (index + 1 < array.length) {
      ul.innerHTML += `<li><a href="${each.link}">${each.name}</a> <p> / </p> </li>`;
    } else if (index + 1 === array.length) {
      ul.innerHTML += `<li>${each.name} </li>`;
    }
  });
}

// let person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// console.log(person1.lastName);
// person1.lastName = "Mandal";
// console.log(person1.lastName);

// person1.lastName = undefined;
// console.log(person1);

// delete person1.lastName;
// console.log(person1);
