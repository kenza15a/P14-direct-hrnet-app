
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './Pages/FormPage/FormPage';
import AllEmployeesPage from './Pages/AllEmployeesPage/AllEmployeesPage';
import NotAvailable from './Pages/NotAvailable/NotAvailable';
import { FormDataProvider } from './context/EmployeeDataProvider';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading'
//import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';



//
//
//
//
//
//
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  return (
    <>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>HR NET</title>
          </Helmet>
        </div>
      </HelmetProvider>
      <BrowserRouter>
        <FormDataProvider>


          {isLoading ? (
            <div className='loading'>
              <Loading />
            </div>

          ) : (
            <Routes>
              <Route path="/allEmployees" element={<AllEmployeesPage />} />
              <Route index element={<FormPage />} />
              <Route path="/" element={<FormPage />} />
              <Route path="/*" element={<NotAvailable />} />
            </Routes>)}
        </FormDataProvider>
      </BrowserRouter>
    </>


  );
}

export default App;
