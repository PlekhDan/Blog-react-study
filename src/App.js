import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Main} from "./components/Main";
import {ArticlesList} from "./components/ArticlesList";
import {Article} from "./components/Article";
import {AddArticle} from "./components/AddArticle";
import {RegUser} from "./components/RegUser";


function App() {
    return (
        <div className="App container">
            <BrowserRouter>
                <Menu/>
                {/*<Route exact path="/" render = {() => <Main/>} />*/}
                <Route exact path="/addArticle" render={() => <AddArticle/>}/>
                <Route exact path="/" render={() => <ArticlesList/>}/>
                <Route path="/article/:id" render={(props) => <Article {...props} />}/>
                <Route path="/reg" render={() => <RegUser/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
