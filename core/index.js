import file from "../data/data.json";
import { getTemplate } from "../templates/skill.js";

const skillBox = document.querySelector(".skills__main");
const languageBox = document.querySelector(".skills__language");
const studyBox = document.querySelector(".skills__studies");
const experienceBox = document.querySelector(".experience__wrapper");
const burgerContainer = document.querySelector(".sidebar__nav");
const burgerButton = document.querySelector(".header__burger button");
const sidebar = document.querySelector(".sidebar__wrapper");

const init = () => {
    const skills = file.skills;
    const languages = file.languages;
    const studies = file.studies;
    const experience = file.experience;

    createAbout(file.about);

    skills.forEach((item) => {
        createSkill(item);
    });

    languages.forEach((item) => {
        createLanguages(item);
    });

    studies.forEach((item) => {
        createStudies(item);
    });

    experience.forEach((item) => {
        createExperience(item);
    });

    const noScroll = document.querySelectorAll(".no-scroll");

    noScroll.forEach((element) => {
        element.addEventListener("mouseenter", () => (document.body.style.overflow = "hidden"));
        element.addEventListener("mouseleave", () => (document.body.style.overflow = "auto"));
    });

    burgerContainer.addEventListener("click", (event) => onNavLinkClick(event));
    burgerButton.addEventListener("click", () => onBurgerClick());
};

const onNavLinkClick = (event) => {
    if (event.target.tagName === "A") {
        onBurgerClick();
        document.body.style.overflow = "auto";
    }
};

const onBurgerClick = () => {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.add("close");

        setTimeout(() => {
            sidebar.classList.remove("close");
        }, 2000);
    }
    sidebar.classList.toggle("active");
};

const createAbout = (text) => (document.querySelector(".about__description").innerHTML = text);

const createSkill = (item) => {
    let div = document.createElement("div");

    div.className = "skill";
    div.innerHTML = getTemplate;

    let description = createDescriptionForSkill(item.name);
    let additional = createCircularAdditional(item.additional);

    div.appendChild(description);
    div.appendChild(additional);
    skillBox.appendChild(div);

    const path = div.querySelector("path");

    let length = path.getTotalLength();
    let to = length * ((100 - item.score) / 100);
    path.getBoundingClientRect();
    path.style.strokeDashoffset = Math.max(0, to);
    path.nextElementSibling.textContent = item.score / 10;

    setCircularAdditional(additional);
};

const createLanguages = (item) => {
    let div = document.createElement("div");

    div.className = "skills__language-description";
    div.innerHTML = `<h4>${item.name}</h4>
  <span style="width: ${item.score}%" class="progress" data-description="${item.description}"></span>`;

    languageBox.appendChild(div);
};

const createStudies = (item) => {
    let div = document.createElement("div");

    div.className = "skills__studies-description";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <span>${item.date}</span>
    `;

    studyBox.appendChild(div);
};

const createExperience = (item) => {
    let div = document.createElement("div");

    div.className = "job-card";
    div.innerHTML = `
        <div class="front" data-period="${item.period}">
            <img src="${item.front}" alt="${item.name}" />
        </div>
        <div class="back no-scroll">
            <img src="${item.back}" alt="${item.name}" />
            <div class="job-card__description">${item.description}</div>
        </div>
    `;

    experienceBox.appendChild(div);
};

const createDescriptionForSkill = (name) => {
    let div = document.createElement("div");

    div.className = "skill__name";
    div.innerHTML = `<p>${name}</p>`;
    return div;
};

const createCircularAdditional = (additional) => {
    let div = document.createElement("div");
    div.className = "skill__additional";

    additional.forEach((item) => {
        let span = document.createElement("span");
        span.className = "skill__additional_item";
        span.innerText = item;

        div.appendChild(span);
    });

    return div;
};

const setCircularAdditional = (additional) => {
    const items = additional.querySelectorAll(".skill__additional_item");
    const length = items.length;
    const arc = 2 * Math.PI * (1 / length);
    const radius = 40;

    for (let index = 0; index < length; index++) {
        const angle = index * arc;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        items[index].style.left = 50 + x + "%";
        items[index].style.top = 50 + y + "%";
    }
};

document.addEventListener("DOMContentLoaded", init);
