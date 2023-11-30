const selecterMode = document.getElementById("mode");
const selecterSecondFile = document.getElementById("input2");
const selecterParam = document.getElementById("param");
const selecterAxis = document.getElementById("axis");
selecterSecondFile.style.display = "none";

function formSwitch(){
    selectInput();
    mode = document.getElementsByClassName("visualizeMode")
    if(mode[0].checked){
        selecterSecondFile.style.display = "block";
        selecterSecondFile.selectedIndex=0;
        selecterParam.selectedIndex=0;
        selecterAxis.selectedIndex=0;
    } else if(mode[1].checked){
        selecterSecondFile.style.display = "none";
        selecterSecondFile.selectedIndex=0;
        selecterParam.selectedIndex=0;
        selecterAxis.selectedIndex=0;
    }
}


const selecterInputItem = document.getElementById('inputItem');
selecterInputItem.style.display = "none";

function selectInput() {
    mode = document.getElementsByClassName("visualizeMode")
    if(mode[1].checked && document.getElementById("inputFile1").value.indexOf("稼") === 0){
        selecterInputItem.style.display = "block";
    } else {
        selecterInputItem.style.display = "none";
    }
}

