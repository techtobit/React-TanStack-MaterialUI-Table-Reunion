import { useEffect, useState } from 'react'
import './App.css'
import Example from './Table'
function App() {

  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPhotos(data);
  //     });
  // }, []);

  return (
    <>
    <Example/>
    </>
  )
}

export default App
