import axios from 'axios';
import { REQUEST_NUMBER } from './types';

export default axios.create({
  baseURL: 'https://runsignup.com/rest/races',
  params: {
    state: 'UT',
    api_key: process.env.NEXT_PUBLIC_RUNSIGNUP_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_RUNSIGNUP_SECRET_API_KEY,
    format: 'JSON',
    events: 'T',
    aflt_token: 'T',
    sort: 'date',
    start_date: 'today',
    future_events_only: 'T',
  },
});
