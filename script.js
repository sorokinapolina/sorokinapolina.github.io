const registrationMenuBtn = document.getElementById("registration-menu-btn");
const menuWindow = document.getElementById("menu-window");
const closeLink = document.querySelectorAll(".close-link");

if (registrationMenuBtn) {
    registrationMenuBtn.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", menuWindow.style.display); // Добавим для отладки

        if (menuWindow.style.display !== "block") {
            menuWindow.style.display = "block";
        } else {
            menuWindow.style.display = "none";
        }
    });
}

if (closeLink) {
    closeLink.forEach(element => {
        element.addEventListener("click", function () {
            console.log("Кнопка нажата"); // Добавим для отладки
            console.log("Текущий display:", menuWindow.style.display); // Добавим для отладки

            if (menuWindow.style.display !== "none") {
                menuWindow.style.display = "none";
            } else {
                menuWindow.style.display = "block";
            }
        });
    });
}