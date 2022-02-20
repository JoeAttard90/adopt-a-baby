
import './app.css'
import Title from "./components/atoms/Title/Title";
import Babies from "./components/atoms/Babies/Babies";
import ParticlesBackground from "./effects/ParticlesBackground";


function App() {
  return (
    <>
      <ParticlesBackground class="particle-bkg" />
      <Title />
      <div class="container">
        <Babies />
      </div>
      
    </>

  );
}

export default App;
