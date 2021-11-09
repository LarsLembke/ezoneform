import {
    get,
    post,
    put,
    deleteIt
}
from "./js/crud.js";

document.addEventListener("DOMContentLoaded", start);

function start() {

    console.log("start");

    const submitButton = "";
    const form = document.querySelector("form");

    submitButton.addEventListener("mousedown", readData);

    function readData() {
        const data = {
            firstname: form.elements.firstname.value,
            lastname: form.elements.lastname.value,
            gamertag: form.elements.gamertag.value,
            dob: form.elements.dob.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            gamingstyle: form.elements.gaming_style.value,
            games: form.elements.game.value,
            strength: form.elements.strength.value,
            improvement: form.elements.improvement.value,
            service: form.elements.service.value
        }
    }

}