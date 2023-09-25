//Billing and Payment History:
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://airport-info.p.rapidapi.com/airport',
  headers: {
    'X-RapidAPI-Key': 'c6375ef46amshb35d70b6f658806p1aee76jsndd367117d983',
    'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}