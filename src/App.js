import './app.css'
import Title from "./components/Title/Title";
import MainContent from "./components/MainContent/MainContent";
import CustomFooter from './components/Footer/CustomFooter';
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
        <div className='page-container'>
        <div className='content-wrap'>
          <ParticlesBackground class="particle-bkg" />
          <Title />
          <div class="container">
            <MainContent />
          </div>

        </div>
        <CustomFooter />
        </div>
      );
    }
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Title />
          <div class="container">
            <MainContent />
          </div>

        </div>
        <CustomFooter />
        </div>
  
    );
  }
}

export default App;