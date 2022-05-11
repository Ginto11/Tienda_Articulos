const pantalon = document.getElementById("pantalon");
const camiseta = document.getElementById("camiseta");
const tenis = document.getElementById("tenis");
const gafas = document.getElementById("gafas");
const gorro = document.getElementById("gorro");
const buso = document.getElementById("buso");
const reloj = document.getElementById("reloj");
const manilla = document.getElementById("manilla");
const pantaloneta = document.getElementById("pantaloneta");
const guantes = document.getElementById("guantes");
const formularioPago = document.getElementById("formulario__pago");
const titulo = document.getElementById("titulo");
const productos = document.getElementById("productos__ventas");

const comprar = document.getElementById("link__comprar");
const reiniciar = document.getElementById("link__reiniciar");
const valorPagar = document.getElementById("valorPagar");
const mostrador = document.getElementById("mostrar__elementos");
const campoListaElementos = document.getElementById("lista__elementos");

const btnPagar = document.getElementById("btn__pagar");
const valorPago = document.getElementById("valor__pago").value;

var valor = 0;
var contador = 0;
var valorXPagar = 0;
var listaElementos = "";

var campoSubtotal = document.getElementById("subtotal");
var campoIva = document.getElementById("iva");

function alerta(){
	alert("Agregado Exitosamente");
}

pantalon.addEventListener("click", ()=>{
	alerta();
	valor += 31000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Pantalon -";
});

camiseta.addEventListener("click", ()=>{
	alerta();
	valor += 20000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Camiseta -";
});

tenis.addEventListener("click", ()=>{
	alerta();
	valor += 80000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Tenis -";
});

gafas.addEventListener("click", ()=>{
	alerta();
	valor += 60000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Gafas -";
});

gorro.addEventListener("click", ()=>{
	alerta();
	valor += 10000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Gorro -";
});

buso.addEventListener("click", ()=>{
	alerta();
	valor += 120000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Buso -";
});

reloj.addEventListener("click", ()=>{
	alerta();
	valor += 200000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Reloj -";
});

manilla.addEventListener("click", ()=>{
	alerta();
	valor += 28000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Manilla -";
});

pantaloneta.addEventListener("click", ()=>{
	alerta();
	valor += 30000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Pantaloneta -";
});

guantes.addEventListener("click", ()=>{
	alerta();
	valor += 24000;
	contador++;
	mostrador.value = contador;
	listaElementos += "- Guantes -";
});

comprar.addEventListener("click", ()=>{

	if(valor == 0){
		alert("Agregue un elemento al carrito.");
	} else if(valor > 0){
		
		campoSubtotal.setAttribute("value", valor);
		var ivaValor = valor * 0.19;
		valorXPagar = valor + ivaValor;
		campoIva.setAttribute("value", ivaValor);
		valorPagar.setAttribute("value", valorXPagar);
		formularioPago.classList.add('active__form');
		campoListaElementos.setAttribute("value", listaElementos);

		titulo.classList.add('inactive');
		productos__ventas.classList.add('inactive');
	}
});


reiniciar.addEventListener("click", ()=>{
	alert("Has vaciado el carrito");
	valor = 0;
	contador = 0;
	mostrador.value = contador;
});

