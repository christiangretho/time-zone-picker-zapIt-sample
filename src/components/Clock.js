import { useState } from 'react';
import timeZoneService from '../services/timeZoneService';

export default function Clock(props) {
  const { timeZone } = props;

  const [time, setTime] = useState();

  const tick = () => {
    setTime(timeZoneService.getTime(timeZone));
  };

  setInterval(() => tick(), 1000);

  return (
    <div style={{ width: 300 }}>
      {`Hello! the time in ${timeZone} is:`}
      <br />
      {time}
    </div>
  );
}
