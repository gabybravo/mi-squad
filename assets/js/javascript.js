function MiembroSquad(nombreApellido, edad, hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.mostrar = function(){
		return ("<ul><li>" + "<b>Nombre: </b>" + "<i>" + this.nombreApellido + "</i>" + "<br>" + "<b>Edad: </b>" + this.edad + " años" + "<br>" + "<b>Hobbies: </b>" + this.hobbies + "</li></ul>")
	}
}

function imprimir(){
	var karina = new MiembroSquad("Karina Laroze", 21, "Bailar");
	var compa1 = document.getElementById("compa1");
	compa1.innerHTML = karina.mostrar();

	var marcela = new MiembroSquad("Marcela Orellana", 31, "Andar en bicicleta y ver series coreanas");
	var compa2 = document.getElementById("compa2");
	compa2.innerHTML = marcela.mostrar();

	var mily = new MiembroSquad("Mily Rivas", 18, "Leer y ver películas");
	var compa3 = document.getElementById("compa3");
	compa3.innerHTML = mily.mostrar();

	var paty = new MiembroSquad("Patricia Zavala", 28, "Cantar");
	var compa4 = document.getElementById("compa4");
	compa4.innerHTML = paty.mostrar();

	var angela = new MiembroSquad("Angela Aliaga", 32, "Leer, escuchar música y jugar Donkey Kong Country");
	var compa5 = document.getElementById("compa5");
	compa5.innerHTML = angela.mostrar();

	var dany = new MiembroSquad("Daniela Risco", 35, "Ver películas");
	var compa6 = document.getElementById("compa6");
	compa6.innerHTML = dany.mostrar();

}
