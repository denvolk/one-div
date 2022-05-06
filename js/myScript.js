let homeInfo = document.getElementsByClassName("slide-main")[0];
let aboutInfo = document.getElementsByClassName("slide-about")[0];
let skillsInfo = document.getElementsByClassName("slide-skills")[0];
let portfolioInfo = document.getElementsByClassName("slide-portfolio")[0];

let radioHome = document.getElementById("radio-1");
let radioAbout = document.getElementById("radio-2");
let radioSkills = document.getElementById("radio-3");
let radioPortfolio = document.getElementById("radio-4");

let selector_ru = document.getElementById("ruL");
let selector_eng = document.getElementById("engL");

function selectInfo(info)   {
    if (info === "home")    {
        scrollMain('home');
    }
    else if (info === "about")  {
        scrollMain('about');
    }
    else if (info === "skills")  {
        scrollMain('skills');
    }
    else if (info === "portfolio")  {
        scrollMain('portfolio');
    }
}

var show = function (elem)  {
    elem.classList.add("is-visible");
};

var hide = function (elem)  {
    elem.classList.remove("is-visible");
};

var toogle = function (elem)    {
    elem.classList.toggle("is-visible");
};

let text;

fetch("https://raw.githubusercontent.com/denvolk/one-div/master/json/text.json")
//fetch("http://localhost:63342/one-div/json/text.json")
    .then(response => response.json())
    .then(data => text = data);

window.onload = scrollMain('home');

window.onload = function () {
    if (!window.location.hash) {
        window.location.hash = "#eng";
    }

    if (window.location.hash === "eng") {
        selector_eng.style.color = "#070707";
        selector_ru.style.color = "#828282";
    }
    else if (window.location.hash === "ru") {
        selector_eng.style.color = "#828282";
        selector_ru.style.color = "#070707";
    }
}

function changeLanguage(lang) {
    if (window.location.hash) {
        window.location.hash = lang;
    }

    if (window.location.hash === "#ru") {
        setTextToRu();
        document.getElementById("ruL").style.color = "#070707";
        document.getElementById("engL").style.color = "#828282";
        document.documentElement.setAttribute("lang", "ru");
    } else if (window.location.hash === "#eng") {
        setTextToEng();
        document.getElementById("ruL").style.color = "#828282";
        document.getElementById("engL").style.color = "#070707";
        document.documentElement.setAttribute("lang", "en");
    }
}

