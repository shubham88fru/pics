import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Cb97tuNaYFhVqEAe_rS5Ps8Y75hdd9JQX_KVVx2xrTY',
  },
});
