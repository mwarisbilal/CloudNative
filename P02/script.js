const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//Function to update counts
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;
}

//Function to save the selected movie and its price

function setMovieData(movieIndex,moviePrice);
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

//event Listener for Change on selected movie drop down

movieSelect.addEventListener('change',(e) => {

    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//event listener for available seats

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})