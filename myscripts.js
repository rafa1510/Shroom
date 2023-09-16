let timesClicked = 0;

function openTopic() {
    timesClicked++;

    if (timesClicked%2==0) {
        document.getElementById("test").style.width = "0";
        document.getElementById("test").style.padding = "0";
    } else {
        document.getElementById("test").style.width = "8%";
        document.getElementById("test").style.padding = "0px 10px";
    }
}