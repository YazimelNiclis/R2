import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Header />
        <MainPage />
        <Footer />
      </main>
    </>
  );
}

export default App;
