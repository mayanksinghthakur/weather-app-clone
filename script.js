const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59affbbf47msh71f722fc3a05c43p1f2f2bjsnd98f121f277c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city' +city, options)
	.then(response => response.json())
	.then(response =>{
	
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp 
		max_temp.innerHTML=response.max_temp 
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
	
		
		
		console.log(response)})
	.catch(err => console.error(err));
}
hello.addEventListener("click",(err)=>{
	getWeather(city.value)
	e.preventDefault()
})
getWeather("delhi");
