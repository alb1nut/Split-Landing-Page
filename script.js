const button = document.querySelectorAll
('button')

const cards =document.querySelectorAll('.card')
const playStation =document.querySelectorAll('.playstation')
const xBox =document.querySelectorAll('.xbox')
// console.log(cards);


cards.forEach(card => {
    card.addEventListener('click' , () => {
            console.log('Clicked Me');
       let active = card.classList.toggle('active')
    //    if(active){
    //        card.classList.remove('active')
    //    }
    // else{
    //     card.classList.add('active')
    //    }
    
    })
});


// console.log(playStation);
// playStation.addEventListener('click', () => {
//     playStation.classList.add('active')
// } )

