import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ProductProvider from './contexts/ProductProvider';

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

              <Route exact path="/home">
                <Home></Home>
              </Route>

              <Route exact path="/login">
                <Login></Login>
              </Route>

            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>

    </div>
  );
}

export default App;
