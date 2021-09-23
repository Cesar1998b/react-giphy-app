import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import { Link,Route } from "wouter";
import { GifsContextProvider } from "./context/GifContexts";
import logo from "./logo.png"
import "./App.css";

function App() {
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
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
