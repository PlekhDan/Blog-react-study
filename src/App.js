import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu() {
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">ГЛАВНАЯ</NavLink>
            <NavLink className="nav-link" to="/about">О НАС</NavLink>
            <NavLink className="nav-link" to="/contact-us">КОНТАКТЫ</NavLink>
        </nav>
    );
}

function Main() {
    return(
        <div>
            <h4 className="mb-5">Главная страница</h4>
            <div className="container">
                <img src="..." className="img-fluid img-thumbnail bg-light p-5" alt="изображение" />
            </div>
        </div>
    );
}

function AboutUs() {
    return(
        <div>
            <h4 className="mb-5">О нас</h4>
            <div className="container text-start">
                <p>Телефон: +7 (800) 700-89-89</p>
                <p>E-mail: tel800@mail.ru</p>
                <p>Время работы: ПН-ПТ: 09:00-18:00</p>
            </div>
        </div>
    );
}

function ContactUs() {
    return(
        <div>
            <h4 className="mb-5">Обратная связь</h4>
            <div className = "container">
                <form action="">
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Route exact="/" path="/" render = {() => <Main/>} />
            <Route path="/about" render = {() => <AboutUs/>} />
            <Route path="/contact-us" render = {() => <ContactUs/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
