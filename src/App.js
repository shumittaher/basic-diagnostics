import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ProductProvider from './contexts/ProductProvider';
import DetailCard from './Components/DetailCard/DetailCard';
import Privateroute from './Components/PrivateRoute/PrivateRoute';
import ServicesBig from './Components/ServicesBig/ServicesBig';
import Footer from './Components/Footer/Footer';
import Doctors from './Components/Doctors/Doctors';
import Testimonials from './Components/Tesimonials/Testimonials';

function App() {
  return (
    <div className="App">

      <ProductProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/services">
                <ServicesBig></ServicesBig>
              </Route>

              <Route path="/docs">
                <Doctors></Doctors>
              </Route>

              <Route path="/about">
                <Testimonials></Testimonials>
              </Route>


              <Privateroute path="/tests/:testId">
                <DetailCard></DetailCard>
              </Privateroute>
            </Switch>
            
            <Footer></Footer>

          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>

    </div>
  );
}

export default App;
