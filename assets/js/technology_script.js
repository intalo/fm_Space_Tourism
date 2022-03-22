let technology_image = document.querySelector("img#technology_image");
let technology_image_mobile = document.querySelector(
    "img#technology_image_mobile"
);
let technology_item = document.querySelectorAll("li.technology_item");
let technology_name = document.querySelector("h2#technology_name");
let technology_information = document.querySelector("p#technology_information");

for (let position = 2; position >= 0; position--) {
    technology_item[position].addEventListener("click", () =>
        change_position(position)
    );
}

function change_position(technology_value) {
    if (technology_value == 0) {
        technology_image.setAttribute(
            "src",
            "assets/img/technology_imgs/image-launch-vehicle-portrait.jpg"
        );
        technology_image_mobile.setAttribute(
            "src",
            "assets/img/technology_imgs/image-launch-vehicle-landscape.jpg"
        );
        technology_item[0].style = "background: #fff; color: #0c0e18;";
        technology_item[1].style = "background: auto; color: #fff;";
        technology_item[2].style = "background: auto; color: #fff;";
        technology_name.innerHTML = "LAUNCH VEHICLE";
        technology_information.innerHTML =
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    }
    if (technology_value == 1) {
        technology_image.setAttribute(
            "src",
            "assets/img/technology_imgs/image-spaceport-portrait.jpg"
        );
        technology_image_mobile.setAttribute(
            "src",
            "assets/img/technology_imgs/image-spaceport-landscape.jpg"
        );
        technology_item[1].style = "background: #fff; color: #0c0e18;";
        technology_item[0].style = "background: auto; color: #fff;";
        technology_item[2].style = "background: auto; color: #fff;";
        technology_name.innerHTML = "SPACEPORT";
        technology_information.innerHTML =
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
    }
    if (technology_value == 2) {
        technology_image.setAttribute(
            "src",
            "assets/img/technology_imgs/image-space-capsule-portrait.jpg"
        );
        technology_image_mobile.setAttribute(
            "src",
            "assets/img/technology_imgs/image-space-capsule-landscape.jpg"
        );
        technology_item[2].style = "background: #fff; color: #0c0e18;";
        technology_item[1].style = "background: auto; color: #fff;";
        technology_item[0].style = "background: auto; color: #fff;";
        technology_name.innerHTML = "SPACE CAPSULE";
        technology_information.innerHTML =
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    }
}
