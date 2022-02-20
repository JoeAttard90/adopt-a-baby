
import './app.css'
import Title from "./components/atoms/Title/Title";
import Babies from "./components/atoms/Babies/Babies";
import ParticlesBackground from "./effects/ParticlesBackground";
import { isMobile } from "react-device-detect";
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const mobile = isMobile
    this.setState({
      mobile: mobile,
      isLoaded: true,
    });
  }

  render() {
    const {error, isLoaded, mobile} = this.state;
    console.log("is it mobile: ", isMobile)
    if (error) {
      return <>Error</>;
    } else if (!isLoaded) {
      return <>Loading...</>;
    } else if (!mobile) {
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
    return (
      <>
        <Title />
        <div class="container">
          <Babies />
        </div>
      </>
  
    );
  }
}

export default App;
