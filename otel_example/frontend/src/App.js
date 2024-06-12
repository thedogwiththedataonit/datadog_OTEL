import logo from './logo.svg';
import './App.css';
import RollDiceButton from './components/RollDiceButton';
import React, { useState } from 'react';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: `${process.env.REACT_APP_APP_ID}`,
    clientToken: `${process.env.REACT_APP_CLIENT_TOKEN}`,
    site: 'datadoghq.com',
    service:'otel',
    env:'otel',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate:100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input',
    allowedTracingUrls: [
      {
        match: `http://localhost:5500`,
        propagatorTypes: ["tracecontext"],
    },
    ],
});
    
datadogRum.startSessionReplayRecording();

function App() {
  const [responseData, setResponseData] = useState([]);

  const addData = (data) => {
    //append data to data object
    setResponseData([...responseData, data]);
  }

  return (
    <div className="App">
      <RollDiceButton dataHandler={(data) => addData(data)}/>
      <p>On button click, this will make a request to the backend where the OTEL SDK is instrumented.
        <br></br>
        The OTEL collector also sits in the same network and the SDK shoots traces to port 4317 via OTLP using grpc.
        <br></br>
        The OTEL collector submits traces to Datadogs backend.
      </p>
      <div className="data-row-title">
          <h1>Dice</h1>
          <h1>Trace Id</h1>
        </div>
      <div className="data-container">
      {
        (responseData !== []) && responseData.map((data, index) => {
          return (
              <div className="data-row" key={index}>
                <p>{data.dice}</p>
                <p>{data.trace}</p>
              </div>
            
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
