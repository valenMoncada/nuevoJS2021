/* 
Json placeholder para pruebas
async await -> el código espera hasta tener el resultado
try -> bien
catch -> error
finally -> siempre
*/

//res.json no funciona porque no hay nada
const getU = () =>{
	try {
		const res =  fetch('https://jsonplaceholder.typicode.com/users');
		const users =  res.json();

		console.log(users);
	} catch (error) {
		console.log(error);
	}
}
getU();

const getUsers = async () => {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await res.json();
		console.log(users);

		for (user of users) {
			document.body.innerHTML += `
				<ul>
					<li>
						${user.id}<br> 
						${user.name}<br> 
						${user.website}<br> 
						${user.username}
					</li>
				</ul>    
    		`;
		}
	} catch (error) {
		console.log(error);
	} finally { 
		console.log('Siempre muestra esto');
	}
}

getUsers();