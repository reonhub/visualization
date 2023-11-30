const selecterMode = document.getElementById("mode");
const selecterSecondFile = document.getElementById("input2");
selecterSecondFile.style.display = "none";

function formSwitch(){
    selectInput();
    mode = document.getElementsByClassName("visualizeMode")
    if(mode[0].checked){
        selecterSecondFile.style.display = "block";
    } else if(mode[1].checked){
        selecterSecondFile.style.display = "none";
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

