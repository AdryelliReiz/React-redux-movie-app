import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { MovieDetails } from './components/MovieDetails';
import { PageNotFound } from './components/PageNotFound/MovieListing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container" >      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
