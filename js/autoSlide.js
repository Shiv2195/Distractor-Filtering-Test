var i = 0;
window.userAnswer = []
var images = [{
    src: '../images/1.png',
    time: 2000
},
    {
        src: '../images/2.png',
        time: 2000
    },
    {
        src: '../images/3.png',
        time: 2000
    },
    {
        src: '../images/4.png',
        time: 2000
    },
    {
        src: '../images/5.gif',
        time: 3000
    }
];

function changeImg() {
    let temp_i = i;

    for (let j = i; j < temp_i + 5; j++) {
        setTimeout(() => {
            document.getElementById("slide").src = images[j].src;
            i += 1;
            if (i % 5 === 0) {
                showButtons();
            } else {
                hideButtons();
            }
        }, j * images[j].time)

    }
}

function showButtons() {
    let buttonDiv = document.getElementById("btnContainer");
    buttonDiv.style.display = 'block';
}

function hideButtons() {
    let buttonDiv = document.getElementById("btnContainer");
    buttonDiv.style.display = 'none';
}

function onSelectTrue() {
    userAnswer.push(true)

    if (i === images.length - 1) {
        changeImg();
    } else {
        localStorage.setItem("userAnswer", userAnswer);

        window.location.href = "../result/result.html";

    }
}

function onSelectFalse() {
    userAnswer.push(false);

    if (i === images.length - 1) {
        changeImg();
    } else {
        localStorage.setItem("userAnswer", userAnswer);

        window.location.href = "../result/result.html";
    }
}

window.onload = changeImg();

// export {userAnswer};


