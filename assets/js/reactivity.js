document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.getElementById('styleRange').value = '4';
    } else {
        document.getElementById('styleRange').value = '4';
    }
}; 
toggleTheme();

setInterval(updateTime, 1000);

function toggle() {
    var toggler = document.getElementById("toggler");
    var sidebar = document.getElementById("sidebar");
    var slider = document.getElementById("slider");
    var main = document.getElementById("main");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (toggler.classList.contains("toggled")) {
        toggler.style.transform = "rotate(-360deg)";
        sidebar.style.transform = "revert";
        main.style.transform = "translateX(200px)";
        if (vw <= 600) {
            slider.style.transform = "translateX(200px)";
        }

        toggler.classList.toggle("toggled");
    }
    else {
        toggler.style.transform = "rotate(540deg)";
        toggler.style.marginLeft = "translateX(-200px)";
        sidebar.style.transform = "translateX(-195px)";
        main.style.transform = "revert";
        if (vw <= 600) {
            slider.style.transform = "revert";
        }

        toggler.classList.toggle("toggled");
    }
}

function updateTime() {
    var clockCircle = document.getElementById("clockCircle");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (hours > 11) {
        if (hours === 12) {
            hours = 12;
            clockCircle.style.marginLeft = "-16px";
        }
        else {
            hours = hours - 12;
            if (hours >= 10) {
                clockCircle.style.marginLeft = "-16px";
            }
            else {
                clockCircle.style.marginLeft = "-22px";
            }
        }
        t_str = hours + ":" + minutes + " " + "PM";
    } 
    else {
        if (hours === 0) {
            hours = 12;
        }
        if (hours >= 10) {
            clockCircle.style.marginLeft = "-16px"
        }
        else {
            clockCircle.style.marginLeft = "-22px"
        }
        t_str = hours + ":" + minutes + " " + "AM";
    }

    document.getElementById('clock1').innerText = t_str;
    document.getElementById('clock2').innerText = t_str;
    document.getElementById('clock3').innerText = t_str;
    document.getElementById('date7').innerText = currentTime.toLocaleDateString();
}

function menu98() {
    var menu = document.getElementById('start-menu');

    if (menu.style.display === 'none') {
        menu.style.display = 'unset';
    }
    else {
        menu.style.display = 'none';
    }
}

function dispelMenu98() {
    var menu = document.getElementById('start-menu');
    
    if (menu.style.display !== 'none') {
        menu.style.display = 'none';
    }
}

function menuXP() {
    var menu = document.getElementById('start-menuXP');
    var button = document.getElementById('xpButton');

    if (menu.style.display === 'none') {
        menu.style.display = 'unset';
        button.src = "/assets/images/xpStartBtnPost.png";
    }
    else {
        menu.style.display = 'none';
        button.src = "/assets/images/xpStartBtnPre.png";
    }
}

function dispelMenuXP() {
    var menu = document.getElementById('start-menuXP');
    var button = document.getElementById('xpButton');

    if (menu.style.display !== 'none') {
        menu.style.display = 'none';
        button.src = "/assets/images/xpStartBtnPre.png";
    }
}

function menu7() {
    var menu = document.getElementById('start-menu7');
    var button = document.getElementById('7Button');

    if (menu.style.display === 'none') {
        menu.style.display = 'unset';
        button.src = "/assets/images/win7StartClicked.png";
    }
    else {
        menu.style.display = 'none';
        button.style.background = "url('/assets/images/win7StartClosed.png')";
    }
}

function dispelMenu7() {
    var menu = document.getElementById('start-menu7');
    var button = document.getElementById('7Button');

    if (menu.style.display !== 'none') {
        menu.style.display = 'none';
        button.src = "/assets/images/win7StartClosed.png";
    }
}

function hoverStyle() {
    var button = document.getElementById('7Button');
    button.src = "/assets/images/win7StartHover.png";
}

function unHoverStyle() {
    var menu = document.getElementById('start-menu7');
    var button = document.getElementById('7Button');

    if (menu.style.display !== 'none') {
        button.src = "/assets/images/win7StartClicked.png";
    } else {
        button.src = "/assets/images/win7StartClosed.png";
    }
}

function windowWrap(id) {
    var item = document.getElementById(id)

    item.classList.add("window");
    item.classList.add("glass-body");
    item.style.marginLeft = "4px";
    item.style.marginTop = "-1px";
    item.style.marginBottom = "-1px";
}

