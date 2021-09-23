var header = document.querySelector('header');
var canvas = document.querySelector('canvas');
var allDoc = document.querySelectorAll("div");
var potion = document.getElementById('potion');
var button = document.getElementById('style-change');

var change = "-change";
var regex = '\-.*';

button.addEventListener("click", ()=> {
    if(button.checked) {
        console.log(button.checked);
        header.className += "-change";
        canvas.className += "-change";
        potion.src = "media/potion2.svg";
        for (let i = 0; i < allDoc.length; i++) {
            const element = allDoc[i];
            var Eclass2 = element.className;
            element.className += "-change";
                console.log(potion.src);
        }
    }else if(!button.checked){
        console.log(button.checked);
        header.className = "main_header";
        canvas.className = "main_canvas";
        potion.src = "media/potion.svg";
        for (let i = 0; i < allDoc.length; i++) {
            const element = allDoc[i];
            var Eclass = element.className;
            element.className = Eclass.substring(0, Eclass.indexOf("-"));
            console.log(potion.src);
        }
    }
})

