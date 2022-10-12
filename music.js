var starwars = document.getElementById('starwars');
var playpausebtn = document.getElementById('playpausebtn');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        starwars.play();
    }else{
        count = 0;
        starwars.pause();

    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});