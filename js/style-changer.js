var allDoc = document.querySelectorAll("div");
var button = document.getElementById('style-change');
var change = "-change";
var regex = '\-.*';

button.addEventListener("click", ()=> {
    if(button.checked) {
        console.log(button.checked);
        for (let i = 0; i < allDoc.length; i++) {
            const element = allDoc[i];
            var Eclass2 = element.className;
            element.className += "-change";
                console.log(Eclass2);
        }
    }else if(!button.checked){
        console.log(button.checked);
        for (let i = 0; i < allDoc.length; i++) {
            const element = allDoc[i];
            var Eclass = element.className;
            element.className = Eclass.substring(0, Eclass.indexOf("-"));
            console.log(element.className);
        }
    }
})

