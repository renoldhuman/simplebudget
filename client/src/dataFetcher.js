function fetchUser(){
	fetch('/users')
			.then(function(response){
				response.json().then(function(data){
				console.log(data.username);
			});
			})
}