function windowUnwrap(id) {
    var item = document.getElementById(id)

    item.classList.remove("window");
    item.classList.remove("glass-body");
    item.style.margin = "0 5px";
}

function linkedinNav() {
    dispelMenu98();
    dispelMenuXP();
    dispelMenu7();
    $("#linkedinIcon").trigger("dblclick");
}

function navigateTo(url) {
    window.open(url, '_blank').focus();
    dispelMenu98();
    dispelMenuXP();
    dispelMenu7();
}

function toggleTheme() {
    var theme = document.getElementsByClassName('themeChanger');
    var bodyPic = document.getElementsByTagName('body');
    var styleChanger = document.getElementById('styleRange');
    var sliderWindow = document.getElementById('slider');
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('main');

    var startBar = document.getElementById('startBar');
    var start98 = document.getElementById('startButton98');
    var clock98 = document.getElementById('98clock');
    
    var xpClock = document.getElementById('xpClock');
    var startXP = document.getElementById('xpStart');
    var gripper = document.getElementById('gripper');

    var sevenClock = document.getElementById('7Clock');
    var start7 = document.getElementById('7Start');

    var blogIcon = document.getElementById('blogImage');
    var contactIcon = document.getElementById('contactImage');
    var githubIcon = document.getElementById('githubImage');
    var linkedinIcon = document.getElementById('linkedinImage');
    var resumeIcon = document.getElementById('resumeImage');
    var sliderIcon = document.getElementById('sliderImage');
    var factIcon = document.getElementById('factImage');

    var blog = document.getElementById('blogIcon');
    var contact = document.getElementById('contactIcon');
    var github = document.getElementById('githubIcon');
    var linkedin = document.getElementById('linkedinIcon');
    var resume = document.getElementById('resumeIcon');
    var slider = document.getElementById('sliderIcon');
    var fact = document.getElementById('factIcon');

    var Bombsnifferheader = document.getElementById('Bombsnifferheader');
    var bombMenuElse = document.getElementById('bombMenuElse');
    var bombMenu7 = document.getElementById('bombMenu7');
    var optionsHeader = document.getElementById('optionsheader');
    var displayHeader = document.getElementById('displayheader');
    var controlsHeader = document.getElementById('controlsheader');
    var importHeader = document.getElementById('importheader');
    var exportHeader = document.getElementById('exportheader');
    var bombSniffer = document.getElementById('Bombsniffer');
    var spaceCadet = document.getElementById('SpaceCadet');
    var snifferWarning = document.getElementById('sniffWarning');
    var spaceWarning = document.getElementById('spaceWarning');

    // Change the value of media attribute
    // to change the active css stylesheet.
    if (styleChanger.value == '1') {
        theme[0].setAttribute('media', '');
        theme[1].setAttribute('media', 'none');
        theme[2].setAttribute('media', 'none');
        theme[3].setAttribute('media', 'none');
        bodyPic[0].setAttribute('style', "overflow: hidden; font-family: Tahoma, sans-serif; min-height: 100%; background-repeat: no-repeat; background-attachment: fixed; " +
            "background-position: center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; " +
            "background-size: " + $(window).width + "px " + $(window).height + "px; background-color: white; background-image: url('assets/images/win98.webp'); " +
            "max-width: 100vw;");
        startBar.style.display = "flex";
        startBar.className = "";
        startBar.className = "win98";
        start98.style.display = "flex";
        startXP.style.display = "none";
        gripper.style.display = "none";
        xpClock.style.display = "none";
        sevenClock.style.display = "none";
        start7.style.display = "none";
        clock98.style.display = "flex";
        blogIcon.src = "/assets/images/blog.png";
        contactIcon.src = "/assets/images/contact.png";
        githubIcon.src = "/assets/images/github.png";
        linkedinIcon.src = "/assets/images/linkedin.png";
        resumeIcon.src = "/assets/images/resume.png";
        sliderIcon.src = "/assets/images/slider.png";
        factIcon.src = "/assets/images/fact.png";
        Bombsnifferheader.style.width = "calc(100% + 14px)";
        Bombsnifferheader.style.marginLeft = "unset";
        bombMenuElse.style.display = "unset";
        bombMenu7.style.display = "none";
        displayHeader.style.marginRight = "-57px";
        displayHeader.style.marginLeft = "unset";
        optionsHeader.style.marginRight = "-134px";
        controlsHeader.style.marginRight = "unset";
        controlsHeader.style.marginLeft = "unset";
        importHeader.style.marginLeft = "unset";
        importHeader.style.marginRight = "unset";
        exportHeader.style.marginLeft = "unset";
        exportHeader.style.marginRight = "unset";

        if (sliderWindow.classList.contains("initialCard")) {
            sliderWindow.classList.remove("initialCard");
            sidebar.style.display = "none";
            main.style.display = "none";
            blog.style.display = "block";
            contact.style.display = "block";
            github.style.display = "block";
            linkedin.style.display = "block";
            resume.style.display = "block";
            slider.style.display = "block";
            fact.style.display = "block";
        }
    } 
    else if (styleChanger.value == '2') {
        theme[0].setAttribute('media', 'none');
        theme[1].setAttribute('media', '');
        theme[2].setAttribute('media', 'none');
        theme[3].setAttribute('media', 'none');
        bodyPic[0].setAttribute('style', "overflow: hidden; font-family: 'Franklin Gothic', sans-serif; min-height: 100%; background-repeat: no-repeat; " +
            "background-attachment: fixed; background-position: center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; " +
            "background-size: cover; background-size: " + $(window).width + "px " + $(window).height + "px; background-color: white; " +
            "background-image: url('assets/images/bliss.webp'); max-width: 100vw;");
        startBar.style.display = "flex";
        startBar.className = "";
        startBar.className = "xp";
        start98.style.display = "none";
        startXP.style.display = "block";
        gripper.style.display = "unset";
        clock98.style.display = "none";
        xpClock.style.display = "flex";
        sevenClock.style.display = "none";
        start7.style.display = "none";
        blogIcon.src = "/assets/images/blogXP.png";
        contactIcon.src = "/assets/images/contactXP.png";
        githubIcon.src = "/assets/images/githubXP.png";
        linkedinIcon.src = "/assets/images/linkedinXP.png";
        resumeIcon.src = "/assets/images/resumeXP.png";
        sliderIcon.src = "/assets/images/sliderXP.png";
        factIcon.src = "/assets/images/factXP.png";
        Bombsnifferheader.style.width = "calc(100% + 10px)";
        Bombsnifferheader.style.marginLeft = "unset";
        bombMenuElse.style.display = "unset";
        bombMenu7.style.display = "none";
        displayHeader.style.marginRight = "-57px";
        displayHeader.style.marginLeft = "unset";
        optionsHeader.style.marginRight = "-138px";
        controlsHeader.style.marginRight = "unset";
        controlsHeader.style.marginLeft = "unset";
        importHeader.style.marginLeft = "unset";
        importHeader.style.marginRight = "unset";
        exportHeader.style.marginLeft = "unset";
        exportHeader.style.marginRight = "unset";

        if (sliderWindow.classList.contains("initialCard")) {
            sliderWindow.classList.remove("initialCard");
            sidebar.style.display = "none";
            main.style.display = "none";
            blog.style.display = "block";
            contact.style.display = "block";
            github.style.display = "block";
            linkedin.style.display = "block";
            resume.style.display = "block";
            slider.style.display = "block";
            fact.style.display = "block";
        }
    }
    else if (styleChanger.value == '3') {
        theme[0].setAttribute('media', 'none');
        theme[1].setAttribute('media', 'none');
        theme[2].setAttribute('media', '');
        theme[3].setAttribute('media', 'none');
        bodyPic[0].setAttribute('style', "overflow: hidden; font-family: 'Segoe UI', sans-serif; min-height: 100%; background-repeat: no-repeat; background-attachment: fixed; " +
            "background-position: center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; " +
            "background-size: " + $(window).width + "px " + $(window).height + "px; background-color: white; background-image: url('assets/images/win7default.webp'); max-width: 100vw;");
        startBar.style.display = "flex";
        startBar.className = "";
        startBar.className = "seven window glass";
        start98.style.display = "none";
        startXP.style.display = "none";
        gripper.style.display = "unset";
        clock98.style.display = "none";
        xpClock.style.display = "none";
        sevenClock.style.display = "flex";
        start7.style.display = "block";
        blogIcon.src = "/assets/images/blog7.png";
        contactIcon.src = "/assets/images/contact7.png";
        githubIcon.src = "/assets/images/github7.png";
        linkedinIcon.src = "/assets/images/linkedin7.png";
        resumeIcon.src = "/assets/images/resume7.png";
        sliderIcon.src = "/assets/images/slider7.png";
        factIcon.src = "/assets/images/fact7.png";
        Bombsnifferheader.style.width = "calc(100% + 8px)";
        Bombsnifferheader.style.marginLeft = "-1px";
        bombMenuElse.style.display = "none";
        bombMenu7.style.display = "flex";
        displayHeader.style.marginRight = "-62px";
        displayHeader.style.marginLeft = "-1px";
        optionsHeader.style.marginRight = "-140px";
        controlsHeader.style.marginLeft = "-1px";
        controlsHeader.style.marginRight = "-1px";
        importHeader.style.marginLeft = "-1px";
        importHeader.style.marginRight = "-1px";
        exportHeader.style.marginLeft = "-1px";
        exportHeader.style.marginRight = "-1px";

        if (sliderWindow.classList.contains("initialCard")) {
            sliderWindow.classList.remove("initialCard");
            sidebar.style.display = "none";
            main.style.display = "none";
            blog.style.display = "block";
            contact.style.display = "block";
            github.style.display = "block";
            linkedin.style.display = "block";
            resume.style.display = "block";
            slider.style.display = "block";
            fact.style.display = "block";
        }
    }
    else {
        theme[0].setAttribute('media', 'none');
        theme[1].setAttribute('media', 'none');
        theme[2].setAttribute('media', 'none');
        theme[3].setAttribute('media', '');
        bodyPic[0].setAttribute('style', "overflow-x: hidden; position: absolute; bottom: 0px; display: flex; font-family: monospace; background-color: darkslateblue; " +
            "color: pink; margin-top: 0; max-width: 100%;");
        startBar.style.display = "none";
        bombSniffer.style.display = "none";
        snifferWarning.style.display = "none";
        spaceCadet.style.left = "200%";
        spaceWarning.style.display = "none";
        blog.style.display = "none";
        contact.style.display = "none";
        github.style.display = "none";
        linkedin.style.display = "none";
        resume.style.display = "none";
        slider.style.display = "none";
        fact.style.display = "none";
        sliderWindow.classList.add("initialCard");
        sidebar.style.display = "flex";
        main.style.display = "flex";
    }
}

