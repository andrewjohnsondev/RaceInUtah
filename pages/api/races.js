import axios from 'axios';
import { sortEventsByDate } from '../../helpers/array';
import { removeEventDuplicates } from '../../helpers/array';

export default async (req, res) => {
  const eventTypes = req.body.data.eventTypes;
  const options = req.body.data.options;
  const page = req.body.data.page;
  const requestNumber = req.body.data.requestNumber;

  const fetchByEvent = async (type, page, options = {}) => {
    const res = await axios.get('https://runsignup.com/rest/races', {
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
        page: page,
        event_type: type,
        results_per_page: requestNumber,
        ...options,
      },
    });

    return res;
  };

  try {
    const dataList = await Promise.all(
      eventTypes.map((eventType) => fetchByEvent(eventType, page, options))
    );

    let races = [];

    dataList.forEach(({ data }) => (races = [...races, ...data.races]));

    res.send(sortEventsByDate(removeEventDuplicates(races)));
  } catch (err) {
    console.log('Error', err.message);
    res.status(500).json({ error: 'Data failed to fetch' });
  }
};
