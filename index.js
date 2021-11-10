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


    const submitButton = document.querySelector(".submit");
    const form = document.querySelector("form");

    let i = 0;



    document.querySelector(`.next`).addEventListener("click", nextSection);


    function nextSection() {

        document.querySelector(`.section_${i}`).classList.add("remove");

        i++;

        if (i <= 6) {

            console.log(i)

            document.querySelector(`.section_${i}`).classList.remove("hide");

        } else {
            console.log(i)

            document.querySelector(`.section_${i}`).classList.remove("hide");

            document.querySelector(".next").textContent = "Submit";

            document.querySelector(".next").removeEventListener("click", nextSection);



            void(document.querySelector("body").offsetHeight)

            document.querySelector(".next").addEventListener("click", readData);
        }

    }

    // document.querySelector(".submit").addEventListener("mousedown", readData);

    // document.querySelectorAll(".next").forEach((butt, i) => {
    //     console.log("next button")

    //     butt.setAttribute('id', `button_${i}`);
    //     butt.classList.add(`${i}`);
    //     form.addEventListener("submit", e => {
    //         // butt.preventDefault()
    //         // form.preventDefault()
    //         e.preventDefault()

    //         showNext(i);
    //     })

    // });


    // function showNext(i) {

    //     let nnn = i + 1

    //     console.log(i, nnn)

    //     console.log("next hide")
    //     document.querySelector(`.section_${i}`).classList.add('hide');
    //     document.querySelector(`.section_${nnn}`).classList.remove('hide');
    // }


    function readData() {

        console.log(document.querySelector("button.next.submit"));


        void(document.querySelector("body").offsetHeight)

        document.querySelector(".next").removeEventListener("click", readData);

        console.log("readData");

        const data = {
            firstname: form.elements.firstname.value,
            lastname: form.elements.lastname.value,
            gamertag: form.elements.gamertag.value,
            dob: form.elements.dob.value,
            continent: form.elements.continent.value,
            country: form.elements.country.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            gamingstyle: form.elements.game_style.value,
            games: form.elements.game.value,
            strength: form.elements.strength.value,
            improvement: form.elements.improvement.value,
            service: form.elements.service.value
        }

        postTheData(data);

    }

    function postTheData(data) {

        post(data);

    }

}