function setTextToRu()  {
    document.getElementById("span-menu-home").textContent = text["ru"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["ru"]["aboutmeVar"];
    document.getElementById("span-menu-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["ru"]["portfolioVar"];
    //document.getElementById("span-menu-contacts").textContent = text["ru"]["contactsVar"];
    document.getElementById("span-first-name").textContent = text["ru"]["firstnameVar"];
    document.getElementById("span-last-name").textContent = text["ru"]["lastnameVar"];
    document.getElementById("span-info-first").textContent = text["ru"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["ru"]["infoVarSecond"];
    document.getElementById("span-about").textContent = text["ru"]["aboutmeVar"];
    document.getElementById("span-about-part-one").textContent = text["ru"]["aboutp1VarFirst"];
    document.getElementById("span-about-part-two").textContent = text["ru"]["aboutp1VarSecond"];
    document.getElementById("span-about-part-three").textContent = text["ru"]["aboutp2VarFirst"];
    document.getElementById("span-about-part-four").textContent = text["ru"]["aboutp2VarSecond"];
    document.getElementById("span-about-part-five").textContent = text["ru"]["aboutp3VarFirst"];
    document.getElementById("span-about-part-six").textContent = text["ru"]["aboutp3VarSecond"];
    document.getElementById("span-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["ru"]["skillsPVar"];
    document.getElementById("span-portfolio").textContent = text["ru"]["portfolioVar"];
    document.getElementById("span-contacts").textContent = text["ru"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["ru"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["ru"]["contactsPVarSecond"];
    document.getElementById("span-button").textContent = text["ru"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["ru"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["ru"]["footerVarSecond"];
}

function setTextToEng() {
    document.getElementById("span-menu-home").textContent = text["eng"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["eng"]["aboutmeVar"];
    document.getElementById("span-menu-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["eng"]["portfolioVar"];
    //document.getElementById("span-menu-contacts").textContent = text["eng"]["contactsVar"];
    document.getElementById("span-first-name").textContent = text["eng"]["firstnameVar"];
    document.getElementById("span-last-name").textContent = text["eng"]["lastnameVar"];
    document.getElementById("span-info-first").textContent = text["eng"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["eng"]["infoVarSecond"];
    document.getElementById("span-about").textContent = text["eng"]["aboutmeVar"];
    document.getElementById("span-about-part-one").textContent = text["eng"]["aboutp1VarFirst"];
    document.getElementById("span-about-part-two").textContent = text["eng"]["aboutp1VarSecond"];
    document.getElementById("span-about-part-three").textContent = text["eng"]["aboutp2VarFirst"];
    document.getElementById("span-about-part-four").textContent = text["eng"]["aboutp2VarSecond"];
    document.getElementById("span-about-part-five").textContent = text["eng"]["aboutp3VarFirst"];
    document.getElementById("span-about-part-six").textContent = text["eng"]["aboutp3VarSecond"];
    document.getElementById("span-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["eng"]["skillsPVar"];
    document.getElementById("span-portfolio").textContent = text["eng"]["portfolioVar"];
    document.getElementById("span-contacts").textContent = text["eng"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["eng"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["eng"]["contactsPVarSecond"];
    document.getElementById("span-button").textContent = text["eng"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["eng"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["eng"]["footerVarSecond"];
}

function scrollMain(slide) {
    if (slide === "home") {
        //homeInfo.fadeIn()
        show(homeInfo);
        hide(aboutInfo);
        hide(skillsInfo);
        hide(portfolioInfo);
        radioHome.checked = true;
        radioAbout.checked = false;
        radioSkills.checked = false;
        radioPortfolio.checked = false;
        //homeInfo.style.visibility = "visible";
        //aboutInfo.style.visibility = "hidden";
        //skillsInfo.style.visibility = "hidden";
        //portfolioInfo.style.visibility = "hidden";
    } else if (slide === "about") {
        hide(homeInfo);
        show(aboutInfo);
        hide(skillsInfo);
        hide(portfolioInfo);
        radioHome.checked = false;
        radioAbout.checked = true;
        radioSkills.checked = false;
        radioPortfolio.checked = false;
        /*homeInfo.style.visibility = "hidden";
        aboutInfo.style.visibility = "visible";
        skillsInfo.style.visibility = "hidden";
        portfolioInfo.style.visibility = "hidden";*/
    } else if (slide === "skills") {
        hide(homeInfo);
        hide(aboutInfo);
        show(skillsInfo);
        hide(portfolioInfo);
        radioHome.checked = false;
        radioAbout.checked = true;
        radioSkills.checked = true;
        radioPortfolio.checked = false;
        /*homeInfo.style.visibility = "hidden";
        aboutInfo.style.visibility = "hidden";
        skillsInfo.style.visibility = "visible";
        portfolioInfo.style.visibility = "hidden";*/
    } else if (slide === "portfolio") {
        hide(homeInfo);
        hide(aboutInfo);
        hide(skillsInfo);
        show(portfolioInfo);
        radioHome.checked = false;
        radioAbout.checked = false;
        radioSkills.checked = false;
        radioPortfolio.checked = true;
        /*homeInfo.style.visibility = "hidden";
        aboutInfo.style.visibility = "hidden";
        skillsInfo.style.visibility = "hidden";
        portfolioInfo.style.visibility = "visible";*/
    }
}