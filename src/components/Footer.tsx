import logo_amnh from "../assets/logo_amnh.jpg";
import logo_barnard from "../assets/logo_barnard.jpg";
import logo_citadel from "../assets/logo_citadel.webp";
import logo_cloud from "../assets/logo_cloud.png";
import logo_GM from "../assets/logo_GM.jpg";
import logo_sa from "../assets/logo_sa.png";
import logo_smith from "../assets/logo_smith.webp";
import logo_seo from "../assets/logo_seo.png";
import logo_adobe from "../assets/logo_adobe.png";
import logo_csharp from "../assets/logo_csharp.png";
import logo_css from "../assets/logo_css.png";
import logo_java from "../assets/logo_java.jpg";
import logo_javascript from "../assets/logo_javascript.png";
import logo_html from "../assets/logo_html.png";
import logo_python from "../assets/logo_python.png";
import logo_react from "../assets/logo_react.png";
import logo_mongo from "../assets/logo_mongo.png";
import logo_unity from "../assets/logo_unity.png";

function Footer() {
  return (
    <>
      <div className="footer row">
        <div className="row">
          <div className="col aff">
            <h1>AFFILIATIONS</h1>
            <div className="row d-flex align-items-center row-cols-2 row-cols-md-4">
              <div className="col">
                <a href="https://www.amnh.org/" className="round noround">
                  <img src={logo_amnh} title="AMNH" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.seo-usa.org/"
                  className="round noround txt_logo_bg seo"
                >
                  <img src={logo_seo} title="seo" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.barnard.edu/" className="round noround">
                  <img src={logo_barnard} title="barnard" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.smithschool.org/"
                  className="round noround"
                >
                  <img src={logo_smith} title="smith" className="rounded" />
                </a>
              </div>
            </div>
            <div className="row d-flex align-items-center row-cols-2 row-cols-md-4">
              <div className="col">
                <a href="https://www.scholastic.com/" className="round noround">
                  <img src={logo_sa} title="sa" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.giantmachines.com/"
                  className="round noround gm"
                >
                  <img src={logo_GM} title="GM" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.cloud-kent.com/" className="round noround">
                  <img src={logo_cloud} title="cloud" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.citadel.com/"
                  className="round noround txt_logo_bg citadel"
                >
                  <img src={logo_citadel} title="citadel" className="rounded" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h1>SKILLS</h1>
            <div className="row d-flex align-items-center row-cols-2 row-cols-md-4">
              <div className="col">
                <a href="https://www.adobe.com/" className="round adobe">
                  <img src={logo_adobe} title="adobe" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.csharp.com/" className="round noround">
                  <img src={logo_csharp} title="csharp" className="rounded" />
                </a>
              </div>

              <div className="col">
                <a href="https://www.java.com/" className="round noround java">
                  <img src={logo_java} title="java" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.unity.com/" className="round noround">
                  <img src={logo_unity} title="unity" className="rounded" />
                </a>
              </div>
            </div>
            <div className="row d-flex align-items-center row-cols-2 row-cols-md-4">
              {/* the rest of the skill logos */}
              <div className="col">
                <a href="https://www.html.com/" className="round noround html">
                  <img src={logo_html} title="html" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.python.com/" className="round noround">
                  <img src={logo_python} title="python" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.react.com/" className="round noround">
                  <img src={logo_react} title="react" className="rounded" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.mongo.com/" className="round noround">
                  <img src={logo_mongo} title="mongo" className="rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