function getHighest() {
    var sniff = document.getElementById("Bombsniffer");
    var space = document.getElementById("SpaceCadet");
    var slide = document.getElementById("slider");
    var max = 0;

    if (parseInt(sniff.style.zIndex) > parseInt(space.style.zIndex)) {
        max = parseInt(sniff.style.zIndex);
    } else {
        max = parseInt(space.style.zIndex);
    }

    if (parseInt(slide.style.zIndex) > max) {
        max = parseInt(slide.style.zIndex);
    }

    return max > 0 ? max : 1;
}

// Make stuff draggable:
dragElement(document.getElementById("blogIcon"));
dragElement(document.getElementById("contactIcon"));
dragElement(document.getElementById("githubIcon"));
dragElement(document.getElementById("linkedinIcon"));
dragElement(document.getElementById("sliderIcon"));
dragElement(document.getElementById("resumeIcon"));
dragElement(document.getElementById("factIcon"));
dragWindow(document.getElementById("Bombsniffer"));
dragWindow(document.getElementById("SpaceCadet"));
dragWindow(document.getElementById("options"));
dragWindow(document.getElementById("display"));
dragWindow(document.getElementById("controls"));
dragWindow(document.getElementById("import"));
dragWindow(document.getElementById("export"));
dragWindow(document.getElementById("slider"));

