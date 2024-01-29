import './app.css';
import Uporedba from './pages/Uporedba'
import Kontakt from './pages/Kontakt'
import Servis from './pages/Servis'
import Pocetna from './pages/Pocetna'
import Header from './pages/Header'
import Telefoni from './pages/Telefoni'
import PratecaOprema from './pages/PratecaOprema'
import Phone from './pages/Phone'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ServisMarka from './pages/servis/ServisMarka';
import ServisPhone from './pages/servis/ServisPhone';
import OpremaSelected from './pages/OpremaSelected';


function App() {

  return (
    <div className="app">
      <Router>

        <Header
        />
  
        <Switch>
         
          <Route path='/servis-marka/servis-phone/'>
            <ServisPhone />
            <Footer />
           </Route>
          
          
          <Route exact path='/'>
            <Pocetna />
            <Footer />
          </Route>

          <Route path='/telefoni'>
            <Telefoni />
            <Footer />
          </Route>

          <Route strict path='/telefon/'>
            <Phone />
            <Footer />
          </Route>

          <Route path='/prateca-oprema'>
            <PratecaOprema />
            <Footer />
          </Route>

          <Route path='/oprema'>
            <OpremaSelected />
            <Footer />
          </Route>

          <Route path='/servis-marka/'>
            <ServisMarka/>
            <Footer />
          </Route>

          <Route exact path='/servis'>
            <Servis />
            <Footer />
          </Route>

          

          <Route exact path='/uporedba'>
            <Uporedba />
            <Footer />
          </Route>

          <Route exact path='/kontakt'>
            <Kontakt />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
