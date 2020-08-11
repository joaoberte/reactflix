const URL_SERVER = window.location.hostname.includes('localhost') ?
    'http://localhost:8080'
    : 'https://reactflix-app.herokuapp.com';

export default {
    URL_SERVER,
}