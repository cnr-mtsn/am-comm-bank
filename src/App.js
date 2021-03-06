import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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
import ReportOfCondition from "./pages/ReportOfCondition";
import OnlineBanking from "./pages/OnlineBanking";
import Nav from "./components/Nav";

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
    overflow-x: "hidden",
    max-width: 100vw;
  }
`;

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Nav navOpen={false} />
      <div
        style={{
          position: "relative",
        }}
      >
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
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
            <Route path='/reportOfCondition'>
              <ReportOfCondition />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
