import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HeroSection} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
