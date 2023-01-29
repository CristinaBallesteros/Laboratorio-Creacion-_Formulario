const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^.{1,8}$/, 
}

const campos ={
	nombre:false,
	email:false,
	clave:false,
	clave2:false
}


const validarFormulario = (e) => {
    switch (e.target.name){
	    case "Nombre":
			validarcampo(expresiones.nombre, e.target,"nombre");
			validarrelleno(e.target,"nombre");
		break;
		case "Email":
			validarcampo(expresiones.email, e.target,"email");
			validarrelleno(e.target, "email");
		break;
		case "Clave":
			validarcampo(expresiones.clave, e.target,"clave");
			validarrelleno(e.target, "clave");
		break;
		case "Clave2":
			validarclave();
		break;
	}
}

const validarrelleno = (input,campo)=>{
	if(input.value === ""){
		document .getElementById(`grupo_${campo}`).classList.add("formulario_grupo-vacio");
		document .getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
    }else{
		document .getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-vacio");
	}
}

const validarcampo = (expresion,input,campo)  =>{
	if(expresion.test(input.value)){
		document .getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
		document .getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
	    campos[campo]=true;
	}else{
		document .getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
		document .getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
	    campos[campo]=false;
	}  
}
  

const validarclave = () =>{
	const inputclave1 = document.getElementById("Clave");
	const inputclave2 = document.getElementById("Clave2");
	if(inputclave1.value!== inputclave2.value ){
		document .getElementById(`grupo_clave2`).classList.add("formulario_grupo-incorrecto");
		document .getElementById(`grupo_clave2`).classList.remove("formulario_grupo-correcto");
		document .getElementById(`grupo_clave2`).classList.remove("formulario_grupo-vacio");
		campos["clave2"]=false;
	}else{
		if(inputclave2.value === ""){
			document .getElementById(`grupo_clave2`).classList.add("formulario_grupo-vacio");
		    document .getElementById(`grupo_clave2`).classList.remove("formulario_grupo-incorrecto");
			campos["clave2"]=false;
		} else{
			document .getElementById(`grupo_clave2`).classList.remove("formulario_grupo-incorrecto");
			document .getElementById(`grupo_clave2`).classList.remove("formulario_grupo-vacio");
		    document .getElementById(`grupo_clave2`).classList.add("formulario_grupo-correcto");
		    campos["clave2"]=true;
		}		
	}
}


inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario )
    input.addEventListener("blur", validarFormulario )

});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
	if(campos .nombre && campos .email && campos .clave && campos .clave2){
		formulario.reset();	
		alert("La incripción ha sido correcta");
		document .getElementById("grupo_nombre").classList.remove("formulario_grupo-correcto");
		document .getElementById("grupo_email").classList.remove("formulario_grupo-correcto");
		document .getElementById("grupo_clave").classList.remove("formulario_grupo-correcto");
		document .getElementById("grupo_clave2").classList.remove("formulario_grupo-correcto");
		}
})


