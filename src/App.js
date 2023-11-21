import logo from './logo.svg';
import './App.css';
import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import React, {useState , useEffect} from 'react';
import Event from './components/event';
function App() {
  const [events, setEvents] = useState([]);
 
  const calendarID = "@gmail.com";
  console.log("calendarId" , calendarID);
  const apiKey = "";
  const accessToken = "";
 
  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };
 
  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);
 
  return (
    <div className="App py-8 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">
        React App with Google Calendar API!
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} />
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
