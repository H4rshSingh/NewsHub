import { useState } from 'react';
import Navbar from './Component/Navbar';
import NewsSection from './Component/NewsSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [mode, setMode] = useState('dark')
  const [progress, setProgress] = useState(0)
  
  const apiKey = process.env.REACT_APP_NEWS_API
  // const apiKey = "3e1e7f90220243f19aaffab54dfba6c0";

  const pageSize = 9;

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <LoadingBar height={3} color='#f11946' progress={progress}/>
        <Routes>
          <Route exact path="/NewsHub" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} mode={mode} country="in" category="general" />} />

          <Route exact path="/NewsHub/" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} mode={mode} country="in" category="general" />} />

          <Route exact path="/business" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} mode={mode} country="in" category="business" />} />

          <Route exact path="/entertainment" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} mode={mode} country="in" category="entertainment" />} />

          <Route exact path="/general" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} mode={mode} country="in" category="general" />} />

          <Route exact path="/health" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} mode={mode} country="in" category="health" />} />

          <Route exact path="/science" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} mode={mode} country="in" category="science" />} />

          <Route exact path="/sports" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} mode={mode} country="in" category="sports" />} />

          <Route exact path="/technology" element={<NewsSection setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} mode={mode} country="in" category="technology" />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
