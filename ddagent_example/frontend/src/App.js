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
    trackingConsent: "not-granted", //not-granted unless user consents
    allowedTracingUrls: [
      (url) => url.startsWith("http://localhost:5500")
    ],
});
    

function App() {
  const [responseData, setResponseData] = useState([]);

  const addData = (data) => {
    //append data to data object
    setResponseData([...responseData, data]);
  }

  return (
    <div className="App">
      <header style={{backgroundColor:"gray", width: "100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        
        <p1 style={{"color":"white"}}>Datadog Agent Example</p1>
        <p2 style={{"color":"white"}}>Do you grant Datadog permission to capture frontend data?</p2>
        <div style={{display:"flex", flexDirection:"row"}}>
          <button 
            onClick={() => {datadogRum.setTrackingConsent("granted"); alert("You have granted permission to Datadog to capture frontend data.")}}
            style={{"margin":"10px", "padding":"10px", "backgroundColor":"green", "color":"white"}}>Yes</button>
          <button 
            onClick={() => datadogRum.setTrackingConsent("not-granted")}
            style={{"margin":"10px", "padding":"10px", "backgroundColor":"red", "color":"white"}}>No</button>
        </div>
        </header>
      
      <RollDiceButton dataHandler={(data) => addData(data)}/>
      <p>On button click, this will make a request to the backend where the Datadog agent is.
        <br></br>
        The Datadog agent also sits in the same network and the tracer shoots traces to port 8126.
        <br></br>
        The Datadog agent submits traces to Datadogs backend.
      </p>
      
      <div className="data-row-title">
          <h1>Dice</h1>
          <h1>Trace Id</h1>
        </div>
      <div className="data-container">
      {
        (responseData) && responseData.map((data, index) => {
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