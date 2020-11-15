import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Checks from "./pages/Checks";
import Location from "./pages/Location";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SiteMap from "./pages/SiteMap";
import ReportOfCondition from "./pages/ReportOfCondition";
import OnlineBanking from "./pages/OnlineBanking";
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
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/checks'>
            <Checks />
          </Route>
          <Route path='/onlineBanking'>
            <OnlineBanking />
          </Route>
          <Route path='/business'>
            <Business />
          </Route>
          <Route path='/loans'>
            <Loans />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/privacyPolicy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/siteMap'>
            <SiteMap />
          </Route>
          <Route path='/reportOfCondition'>
            <ReportOfCondition />
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
