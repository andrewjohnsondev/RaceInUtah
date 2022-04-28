import axios from 'axios';
import { REQUEST_NUMBER } from './types';

export default axios.create({
  baseURL: 'https://runsignup.com/rest/races',
  params: {
    state: 'UT',
    api_secret: 'Y6Y9ghjIfGJ5gSjXghBHve7TM5ndjckN',
    api_key: 'aH9ws2Ws3IsXLG6j89erUAZVc1XEA2SY',
    format: 'JSON',
    events: 'T',
    aflt_token: 'T',
    sort: 'date',
    start_date: 'today',
    future_events_only: 'T',
  },
});
