import TextAdv from "./TextAdv";
import wta from "../assets/wta.png";
interface Props {
  fade: string;
}
function Game(props: Props) {
  const { fade } = props;
  return (
    <>
      <div className="game col">
        <a
          href="https://whosthatasciimon-rmota29619.b4a.run/#"
          className="wta"
          style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
        >
          <img className="rounded" src={wta} width="100%" />
        </a>
        <br />
        <br />
        <div
          className="tacomp rounded row"
          style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
        >
          <TextAdv />
        </div>
        <br />

        <div
          className="deeproots rounded row"
          style={fade == "fadeOn" ? { opacity: "1" } : { opacity: "0" }}
        >
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/bLgpIMXroJE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Game;
