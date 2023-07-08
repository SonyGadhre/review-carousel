const reviews = [
    {
        id:1,
        name: "Sony Gadhre",
        source : "https://media.licdn.com/dms/image/D5603AQHa-Y73NRxm0g/profile-displayphoto-shrink_800_800/0/1686394969131?e=1694044800&v=beta&t=ZDrKPV6FeWtonErtCQW3_JnJyHaxO1FdjuTgMsAtnRo",
        job: "Full Stack Developer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus et diam et aliquam. Sed lacinia pharetra blandit. Aliquam pellentesque at velit nec convallis. Aliquam sit amet elit vel erat blandit gravida. Proin vulputate sed elit id semper. Nunc id leo quis velit iaculis consectetur quis eu neque. "
    },
    {
        id:2,
        name: "Lorelai Gilmore",
        source :"images/lorelai.jpeg",
        job: "Manager",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus et diam et aliquam. Sed lacinia pharetra blandit. Aliquam pellentesque at velit nec convallis. Aliquam sit amet elit vel erat blandit gravida. Proin vulputate sed elit id semper. Nunc id leo quis velit iaculis consectetur quis eu neque. "
    },
    {
        id:3,
        name: "Rory Gilmore",
        source :"images/rory.jpg",
        job: "HR Manager",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus et diam et aliquam. Sed lacinia pharetra blandit. Aliquam pellentesque at velit nec convallis. Aliquam sit amet elit vel erat blandit gravida. Proin vulputate sed elit id semper. Nunc id leo quis velit iaculis consectetur quis eu neque. "
    },
    {
        id:4,
        name: "Luke Danes",
        source :"images/luke.jpeg",
        job: "Intern",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus et diam et aliquam. Sed lacinia pharetra blandit. Aliquam pellentesque at velit nec convallis. Aliquam sit amet elit vel erat blandit gravida. Proin vulputate sed elit id semper. Nunc id leo quis velit iaculis consectetur quis eu neque. "
    }
];

//select items
const author = document.getElementById("author");
const image = document.getElementById("img");
const job = document.getElementById("job");
const review = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item 
window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

//show person based on item no.
function showPerson( person){
    const item = reviews[person];
    author.textContent= item.name;
    image.src = item.source;
    job.textContent= item.job;
    review.textContent=item.review;
}

//show next person
nextbtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem> reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

//show previous person

prevbtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem< 0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})

randombtn.addEventListener("click", function(){
    var a = Math.random();
    a=Math.floor(a*reviews.length);
    showPerson(a);
});

