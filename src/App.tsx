import "./App.css";
import { ListHearts } from "../components/ListHeart";
import { BunchOfFlowers } from "../components/BunchOfFlowers";
import MusicTrackBar from "../components/MusicTrackBar";

function App() {
  return (
    <>
      <div>
        <div className="night"></div>
        <BunchOfFlowers />
        <ListHearts />
        <MusicTrackBar videoId="PykXcyfPUk4" title="Flores amarillas" />
      </div>
    </>
  );
}

export default App;
