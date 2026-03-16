import TextAdv from "./components/TextAdv";
import Menu from "./components/Menu";
import Web from "./components/Web";

import { useEffect, useState } from "react";
import "./App.css";

import resume from "./assets/resume.jpg";
import Rafael_Resume from "./assets/Rafael_Resume.pdf";
import Footer from "./components/Footer";
import Game from "./components/Game";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [fade, setFade] = useState("fadeOff");

  /*
  keeps track of what the current page is
  by saving it to [currentPage] after it
  recieves an [item] from the child as a prop
  */
  const handleSelectItem = (item: string) => {
    setCurrentPage(item);
  };
  useEffect(() => {
    const timeout = setInterval(() => {
      setFade("fadeOn");
    }, 2000);
  }, [currentPage]);

  return (
    <>
      <div className="portfolio container-fluid">
        <div className="row">
          <Menu
            targetScale={0.45}
            currentPage={currentPage}
            onSelectItem={handleSelectItem}
          />
        </div>
        <div className="row page d-flex justify-content-center">
          {currentPage == "game" && <Game fade={fade} />}
          {currentPage == "web" && (
            <div
              className="web rounded row"
              style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
            >
              <Web />
            </div>
          )}
          {currentPage == "resume" && (
            <div
              className="resume row"
              style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
            >
              <a href={Rafael_Resume}>
                <img className="rounded" src={resume} width="100%" />
              </a>
            </div>
          )}
        </div>
        <div
          className="row justify-content-center footerdiv"
          style={
            currentPage === "landing"
              ? {
                  opacity: "1",
                  display: "flex",
                  transition: "opacity 0.5s, visibility 0s linear 0.5",
                }
              : {
                  opacity: "0",
                  visibility: "hidden",
                  animation: "hide 0.5s forwards",
                }
          }
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
