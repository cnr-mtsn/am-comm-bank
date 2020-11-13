import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Loans from "./pages/Loans";
import Services from "./pages/Services";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const theme = {
  colors: {
    white: "#ffffff",
    blue: "#020864",
    darkGrey: "#6e6d6d",
    lightBlue: "#295da8",
    offWhite: "#eff1f3",
  },
  imageUrl: {
    logo:
      "https://www.amcommbank.com/assets/img/Americas-Community-Bank-logo.svg",
  },
};
const GlobalStyle = createGlobalStyle`
  body  {
    margin: 0;
    background: ${theme.colors.white};
    font-family: "Open Sans", "Helvetica", "Arial";
  }
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav navOpen={false} />
        <Switch>
          <Route path='/personal'>
            <Personal />
          </Route>
          <Route path='/business'>
            <Business />
          </Route>
          <Route path='/loans'>
            <Loans />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
