import moment from 'moment-timezone';

const getTimeZones = () => {
  return moment.tz.names();
};

const getTime = (timeZone) => {
  return moment().tz(timeZone).format('hh:mm:ss');
};

export default { getTimeZones, getTime };
