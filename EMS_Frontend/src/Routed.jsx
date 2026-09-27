import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import EMS from './Pages/EMS.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import App from './App.jsx'
import Employees  from './Pages/Employees.jsx';

function Routed() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='ems' element={<EMS />} />
                        <Route path='employees' element={<Employees />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routed;