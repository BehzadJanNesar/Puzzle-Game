var imageNameArray = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
var randomIndexArray = [];


function randomGenerate(n) {
    var randomTempArray = [];
    var i=0 ;
    while(i<n) {
        var rand = Math.floor(Math.random()*n);
        if(randomTempArray.indexOf(rand)==-1){
            randomTempArray.push(rand);
            i++;
        }
    }
    return randomTempArray;
}

function createImage(n) {
    var i=0 ;
    var imgBox = document.querySelector(".img_box");
    randomIndexArray.forEach( index => {
        var img = document.createElement("img");
        img.setAttribute("src","../img-number/"+imageNameArray[index])
        img.setAttribute("draggable" , "true")
        img.setAttribute("ondragstart" , "drag(event)")
        img.setAttribute("id" , "drag" + i)
        img.classList.add(`box-${randomIndexArray[i]}`);
        i++;
        imgBox.appendChild(img);
        img.classList.add("img-style");        
    });
    console.log(randomIndexArray)
}


function randomNumber() {
    var resultImg = document.querySelectorAll(".result_img");
    
    var time = 0; 
    var interval = setInterval(() => {
        time++
        if(time>0) {
            clearInterval(interval);
            for( let j=0; j <= resultImg.length-1 ; j++) {
                resultImg[j].innerHTML = "";    
            }
        }else {
            for( let i=0; i <= resultImg.length-1 ; i++) {
                random()
            }
        }
    },6000)};

    
var randomTemp = [];
var resultImg = document.querySelectorAll(".result_img");
function random(n) {
    var i=0 ;
    while(i<n) {
        var rand = Math.floor(Math.random()*n);
        if(randomTemp.indexOf(rand)==-1){
            randomTemp.push(rand);
            i++;
        }
    }
    for (let a = 0; a < resultImg.length; a++) {
        resultImg[a].innerHTML = randomTemp[a];
        resultImg[a].classList.add(`box-${randomTemp[a]}`)
    }
    console.log(randomTemp)
    return randomTemp;
}

var startNum=0;
function startGame() {
    startNum++;
    randomIndexArray = randomGenerate(9);
    random(9)
    randomNumber();
    createImage();
}


var bioText = document.querySelector(".bio");
document.getElementById("check").addEventListener("click" , ()=> {
    if(startNum==0) {
        bioText.innerHTML = "Please Start Game then check it...";
        
    }else {
        bioText.innerHTML = "Start Game";
    }
    for(let m=0 ; m < resultImg.length ; m++){
        if( resultImg[m].children[0].classList[0] == resultImg[m].classList[1]){ 
            bioText.innerHTML = "You Win...!"
            bioText.style.color = "green"
        }else if(resultImg[m].children[0].classList[0] !== resultImg[m].classList[1]) {
            bioText.innerHTML = "You Lose !"
            bioText.style.color = "red"
            document.querySelector(".result_box").classList.add("vibrate_animation")
            break
        }
    }
})

document.getElementById("ref").addEventListener("click" , ()=> {
    location.reload()
})

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}