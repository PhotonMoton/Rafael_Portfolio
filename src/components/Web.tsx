import CLOUD from "../assets/CLOUD.jpg";
import SMITH from "../assets/SMITH.png";

function Web() {
  return (
    <>
      <div>
        <a href="https://www.cloud-kent.com/">
          <img src={CLOUD} title="Cloud's Site" className="rounded" />
        </a>
        <br />
        <br />
        <a href="https://www.smithschool.org/spring-showcase">
          <img src={SMITH} title="The Smith School Site" className="rounded" />
        </a>
      </div>
    </>
  );
}

export default Web;
