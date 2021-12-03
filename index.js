
//hide the congratulation image
document.getElementById('img').style.display="none"


let but = document.createElement("button");
but.textContent = "Click to Play";
document.getElementById('start').appendChild(but).addEventListener('click',handleClick)


function handleClick() {
    let playButton = document.createElement("button");
    playButton.textContent = "Click like crazy";
    document.getElementById('play').appendChild(playButton) //.addEventListener('click', playButtonClick);
    // document.getElementById('start').style.display="none"
    let countPlayButton = 0
    playButton.addEventListener("click", function() {
        countPlayButton += 1;
        console.log(countPlayButton);
        document.getElementById('numClicks').textContent = countPlayButton
    });



    let counter = 0
//assign the setInterval to a variable
    let timer = setInterval(function(){
        if (counter === 4){
            clearInterval(timer)
            document.getElementById('play').innerHTML = ''
            document.getElementById('seconds').textContent = 'finished'
            console.log(document.getElementById("playerName").value)
            document.getElementById('nameBoard').innerHTML += '<p>' + document.getElementById("playerName").value + ' '
                    + document.getElementById('numClicks').textContent + '</p>'
            //add image after game finishes
            document.getElementById('img').style.display=""
            // document.getElementById('start').style.display=""
        } else {
            counter++
            // console.log(counter)
            document.getElementById('seconds').textContent = counter.toString()
            document.getElementById('img').style.display="none"
        }

    }, 1000)


}
// document.getElementById('numClicks').textContent = playButtonClick()
// function playButtonClick(){
//     console.log('click')
// }







