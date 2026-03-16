/*
Menu component that sends the selected page to the parent.
It receives potential transition positions and the current page as a prop.
*/

import { useState } from "react";
import { CSSProperties } from "react";
import "./Menu.css";
import Rafael from "../assets/Rafael.png";
import ICON_WEB from "../assets/ICON_WEB.png";
import ICON_GAME from "../assets/ICON_GAME.png";
import ICON_RESUME from "../assets/ICON_RESUME.png";

interface Props {
  targetScale: number;
  currentPage: string;
  onSelectItem: (item: string) => void;
}

function Menu(props: Props) {
  const { targetScale, currentPage, onSelectItem } = props;
  const [isShrinking, setIsShrinking] = useState<boolean>(false);

  //css style for the size and position of this component after clicking on it the first time
  const menuStyles: CSSProperties = {
    height: `calc(20vh)`,
    transform: `translateY(calc(-20vh/2)) scale(${targetScale})`,
  };

  const imageStyle: CSSProperties = {
    transform: "scale(0)",
    height: "0",
  };

  //trigger transition animation
  const handleShrink = () => {
    setIsShrinking(true);
  };

  /*
    creates an list of menu items that when clicked will send the selected item as a prop
    to the parent and set it as current page and will shrink and reposition the menu 
    according to the position props from the parent.
    */
  return (
    <>
      <div
        className="creator container-fluid"
        style={isShrinking ? { height: "25vh" } : {}}
      >
        <div className="row">
          <div className="col-sm-12">
            <a href={process.env.PUBLIC_URL}>
              <h3 className="text-center">RAFAEL MOTA</h3>
            </a>
          </div>
          <div
            className="selfie col-sm-12"
            style={isShrinking ? imageStyle : {}}
          >
            <a href="https://www.linkedin.com/in/rafael-mota-1630a6247/">
              <img src={Rafael} />
            </a>
          </div>
        </div>
        <div
          className="row"
          style={isShrinking ? menuStyles : {}}
          onClick={handleShrink}
        >
          <ul className="nav justify-content-center">
            <li
              className={currentPage === "web" ? "nav-link active" : "nav-link"}
              onClick={() => {
                onSelectItem("web");
                console.log(currentPage);
              }}
            >
              <a href="#">
                <img src={ICON_WEB} />
              </a>
            </li>
            <li
              className={
                currentPage === "game" ? "nav-link active" : "nav-link"
              }
              onClick={() => {
                onSelectItem("game");
                console.log(currentPage);
              }}
            >
              <a href="#">
                <img src={ICON_GAME} />
              </a>
            </li>
            <li
              className={
                currentPage === "resume" ? "nav-link active" : "nav-link"
              }
              onClick={() => {
                onSelectItem("resume");
                console.log(currentPage);
              }}
            >
              <a href="#">
                <img src={ICON_RESUME} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
