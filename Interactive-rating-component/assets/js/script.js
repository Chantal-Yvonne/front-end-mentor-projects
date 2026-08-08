let ratingButtons = document.querySelectorAll(".rating li");
let submitBtn = document.querySelector("#rating-btn")

let selectedRating = "";
let selectedRatingText = document.querySelector(".thank-you-card span");

let ratingState = document.querySelector("#rating-state");
let thankYouState = document.querySelector("#thank-you-state");


// Select rating
ratingButtons.forEach(function(rating){
    rating.addEventListener("click",function(){
        ratingButtons.forEach(function(rating){
            rating.classList.remove("selected");
        })
    rating.classList.add("selected");

    selectedRating = rating.textContent;
});
});


// Get the rating
submitBtn.addEventListener("click",function(){
    if (selectedRating === "") {
        return;
    }
        selectedRatingText.textContent = selectedRating;

        ratingState.classList.add("hidden");
        thankYouState.classList.remove("hidden");
    
})
