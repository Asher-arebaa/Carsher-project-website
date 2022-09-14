const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc86b1abdamsh2197891c167970ep1c888cjsne102ee33521f',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));