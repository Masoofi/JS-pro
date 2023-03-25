let selectall_btn = document.querySelector('#selectall-btn');
let removeall_btn = document.querySelector('#removeall-btn');
let all_cards = document.querySelectorAll('.card');
let prevButton = null;


selectall_btn.addEventListener("click", () => {
    all_cards.forEach((all_cards) => {
        all_cards.style.backgroundColor = "lightblue"
        prevButton = 0;
    })
})

all_cards.forEach((card) =>{
    card.addEventListener("click",() => {
        card.style.backgroundColor = "lightblue";
       
        if (prevButton !== null){
           
            prevButton.style.backgroundColor='';
        }
        prevButton = card;
       
    })
})

removeall_btn.addEventListener("click", () => {
    all_cards.forEach((all_cards) => {
        all_cards.style.backgroundColor = ""
        prevButton = all_cards;
    })
})




