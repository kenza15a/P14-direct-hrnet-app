
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './Pages/FormPage/FormPage';
import AllEmployeesPage from './Pages/AllEmployeesPage/AllEmployeesPage';
import NotAvailable from './Pages/NotAvailable/NotAvailable';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<FormPage />} />
          <Route path="/" element={<FormPage />} />
          <Route path="/allEmployees" element={<AllEmployeesPage />} />
          <Route path="/*" element={<NotAvailable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
