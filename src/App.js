import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import PostStudent from './components/forms/PostStudent';
import {Routes, Route} from "react-router-dom";
import StudentDetail from './components/StudentDetail';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/poststudent' element={<PostStudent />} />
        <Route path='/student/:id' element={<StudentDetail />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;