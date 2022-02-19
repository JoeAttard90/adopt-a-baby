
import './app.css'
import Title from "./components/atoms/Title/Title";
import LargeBabies from "./components/atoms/LargeBaby/LargeBaby";
import ParticlesBackground from "./effects/ParticlesBackground";


function App() {
  return (
    <div class='page-container'>
      <ParticlesBackground class='particles-background'/>
      <Title />
      <LargeBabies />
      
    </div>

  );
}

export default App;
