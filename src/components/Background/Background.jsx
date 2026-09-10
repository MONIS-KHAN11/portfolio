import "./background.css";
import Glow from "./Glow";
import CursorGlow from "./CursorGlow";

function Background({ children, wallpaper }) {
  return (
    <main
      className="background"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="overlay"></div>
      <Glow />
      <CursorGlow />
      <div className="content">{children}</div>
    </main>
  );
}

export default Background;
