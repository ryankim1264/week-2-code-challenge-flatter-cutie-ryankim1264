// Your code here

    
    document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const form = document.getElementById("votes-form");
    const resetBtn = document.getElementById("reset-btn");

    

    
    fetch("https://flatacuties-backend.vercel.app/characters")
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const span = document.createElement("span");
                span.innerText = character.name;
                characterBar.appendChild(span);

                
                span.addEventListener("click", ()=> {
                    name.textContent = character.name;
                    image.src = character.image;
                    image.alt = character.name;
                    voteCount.textContent = character.votes;
                    
                });
            });
        })
        .catch(err => console.log(err));

    
    form.onsubmit = (votesNumber) => {
        votesNumber.preventDefault();
        let votes = document.getElementById("votes").value;
        if (votes) {
            voteCount.textContent = Number(voteCount.textContent) + Number(votes);
        }
        form.reset();
    };

   
    resetBtn.addEventListener("click" ,() =>{
        voteCount.textContent = "0";} )

});

