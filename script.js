
const apikey="bce211e21eea21d0566988949ff2f665";
const Apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let btn=document.querySelector(".search button");
let cityname=document.querySelector(".search input")

let images=document.querySelector(".weather-icon")
async function cheekwether(city){

    const response=await fetch(Apiurl+city +`&appid=${apikey}`);
    var date=await response.json();
    if(response.status==404){

        document.querySelector(".error").style.color="red";
    }   
    console.log(date)
    document.querySelector(".weather .city").innerHTML=date.name;
    document.querySelector(".weather .temp").innerHTML=Math.round(date.main.temp)+"°C";
    // 
    document.querySelector(".weather .humidity").innerHTML=date.main.humidity+"%";

    document.querySelector(".weather .wind").innerHTML=date.wind.speed+"km/h";


switch (date.weather[0].main) {
    case "Clear":
        images.src="./images/clear.png"
        break;
    case "Clouds":
        images.src="./images/clouds.png"
        break;
    case "Snow":
        images.src="images/snow.png"
        break;
        case "Rain":
            images.src="./images/rain.png"
            break;         
    default:
        images.src="./images/drizzle.png"
        break;
}
document.querySelector(".weather").style.display="block"
document.querySelector(".error").style.color="transparent";

 

}

btn.addEventListener("click",function(){
    cheekwether(cityname.value)
   
    
})
