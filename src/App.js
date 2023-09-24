
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './Pages/FormPage/FormPage';
import AllEmployeesPage from './Pages/AllEmployeesPage/AllEmployeesPage';
import NotAvailable from './Pages/NotAvailable/NotAvailable';
import { FormDataProvider } from './context/EmployeeDataProvider';

function App() {
  return (

    <>
      <BrowserRouter>
        <FormDataProvider>
          <Routes>
            <Route index element={<FormPage />} />
            <Route path="/" element={<FormPage />} />
            <Route path="/allEmployees" element={<AllEmployeesPage />} />
            <Route path="/*" element={<NotAvailable />} />
          </Routes>
        </FormDataProvider>
      </BrowserRouter>
    </>


  );
}

export default App;
