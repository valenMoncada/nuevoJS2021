/* 
Peticiones http con Axios
Libreria, parsea a json la info que trae
Se debe importar axios
Se descargar o se importa en JS
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Axios trae más info que fetch, se coloca res.data porque se necesitan los datos
*/
const getUsers = async () => {
    try {
        const res = await axios('https://jsonplaceholder.typicode.com/users');
        const users = await res.data;
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
        console.log('oleeeee');
    }
}
getUsers()