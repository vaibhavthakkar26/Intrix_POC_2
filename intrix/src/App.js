import Layout from './components/Layouts';
import Login from './components/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import DataProfile from './components/DataProfile';
import ScheduleList from './components/ScheduleList';
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
      <Route path='/Data-profile'element={
        <Layout>
          <DataProfile/>
        </Layout>
      }/>
      <Route path='/schedule-list'element={
        <Layout>
          <ScheduleList/>
        </Layout>
      }/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
