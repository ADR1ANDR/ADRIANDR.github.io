


function loguear(){

    let user=document.getElementById("Usuario").value;

    let pass=document.getElementById("Clave").value;

   let error =document.getElementById("error"),value;

    if(user=="adrian" && pass=="mora"){

        window.location="home.HTML";
        alert(user);
    }

    if(user==0 &&  pass==0){

        error.innerText = ("LLene los campos");
        alert("LLene los Capos");
    }

    else{
    
        error.innerText = ("Datos Incorrectos");
        
}
}




 