import React, { useState, useEffect, useCallback } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {

  let [randomInstrument, setRandomInstrument] = useState('');
  let [randomBpm, setRandomBpm] = useState('');
  let [randomProgression, setRandomProgression] = useState('');

  const fetchInstrument = useCallback( async () => {
    const random = Math.floor(Math.random() * 10);
    const url = 'https://song-idea-generator-api.herokuapp.com/api/instruments';
    const requestOptions = {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
      redirect: 'follow'
    };
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    setRandomInstrument(json[random].instrument);
  }, [])

  useEffect(() => {
    fetchInstrument()
  }, [fetchInstrument])

  const fetchBpm = useCallback( async () => {
    const random = Math.floor(Math.random() * 10);
    const url = 'https://song-idea-generator-api.herokuapp.com/api/bpms';
    const requestOptions = {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
      redirect: 'follow'
    };
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    setRandomBpm(json[random].bpm);
  }, [])

  useEffect(() => {
    fetchBpm()
  }, [fetchBpm])

  const fetchProgression = useCallback( async () => {
    const random = Math.floor(Math.random() * 10);
    const url = 'https://song-idea-generator-api.herokuapp.com/api/progressions';
    const requestOptions = {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
      redirect: 'follow'
    };
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    setRandomProgression(json[random].progression.join(', '));
  }, [])

  useEffect(() => {
    fetchProgression()
  }, [fetchProgression])

  return (
    <div>
      <div className="App">
        <div className="Instrument">Instrument
          <div className="RandomInstrument" onClick={fetchInstrument}>
            {randomInstrument}
          </div>
        </div>
        <div className="Bpm">BPM
          <div className="RandomBpm" onClick={fetchBpm}>
            {randomBpm}
          </div>
        </div>
        <div className="Progression">Progression
          <div className="RandomProgression" onClick={fetchProgression}>
            {randomProgression}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
