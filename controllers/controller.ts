//Variable global, accesible desde cualquier función
let car: Car;

//Guardo los dos formularios en constantes
const carForm = document.querySelector("#carFormId") as HTMLFormElement;
const wheelForm = document.querySelector("#wheelFormId") as HTMLFormElement;


/* ////////// Evento que creará el coche ////////// */
carForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(carForm);
    console.log(wheelForm);
});


//Función que crea un coche. Parámetros: matrícula (string), marca (string), color (string)
/*function createCar (plate: string, brand: string, color: string){

    //Creamos un objeto de la clase car pasándole los parámetros de la función
    car = new Car(plate, color, brand);

    //Llamamos al método de la clase Car addWheel, le pasamos un nuevo objeto de la clase Wheel
    car.addWheel(new Wheel(2, "SEAT"));

    //Escribimos en el body la siguiente cadena (nos sustituye todos los elementos que tenemos en el body)
    document.body.innerText = "CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels); //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
}  */

