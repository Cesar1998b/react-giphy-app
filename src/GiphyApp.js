import React from "react";
import Home from "./pages/Home";
import GifCollection from "./components/GifCollection";
import Detail from "./pages/Detail";
import { Link,Route } from "wouter";
import { GifsContextProvider } from "./context/GifContexts";
import logo from "./logo.png"
import "./App.css";

function GiphyApp() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src={logo}/>
          </figure>
        </Link>
        <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={GifCollection} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default GiphyApp;
