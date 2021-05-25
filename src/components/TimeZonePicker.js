import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import timeZoneService from '../services/timeZoneService';

export default function TimeZonePicker(props) {
  const { handleChange } = props;

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="timeZoneTextBox"
        freeSolo
        options={timeZoneService.getTimeZones()}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Time Zones"
            margin="normal"
            variant="outlined"
            onKeyDown={(e) => {
              if (
                e.keyCode === 13 &&
                timeZoneService.getTimeZones().includes(e.target.value)
              ) {
                handleChange(e.target.value);
              }
            }}
          />
        )}
      />
    </div>
  );
}
