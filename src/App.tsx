import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Licenses from "./Components/Licenses/Licenses";
import SignIn from "./Components/SignIn/SignIn";
import Press from "./Components/Press/Press";
import CodeBlog from "./Components/CodeBlog/CodeBlog";
import Careers from "./Components/Careers/Careers";
import Legal from "./Components/Legal/Legal";
import Security from "./Components/Security/Security";
import Status from "./Components/Status/Status";
import Support from "./Components/Support/Support";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/press" element={<Press />} />
          <Route path="/codeBlog" element={<CodeBlog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/security" element={<Security />} />
          <Route path="/status" element={<Status />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
