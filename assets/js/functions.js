window.onload = () => {

    if(localStorage.getItem("visited")){
        displayHidden();
    }else{
        localStorage.setItem("visited", true);
        $("cover").style.display = "flex";
        setTimeout(() => {
            $("cover").style.display = "none";
            displayHidden();
        }, 6500);
    }

    var scrollableElement = $('content');

    scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

    const SECTIONS = $$("section");
    console.log(SECTIONS);

};

function displayHidden(){
    let hiddenItems = document.getElementsByClassName("hidden");
    for(var i = 0; i < hiddenItems.length; i++){
        if(!hiddenItems[i].classList.contains("section")){
            hiddenItems[i].style.display = "flex";
            hiddenItems[i].style.opacity = 0;
            hiddenItems[i].classList.add("fade-in");
        }
    }
}

function findScrollDirectionOtherBrowsers(event){
    var delta;

    if (event.wheelDelta){
        delta = event.wheelDelta;
    }else{
        delta = -1 * event.deltaY;
    }

    if (delta < 0){
        console.log("DOWN");
    }else if (delta > 0){
        console.log("UP");
        changeSection(true);
    }

}

function changeSection(up){
    if(up){
        currentIndex = $$("current")[0].id;
        console.log(currentIndex);
        currentIndex++;
        console.log(currentIndex);
    }else{

    }
}

/* Shortcuts */
function $(id){
    return document.getElementById(id);
}

function $$(className){
    return document.getElementsByClassName(className);
}