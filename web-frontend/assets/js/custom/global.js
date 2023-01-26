/* FUNCTION CALLBACLS */
const toggleActiveStateTheme = (event, is_dark) => {
    let theme_block = event.target.parentNode;

    theme_block.setAttribute("class", (is_dark) ? "set_dark_mode" : "set_light_mode");
}

if(document.getElementById("light_mode")){
    /* EVENTS */
    document.getElementById("light_mode").addEventListener("click", (event) => toggleActiveStateTheme(event, is_dark = false));
    document.getElementById("dark_mode").addEventListener("click", (event) => toggleActiveStateTheme(event, is_dark = true));
}