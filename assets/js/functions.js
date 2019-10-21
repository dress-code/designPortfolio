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

    /*var scrollableElement = $('content');

    scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);*/

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
    let currentSection = $$("current")[0];
    currentSection.classList.remove("hidden");
    currentSection.style.opacity = 0;
    currentSection.classList.add("fade-in");
}

/*function findScrollDirectionOtherBrowsers(event){
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
        let current = $$("current")[0];
        current.classList.remove("current");
        console.log(current.id);
        let index = parseInt(current.id) + 1;
        console.log(index);
        changeSection(index);
    }

}*/

function changeSection(newSectionIndex){
        console.log("fired function");
        let newSection = $(newSectionIndex);
        let oldSection = $$("current")[0];
        oldSection.classList.remove("current")
        oldSection.classList.add("hidden");
        newSection.classList.remove("hidden");
        newSection.classList.add("current");
        newSection.classList.add('fade-in');
}

/* Shortcuts */
function $(id){
    return document.getElementById(id);
}

function $$(className){
    return document.getElementsByClassName(className);
}