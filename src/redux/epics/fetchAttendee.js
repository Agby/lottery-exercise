import axios from 'axios';

const fetchAttendee = () => {
  return axios.get('http://google.com.tw', {
    responseType: 'json',
  });
};

export default fetchAttendee;
