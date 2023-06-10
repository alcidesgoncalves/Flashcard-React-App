import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://django-server-production-98a7.up.railway.app/',
})
