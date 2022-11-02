
window.addEventListener("load", (event)=>{

    const inputs = document.querySelectorAll("input");

    

    function addUser(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remUser(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addUser);
        input.addEventListener("blur", remUser);
    });

});