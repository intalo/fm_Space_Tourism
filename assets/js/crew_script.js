const person_item = document.querySelectorAll("li.person_item");
let person_image = document.querySelectorAll("img.person_image");
let person_profession_title = document.querySelector(
    "h2#person_profession_title"
);
let person_name_title = document.querySelector("h3#person_name_title");
let person_biography = document.querySelector("p#person_biography");

for (let position = 3; position >= 0; position--) {
    person_item[position].addEventListener("click", () =>
        change_person(position)
    );
}

function change_person(person_value) {
    if (person_value == 0) {
        person_item[person_value].style = "background: #c4c8d8cc";
        person_item[1].style = "background: #c4c8d867";
        person_item[2].style = "background: #c4c8d867";
        person_item[3].style = "background: #c4c8d867";
        person_image[0].setAttribute(
            "src",
            "assets/img/crew_imgs/image-douglas-hurley.webp"
        );
        person_image[1].setAttribute(
            "src",
            "assets/img/crew_imgs/image-douglas-hurley.webp"
        );
        person_profession_title.innerHTML = "COMMANDER";
        person_name_title.innerHTML = "DOUGLAS HURLEY";
        person_biography.innerHTML =
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    }
    if (person_value == 1) {
        person_item[person_value].style = "background: #c4c8d8cc";
        person_item[0].style = "background: #c4c8d867";
        person_item[2].style = "background: #c4c8d867";
        person_item[3].style = "background: #c4c8d867";
        person_image[0].setAttribute(
            "src",
            "assets/img/crew_imgs/image-mark-shuttleworth.webp"
        );
        person_image[1].setAttribute(
            "src",
            "assets/img/crew_imgs/image-mark-shuttleworth.webp"
        );
        person_profession_title.innerHTML = "MISSION SPECIALIST";
        person_name_title.innerHTML = "MARK SHUTTLEWORTH";
        person_biography.innerHTML =
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    }
    if (person_value == 2) {
        person_item[person_value].style = "background: #c4c8d8cc";
        person_item[1].style = "background: #c4c8d867";
        person_item[0].style = "background: #c4c8d867";
        person_item[3].style = "background: #c4c8d867";
        person_image[0].setAttribute(
            "src",
            "assets/img/crew_imgs/image-victor-glover.webp"
        );
        person_image[1].setAttribute(
            "src",
            "assets/img/crew_imgs/image-victor-glover.webp"
        );
        person_profession_title.innerHTML = "PILOT";
        person_name_title.innerHTML = "VICTOR GLOVER";
        person_biography.innerHTML =
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    }
    if (person_value == 3) {
        person_item[person_value].style = "background: #c4c8d8cc";
        person_item[1].style = "background: #c4c8d867";
        person_item[2].style = "background: #c4c8d867";
        person_item[0].style = "background: #c4c8d867";
        person_image[0].setAttribute(
            "src",
            "assets/img/crew_imgs/image-anousheh-ansari.webp"
        );
        person_image[1].setAttribute(
            "src",
            "assets/img/crew_imgs/image-anousheh-ansari.webp"
        );
        person_profession_title.innerHTML = "FLIGHT ENGINEER";
        person_name_title.innerHTML = "ANOUSHEH ANSARI";
        person_biography.innerHTML =
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    }
}
change_person(0);