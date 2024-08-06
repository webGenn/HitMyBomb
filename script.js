let isGameStartm = false;

function startPlay(){
    document.getElementById("bomb").classList.add("bombAni");
    isGameStartm = true
    document.getElementById("playGame").innerHTML = "Keep It Up!";
    let obstacle = document.getElementById("bomb");
    let time = setInterval(()=>{
        var i = Math.floor(Math.random() * 1000);
        var j = Math.floor(Math.random() * 550);
        obstacle.style.left = i+"px";
        obstacle.style.top = j+"px";
    }, 800);

    setTimeout(()=>{
        clearInterval(time)
        alert(`Times Up! Your Score : ${score}`)
        window.location.reload()
    }, 60000)
}

let score = 0;

function hitObstacle(){
    if(isGameStartm === true){
        let tune = new Audio("bomb.mp3");
        tune.play();
        score += 10
        let scoreDisplay = document.getElementById("totalCount");
        scoreDisplay.innerHTML = score
    }
    else{
        alert("Please Start The Game")
    }
}