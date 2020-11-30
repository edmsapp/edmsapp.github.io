import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import MainPage from "pages/index.js";
import AboutPage from "components/pages/AboutUs.jsx";
import BlogPage from "components/pages/BlogIndex.js";
import PricingPage from "components/pages/Pricing.js";
import ContactPage from "components/pages/ContactUs.js";
import LoginPage from "components/pages/Login.js";
import SignupPage from "components/pages/Signup.js";
import PrivacyPage from "components/pages/PrivacyPolicy.js";
import TermsPage from "components/pages/TermsOfService.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
      </Switch>
    </Router>
  );
}

