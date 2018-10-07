
/** EVENT LISTENERS **/

const body = document.getElementById('body');
window.addEventListener('load', getLocation);
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', findLocation)


/** END OF EVENTS LISTENERS **/


/** DATE AND TIME CODES **/
// Get today's date in Word
function getToday(){
	let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return days[today.getDay()]

}

// Get Current Month
function getCurrentMonth(){
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
return months[d.getMonth()];
}

// Get today's date in numbers
function getDatee(){
	let d = new Date();
	return d.getDate()
}


//Set today's Date
document.getElementsByClassName('day')[0].textContent = getToday();
document.getElementsByClassName('date')[0].innerText = getDatee()+ '  '+ getCurrentMonth();


/** END OF DATE AND TIME CODE **/




/** FUNCTIONS **/


// GET RANDOM LOCATION
function randomLocation(){
 const location = ['lagos', 'ilorin', 'london']
 const random = Math.floor(Math.random() * 3);
 return location[random];

}

let locate = randomLocation();


// GET LOCATION
function getLocation(){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=b6ef7c2fc764e43b5f9ec0a4a02adf59&unit=metric`)
	.then(res => res.json())
	.then(data => {

		document.getElementById('wind').innerHTML = `<img src="images/icon-wind.png" alt=""> ${data.wind.speed} km/h`;


	})

	fetch(`http://api.apixu.com/v1/current.json?key=43fc62e0ac3344ae8b393524182709&q=${locate}`)
	.then(res => res.json())
	.then(data => {
		
		document.getElementsByClassName('location')[0].textContent = data.location.name;
		document.getElementById('desc').textContent = `${data.current.condition.text}`;
		document.getElementById('dir').innerHTML = `<img  src="images/icon-compass.png" alt="">  ${data.current.wind_dir}`;

		document.getElementById('deg').innerHTML = `${data.current.temp_c}<sup>o</sup>C`;
		document.getElementById('currentIcon').setAttribute('src', data.current.condition.icon);



	})
}

function findLocation(){
	//e.preventDefault();
	let locate = document.getElementById('input').value;
	
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=b6ef7c2fc764e43b5f9ec0a4a02adf59&unit=metric`)
	.then(res => res.json())
	.then(data => {

		document.getElementById('wind').innerHTML = `<img src="images/icon-wind.png" alt=""> ${data.wind.speed} km/h`;


	})

	fetch(`http://api.apixu.com/v1/current.json?key=43fc62e0ac3344ae8b393524182709&q=${locate}`)
	.then(res => res.json())
	.then(data => {
		
		document.getElementsByClassName('location')[0].textContent = data.location.name;
		document.getElementById('desc').textContent = `${data.current.condition.text}`;
		document.getElementById('dir').innerHTML = `<img  src="images/icon-compass.png" alt="">  ${data.current.wind_dir}`;

		document.getElementById('deg').innerHTML = `${data.current.temp_c}<sup>o</sup>C`;
		document.getElementById('currentIcon').setAttribute('src', data.current.condition.icon);



	})
	
	
}



