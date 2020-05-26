
var db = firebase.firestore();
var id;
function agregarUsuario(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(docRef){
        
        console.log("added");
        console.log(docRef);
        
        id = docRef.user.uid;

        console.log(id);
        var nombre = document.getElementById("nombre").value;
        var direccion = document.getElementById("direccion").value;   
        var celular = document.getElementById("celular").value;
        var edad = document.getElementById("edad").value;
        var linkFacebok = document.getElementById("identificacion").value;
        
        if(nombre.length == 0 || direccion.length == 0 || celular.length == 0 ||
        edad.length == 0 || linkFacebok.length == 0 ){
            alert("Rellena todos los campos");
        
        }else{  
            db.collection("usuarios").add({ 
            uid : id, 
            nombre : nombre,
            direccion : direccion,
            celular : celular,
            edad : edad,
            linkFacebok : linkFacebok
    
        })
        .then(function(docRef) {
             console.log("Document written with ID: ", docRef.id);
             console.log("added data base");
             alert("usuario agregado");
             window.location.href = "index.html";
         })
         .catch(function(error) {
          console.error("Error adding document: ", error);
          alert('error')
          });
                
        }

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
    

 }