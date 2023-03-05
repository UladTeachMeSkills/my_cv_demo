import anime from "animejs/lib/anime.es.js";

document.addEventListener("DOMContentLoaded", function () {
    var paths = document.querySelectorAll(".banner__preview path");

    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var offset = anime.setDashoffset(path);
        path.setAttribute("stroke-dashoffset", offset);
        anime({
            targets: path,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1500,
            delay: function (el, i) {
                return i * 250;
            },
            direction: "alternate",
            loop: true,
        });
    }
});
