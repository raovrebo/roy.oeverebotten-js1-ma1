const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
console.log("Question 1");

const cat = {
    complain: "Meow!",
    getComplaint: function() {
        console.log(this.complain);
    }
}

cat.getComplaint();

// Question 2
console.log("Question 2");

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

console.log(heading.innerHTML);

// Question 3
console.log("Question 3");

heading.style.fontSize = "2em";

console.log(heading.style.fontSize);

// Question 4
console.log("Question 4");

heading.classList.add("subheading");

console.log(heading);

// Question 5
console.log("Question 5");

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[0].style.color = "red";
    paragraphs[1].style.color = "red";
    paragraphs[2].style.color = "red";
}

console.log("First paragraphs color is: " + paragraphs[0].style.color);
console.log("Second paragraphs color is: " + paragraphs[1].style.color);
console.log("Third paragraphs color is: " + paragraphs[2].style.color);

// Question 6
console.log("Question 6");

const resultsContainer = document.querySelector("div.results");
let divResults = resultsContainer.innerHTML;
let newDivResults = "<p>" + "New Paragraph" + "</p>";
resultsContainer.innerHTML = newDivResults;
resultsContainer.style.backgroundColor = "yellow";

console.log("Set the innerHTML of the div with class of results to be: " + resultsContainer.innerHTML);
console.table("and changed the background color to: " + resultsContainer.style.backgroundColor);

// Question 7
console.log("Question 7");

function getNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log("Name: " + list[i].name);
    }
}

getNames(cats);

// Question 8
console.log("Question 8");

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let ageUnknown = "Age unknown";

        if(cats[i].age) {
            ageUnknown = cats[i].age;
        }

        html += `<div class="cat-container">
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${ageUnknown}<p>
                </div>`;
    }
    return html;
}

const newHTML = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;

console.log(catsContainer.innerHTML);