document.getElementById('img').style.display = "none"
document.getElementById('again').style.display = "none"

let but = document.createElement("button");
    but.textContent = "Click to Play";
    document.getElementById('start').appendChild(but).addEventListener('click',handleClick)


function handleClick() {
    let playButton = document.createElement("button");
        playButton.textContent = "Click like crazy";
        document.getElementById('play').appendChild(playButton) //.addEventListener('click', playButtonClick);
        document.getElementById('start').style.visibility = "hidden"
    let countPlayButton = 0
        playButton.addEventListener("click", function() {
        countPlayButton += 1;
        console.log(countPlayButton);
        document.getElementById('numClicks').textContent = countPlayButton
    });


    let counter = 0
    let timer = setInterval(function() {
        if (counter === 4) {
            clearInterval(timer)
            document.getElementById('play').innerHTML = ''
            document.getElementById('seconds').textContent = 'finished'
            console.log(document.getElementById("playerName").value)
            document.getElementById('nameBoard').innerHTML += '<p>' + document.getElementById("playerName").value + ' '
                    + document.getElementById('numClicks').textContent + '</p>'
            document.getElementById('img').style.display = ""
            document.getElementById('start').style.transitionDelay = "1s"
            document.getElementById('start').style.visibility = "visible"
            document.getElementById('again').style.display = "block"
        } else {
            counter++
            document.getElementById('seconds').textContent = counter.toString()
            document.getElementById('img').style.display = "none"
            document.getElementById('again').style.display = "none"
        }

    }, 1000)

}





