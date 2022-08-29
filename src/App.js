import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechDash_1 from './pages/TechDash_1';
import Gouvernance from './pages/Gouvernance';
import TechDash_2 from './pages/TechDash_2';

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage/>} />
                <Route exact path='/techdash1' element={<TechDash_1/>} />
                <Route exact path='/techdash2' element={<TechDash_2/>} />
                <Route exact path='/gouvernance' element={<Gouvernance/>} />
                <Route exact path='/home' element={<HomePage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
            </Routes>  
        </Router>
    )
}

export default App;
