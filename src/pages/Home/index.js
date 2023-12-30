import React, {useState} from 'react'
import "rc-slider/assets/index.css";
import Scenery from "../../component/Scenary";
import LeftBox from "../../component/LeftBox";
import BottomBox from "../../component/BottomBox";
import useWindowDimensions from "../../hook/windowResize";

const Home = () => {
    const [scale, setScale] = useState(1);
    const { height, width } = useWindowDimensions();

    return (
      <React.Fragment>
      <div style={{ display: "flex" }}>
        <LeftBox scale={scale} handleScaleChange={setScale} />
        <Scenery scale={scale} width={width-240} height={height-95}/>
      </div>
      <BottomBox />
      </React.Fragment>
    );
  };
  
  export default Home;