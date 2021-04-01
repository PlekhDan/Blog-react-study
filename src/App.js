import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {ContactUs} from "./components/ContactUs";
import {AboutUs} from "./components/AboutUs";
import {Main} from "./components/Main";
import {ArticlesList} from "./components/ArticlesList";
import {Article} from "./components/Article";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                {/*<Route exact path="/" render = {() => <Main/>} />*/}
                <Route exact path="/" render={() => <ArticlesList/>}/>
                <Route path="/about" render={() => <AboutUs/>}/>
                <Route path="/contact-us" render={() => <ContactUs/>}/>
                <Route path="/article" render={() => <Article/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
