var received = " <div class='karla notification is-success'>Thanks! We received your message!</div>"
var fillFields = " <div class='karla notification is-danger'>Please fill in all fields</div>"
var errorMessage = "<div class='karla notification is-success'>Error: Message did not send</div>"
var linux = document.getElementById("linux") 
var linuxContent = document.getElementById("linux-content") 

var pokemon = document.getElementById("pokemon") 
var pokemonContent = document.getElementById("pokemon-content") 

var chip8 = document.getElementById("chip-8") 
var chip8Content = document.getElementById("chip8-content") 

var parallax3 = document.getElementById("parallax3")

var nots = document.getElementById("nots")

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

//add alerts later
function postForm() {
    var name = document.getElementById('name-input').value
    var email = document.getElementById('email-input').value
    var text = document.getElementById('text-input').value
    var service_id = 'gmail';
    var template_id = 'template_en48kAjT';
    var template_params = {
        from_name:name,
        reply_to:email,
        message_html:text
    };
    if (name != "" && email != "" && text !="") {
        emailjs.send(service_id,template_id,template_params).then(function(response) {
        nots.innerHTML = received
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        nots.innerHTML = errorMessage
       console.log('FAILED...', error);
    });
    } else {
        nots.innerHTML = fillFields
    }

}

