function openTopic() {
    document.getElementByID("mySideBar").style.width = "250px";
    document.getElementByID("middle").style.marginLeft = "250px";
    document.getElementByID("right").style.marginleft = "250px"
}

function closeTopic() {
    document.getElementByID("mySidebar").style.width = "0";
    document.getElementByID("middle").style.marginLeft = "0";
    document.getElementByID("right").style.marginleft = "0"
}

