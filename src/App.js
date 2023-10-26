import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import PostStudent from './components/forms/PostStudent';
import {Routes, Route} from "react-router-dom";
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/poststudent' element={<PostStudent />} />
        <Route path='/student/:id' element={<StudentDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;