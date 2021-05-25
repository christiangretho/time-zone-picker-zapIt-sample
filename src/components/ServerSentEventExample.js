import { useEffect } from 'react';

export default function ServerSentEventExample() {
  useEffect(() => {
    const sse = new EventSource('http://localhost:8080/user/sse', {
      withCredentials: false,
    });
    function getRealtimeData(data) {
      // process the data here,
      // then pass it to state to be rendered
      console.log(data);
    }
    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    sse.onerror = () => {
      // error log here

      sse.close();
    };
    return () => {
      sse.close();
    };
  });
  return <div style={{ width: 300 }}></div>;
}