function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        elmnt.focus();
        elmnt.style.zIndex = (getHighest() + 1).toString();
        
        // get the mouse cursor position at startup:
        pos3 = e.clientX || e.targetTouches[0].clientX;
        pos4 = e.clientY || e.targetTouches[0].clientY;;
        document.addEventListener('mouseup', closeDragElement, false);

        // call a function whenever the cursor moves:
        document.addEventListener('mousemove', elementDrag, false);
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.removeEventListener('mouseup', closeDragElement, false);
        document.removeEventListener('mousemove', elementDrag, false);
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.addEventListener('mousedown', dragMouseDown, false);
    elmnt.addEventListener('touchstart', dragMouseDownMob, false);

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        elmnt.focus();
        
        // get the mouse cursor position at startup:
        pos3 = e.clientX || e.targetTouches[0].clientX;
        pos4 = e.clientY || e.targetTouches[0].clientY;;
        document.addEventListener('mouseup', closeDragElement, false);
        // call a function whenever the cursor moves:
        document.addEventListener('mousemove', elementDrag, false);
    }

    function dragMouseDownMob(e) {
        e = e || window.event;
        e.preventDefault();
        elmnt.focus();

        // get the touch location at startup:
        pos3 = e.targetTouches[0].clientX;
        pos4 = e.targetTouches[0].clientY;;
        document.addEventListener('touchend', closeDragElement, false);
        document.addEventListener('mouseup', closeDragElement, false);

        // call a function when the finger moves:
        document.addEventListener('touchmove', elementDragMob, false);
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function elementDragMob(e) {
        e = e || window.event;
        e.preventDefault();

        // calculate the new touch location:
        pos1 = pos3 - e.targetTouches[0].clientX;
        pos2 = pos4 - e.targetTouches[0].clientY;
        pos3 = e.targetTouches[0].clientX;
        pos4 = e.targetTouches[0].clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button/finger is released/raised:
        document.removeEventListener('mouseup', closeDragElement, false);
        document.removeEventListener('touchend', closeDragElement, false);
        document.removeEventListener('mousemove', elementDrag, false);
        document.removeEventListener('mousemove', elementDragMob, false);
        document.removeEventListener('touchmove', elementDragMob, false);
        document.removeEventListener('touchmove', elementDrag, false);
    }
}

