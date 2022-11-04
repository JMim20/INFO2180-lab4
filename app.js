let searchBtn;
window.onload=function(){

    searchBtn=document.getElementsByClassName("btn")[0];

    let httpRequest;

    searchBtn.addEventListener("click",function(element){
        element.preventDefault();

        httpRequest= new XMLHttpRequest();

        let searchFile = "superheroes.php";
        //http://localhost/INFO2180-lab4/index.html
        httpRequest.onreadystatechange = loadList;
        httpRequest.open('GET',searchFile);
        httpRequest.send();

    });

    function loadList(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status ===200){
                let response= httpRequest.responseText;
               // let list = document.querySelector('#list')
               alert(response);
            } else{
                alert('There was a problem with the request.')
            }
        }
    }

}

/*search(){
    element.preventDefault();
    httpRequest= new XMLHttpRequest();

    let searchFile = "superheroes.php";
    httpRequest.onreadystatechange = loadList;
    httpRequest.open('GET',searchFile);
    httpRequest.send();
}*/



