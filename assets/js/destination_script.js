let planet_image = document.querySelector("img#planet_image");
let planet_name = document.querySelector("h2#planet_name");
let planet_information = document.querySelector("p#planet_information");
let planet_avgdistance = document.querySelector("td#planet_avgdistance");
let planet_esttraveltime = document.querySelector("td#planet_esttraveltime");

function changePlanet(planet) {
    if (planet == "moon") {
        planet_image.setAttribute(
            "src",
            "assets/img/destination_imgs/image-moon.png"
        );
        planet_name.innerHTML = "MOON";
        planet_information.innerHTML =
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        planet_avgdistance.innerHTML = "384,400 KM";
        planet_esttraveltime.innerHTML = "3 DAYS";
    }
    if (planet == "mars") {
        planet_image.setAttribute(
            "src",
            "assets/img/destination_imgs/image-mars.png"
        );
        planet_name.innerHTML = "MARS";
        planet_information.innerHTML =
            "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
        planet_avgdistance.innerHTML = "225 MIL. KM";
        planet_esttraveltime.innerHTML = "9 MONTHS";
    }
    if (planet == "europa") {
        planet_image.setAttribute(
            "src",
            "assets/img/destination_imgs/image-europa.png"
        );
        planet_name.innerHTML = "EUROPA";
        planet_information.innerHTML =
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        planet_avgdistance.innerHTML = "628 MIL. KM";
        planet_esttraveltime.innerHTML = "3 YEARS";
    }
    if (planet == "titan") {
        planet_image.setAttribute(
            "src",
            "assets/img/destination_imgs/image-titan.png"
        );
        planet_name.innerHTML = "TITAN";
        planet_information.innerHTML =
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        planet_avgdistance.innerHTML = "1.6 BIL. KM";
        planet_esttraveltime.innerHTML = "7 YEARS";
    }
}
