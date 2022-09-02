import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars',
  params: {limit: '10', page: '0'},
  headers: {
    'X-RapidAPI-Key': '6db33aa869mshf63bb4e570fc701p19cf0fjsn2a87e2250b51',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});