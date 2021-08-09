
let BASE_URL = 'https://windailyapp.herokuapp.com/'
// let localhost = 'http://192.168.100.25:3000/'

 export default {
    login: BASE_URL + 'login',
    register: BASE_URL + 'register',
    tier: BASE_URL + 'tier',
    prizesadd: BASE_URL +'prizes/add',
    getprizes: BASE_URL + 'prizes',
    gettier: BASE_URL + 'tier',
    ticket: BASE_URL + 'ticket',
    getticket: BASE_URL + 'tickets',
    getticketbyid: BASE_URL + 'tickets/',
    getwinner: BASE_URL + 'winner',
}