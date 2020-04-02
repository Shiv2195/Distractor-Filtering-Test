window.userName = '';


function startGame() {
    let userName = document.getElementById('inputName').value;
    localStorage.setItem("userName", userName);

    let age = document.getElementById('inputAge').value;
    let ele = document.getElementsByName('gridRadios');
    let gender = '';
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gender = ele[i].value;
            break;
        }

    }
    window.location.href = "./autoSlide/autoSlide.html";


}

// export {name};