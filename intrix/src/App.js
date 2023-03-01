import './App.css';
import Layout from './components/Layouts';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/'element={
        <Layout>
          <Dashboard/>
        </Layout>
      }/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
