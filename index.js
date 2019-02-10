const https = require('https');

class Client {
	constructor(access_token){
		this.access_token = access_token
	}

	send(to, from, body, service, callback){
		var api_endpoint = 'https://portal.mobtexting.com/api/v2/'
		var url = api_endpoint + 'sms/send?access_token=' + this.access_token + '&message=' 
		    + body  + '&sender=' + from + '&to=' + to + '&service=' + service

		var data = '';

		https.get(url, (resp) => {
			resp.on('data', (chunk) => {
				data += chunk;
			});

			resp.on('end', () => {
				callback(data)
			});

			}).on("error", (err) => {
				console.log("Error: " + err.message);
			});
	}
}

module.exports = Client;
