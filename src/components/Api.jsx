import axios from 'axios';

const url = `https://dummyjson.com/products`;

const getData = async() => await axios.get(url);

export default getData;