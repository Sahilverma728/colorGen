const getColor = () => {
    //Hex code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode
}

document.getElementById('btn1').addEventListener(
    "click",
    getColor
)

document.getElementById('btn2').addEventListener(
    "click",
    names
)

function names() {
    setInterval(() => {
        getColor()
    }, 2000)
}