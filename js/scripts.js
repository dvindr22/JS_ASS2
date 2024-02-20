// constants for query selector
//for student id
const studentId = document.getElementById("studentId");
// for custom number selected by the user
const customNumberElement = document.getElementById("customNumber");
// for changing the background color as specified by the user
const customColorBtn = document.querySelector(".custColor");
// for changing the background color based on a custom selection created by Math.random module
const randomColorBtn = document.querySelector(".randColor");
// selector for options of images offered to the user
const imageSelectElement = document.querySelector("#imageSelect");
// selecto r for actual image element to change the source for the img later on in the change img function
const imagesElement = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberElement.value);
    studentId.textContent = "Student ID: 200553438"; 

    //1. If user’s input is less that 0 or more than 100 – red color
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    }
    //2. If user's input is between 0 and 20 - green color
    else if (userInput >= 0 && userInput <= 20){
         document.body.style.backgroundColor = "green";
    }
    //3. If user's input is between 20 and 40 - blue color
    else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    }
    //4. If user's input is between 40 and 60 - orange color
    else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    }
    //5. If user's input is between 60 and 80 - purple color
    else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    }
    //6. If user's input is between 80 and 100 - yellow color
    else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // generating a random value between 1 and 100
    const randomInput = Math.floor(Math.random() * 100) + 1;
    customNumberElement.value = randomInput;
    //calling the change color according to custom value function
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    const imageOptions = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // names of images available in the img folder
    imageOptions.forEach((image) => {
        const option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        // appending the option selected to imageSelectElement
        imageSelectElement.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const selectedImage = imageSelectElement.value;
    // changing the source value of img tag in html usng js
    imagesElement.src = "img/" + selectedImage;
}

// event listeners for on click event of buttons and select
customColorBtn.addEventListener("click", changeCustomColor);
randomColorBtn.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelectElement.addEventListener("change", changeImage);

// Initializing the image options
addList();