updateTime();

var body = document.getElementsByTagName("body")[0];
var blogIcon = document.getElementById("blogIcon");
var contactIcon = document.getElementById("contactIcon");
var githubIcon = document.getElementById("githubIcon");
var linkedinIcon = document.getElementById("linkedinIcon");
var sliderIcon = document.getElementById("sliderIcon");
var resumeIcon = document.getElementById("resumeIcon");
var factIcon = document.getElementById("factIcon");

var bodyTap = new Hammer(body);
var blogIconTap = new Hammer(blogIcon);
var contactIconTap = new Hammer(contactIcon);
var githubIconTap = new Hammer(githubIcon);
var linkedinIconTap = new Hammer(linkedinIcon);
var sliderIconTap = new Hammer(sliderIcon);
var resumeIconTap = new Hammer(resumeIcon);
var factIconTap = new Hammer(factIcon);

bodyTap.on('tap', function() {
    // this is definitely hacky, but this is what dang makes the start menu functional for mobile Safari AKA the new IE
    if (document.getElementById('start-menu').style.display === "unset") {
        setTimeout(function() {
            dispelMenu98();
        }, 50);
    }
    else if (document.getElementById('start-menuXP').style.display === "unset") {
        setTimeout(function() {
            dispelMenuXP();
        }, 50);
    }
    else if (document.getElementById('start-menu7').style.display === "unset") {
        setTimeout(function() {
            dispelMenu7();
        }, 50);
    }
});

blogIconTap.on('doubletap', function() {
    if ($(window).width() < 767) {
        window.open('/blog', "_blank");
    }
});

contactIconTap.on('doubletap', function() {
    window.open('mailto:ethanexline@gmail.com');
});

githubIconTap.on('doubletap', function() {
    if ($(window).width() < 767) {
        window.open('https://github.com/ethanexline', "_blank");
    }
});

sliderIconTap.on('doubletap', function() {
    document.getElementById('slider').style.display = 'block';
});

linkedinIconTap.on('doubletap', function() {
    if ($(window).width() < 767) {
        window.open('https://www.linkedin.com/in/ethan-exline-b9b369201/', "_blank");
    }
});

resumeIconTap.on('doubletap', function() {
    if ($(window).width() < 767) {
        window.open('https://docs.google.com/document/d/1RQ8oDsmeiHMNIHJQmh23w6evR7nBwG9K/edit?usp=sharing&ouid=116941067584196312043&rtpof=true&sd=true', "_blank");
    }
});

factIconTap.on('doubletap', function() {
    if ($(window).width() < 767) {
        window.open('fact.html', "_blank");
    }
});

window.onresize = function () {
    const draggables = document.getElementsByClassName('drag');

    for (let i = 0; i < draggables.length; i++) {
        if (parseInt(draggables[i].style.left) >= window.innerWidth) {
            draggables[i].style.left = (window.innerWidth - 100) + 'px';
        }
        if (parseInt(draggables[i].style.top) >= window.innerHeight - 100) {
            draggables[i].style.top = (window.innerHeight - 150) + 'px';
        }
    }

    if (window.innerWidth < 620) {
        if (document.getElementById("SpaceCadet").style.left != "200%") {
            unloadSpaceCadet();
            document.getElementById("spaceWarning").style.display = "block";
        }
    } 
    else {
        dispelWarning();
        document.getElementById("sniffWarning").style.display = "none";
        if (document.getElementById("SpaceCadet").style.left != "200%") {
            loadSpaceCadet();
        }
    }
}