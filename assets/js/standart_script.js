function change_menu_visibility() {
    document
        .querySelector("ul.header_mobile_navbar_container")
        .classList.toggle("show_menu");
    document.querySelector("main").classList.toggle("main_margin_top");
}
