var randomNumber = Math.floor(Math.random() * 99)

const url = `https://api.adviceslip.com/advice/${randomNumber}`;

const api = async ()=>{
    const getAPI = await fetch(url);
    const apa = await getAPI.json();
    const getAdvice = apa.slip.advice;
    adviceNum.innerText = `Advice #${randomNumber}`;
    advice.innerText = getAdvice;
    console.log(getAdvice)
}

const adviceNum = document.querySelector("h1");
const advice = document.querySelector("h5");
const dice = document.querySelector(".dice .img-fluid");
dice.addEventListener("click", ()=>{
    api();
});
