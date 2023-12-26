import Header from "./ui/Header/Header"
import { Routes, Route } from 'react-router-dom';
import Login from "./ui/Login/Login";
import Register from "./ui/Register/Register";
import "./App.css";
import Mysite from "./ui/Mysite/Mysite";

const App = () => {
    return (
        <section>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Mysite />} />
            </Routes>
        </section>
    )
}
export default App