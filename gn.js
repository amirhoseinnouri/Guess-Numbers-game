let rannumber = Math.floor(Math.random() * 20);

document.querySelector("#button").addEventListener('click', () => {
    let userGeuss = Number(document.querySelector("#usergeuss").value);
    let showResult = document.querySelector("#change");
    if (userGeuss && userGeuss > 1) {
        if (userGeuss > rannumber) {
            showResult.innerHTML = "too big ";

        } else if (userGeuss < rannumber) {
            showResult.innerHTML = "to short";
        } else {
            
            showResult.innerHTML = "you won !"
            alert("you win ");
        }
    }

});
