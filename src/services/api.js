import axios from 'axios';

const URL = 'https://api.serodonto.com.br/';

const URI = 'agendamentos?chave_api=36g6yCk!Q0c1816yC-43u0Cyq!Sob5&id_cliente=3520&data_inicial=2022-01-01&data_final=2022-05-20';

const [PASSWORD_SA, USERNAME_SA] = ['36g6yCk!Q0c1816yC-43u0Cyq!Sob5', 'sca.saude'];
const [PASSWORD_NS, USERNAME_NS] = ['36g6yCk!Q0c1816yC-43u0Cyq!Sob5','sca.saude'];


const api_sa = axios.create({
    baseURL: URL,
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Request-Width, Content-Type, Accept'
    },
    withCredentials: false,
    responseType: 'json',  
        auth:{
            username: USERNAME_SA,
            password: PASSWORD_SA
        }    
});






export default api_sa;