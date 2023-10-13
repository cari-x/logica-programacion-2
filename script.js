
const inputCelsius = document.getElementById("gradoCelsius");
const outputKelvin = document.getElementById("kelvin");
const outputFahrenheit = document.getElementById("fahrenheit");


function convertir(){
    const TempCelsius = parseFloat(inputCelsius.value);

    if(!isNaN(TempCelsius)){
        const TempFahrenheit = (TempCelsius * 9/5) + 32;
        const TempKelvin = TempCelsius + 273.15;

        outputFahrenheit.textContent = `Temperatura en Fahrenheit es : ${TempFahrenheit}`;
        outputKelvin.textContent = `Temperatura en Kelvin es : ${TempKelvin}`;
    }else{
        alert("Profavor ingrese una temperatura valida");
    }

}