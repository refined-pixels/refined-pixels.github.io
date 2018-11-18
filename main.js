var linux = document.getElementById("linux") 
var linuxContent = document.getElementById("linux-content") 

var pokemon = document.getElementById("pokemon") 
var pokemonContent = document.getElementById("pokemon-content") 

var chip8 = document.getElementById("chip-8") 
var chip8Content = document.getElementById("chip8-content") 

var parallax3 = document.getElementById("parallax3")

function flipLinux() {
    linuxContent.style.display = "initial";
    linux.style.backgroundImage = "none"; 
    parallax3.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("./linuxback.jpg")'
}


function flipPokemon() {

    pokemonContent.style.display = "initial";
    pokemon.style.backgroundImage = "none"; 
    parallax3.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("./poke background.jpg")'
}

function flipChip() {
    chip8Content.style.display = "initial";
    chip8.style.backgroundImage = "none"; 
    parallax3.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./pong.jpg")'
}

function unflipLinux() {
    linuxContent.style.display = "none";
    linux.style.backgroundImage = "url('./linux.png')"; 
}


function unflipPokemon() {
    pokemonContent.style.display = "none";
    pokemon.style.backgroundImage = "url('./riolu.jpg')"; 
}

function unflipChip() {
    chip8Content.style.display = "none";
    chip8.style.backgroundImage = "url('./chip8.jpg')"; 
}
linux.addEventListener("mouseover", flipLinux);
pokemon.addEventListener("mouseover", flipPokemon);
chip8.addEventListener("mouseover", flipChip);

linux.addEventListener("mouseleave", unflipLinux);
pokemon.addEventListener("mouseleave", unflipPokemon);
chip8.addEventListener("mouseleave", unflipChip);
