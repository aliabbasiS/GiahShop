
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'

import routes from './Router/route';

function App() {


  return (
    <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Navigate to="/main" />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
