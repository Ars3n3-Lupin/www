
window.addEventListener("load", (event)=>{

    function showTable(){
        let texts = document.getElementById("text");
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET','./table.php');
        
        // readyState 4 mean request finished 
        // and response is ready
        // status 200 mean OK
        // 
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                texts.innerHTML = xhttp.responseText;
            }
        }
        xhttp.send();
    }
    
    // setInterval(function(){
    //      run();   
    // },1000);
        
        function noDelaySetInterval(func, interval) {
            func();
            return setInterval(func, interval);
        }
      
        noDelaySetInterval(showTable, 3000);
        

});
