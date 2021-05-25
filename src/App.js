import './App.css';
import { useState } from 'react';
import TimeZonePicker from './components/TimeZonePicker';
import Clock from './components/Clock';
import ServerSentEventExample from './components/ServerSentEventExample';

function App() {
  const [autoCompleteValue, setAutoCompleteValue] = useState();

  const handleAutoCompleteValue = (value) => {
    setAutoCompleteValue(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TimeZonePicker handleChange={handleAutoCompleteValue} />
        {autoCompleteValue && <Clock timeZone={autoCompleteValue} />}
        <ServerSentEventExample />
      </header>
    </div>
  );
}

export default App;
