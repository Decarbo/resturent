import {React,useState} from "react";
import "../CSS/sidePannel.css"
import { Link} from "react-router-dom"


const SidePannel = () => 
  {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
      setIsVisible(false); // Set visibility to false when clicked
    };

    return(

      <>
        {isVisible && 
        (
          <>
            <div className="side-panel"></div>
      
      
            <div className="circle-menu">
            <div className="circle-button" >
        
            <span>
              <Link to="/menu" onClick={handleClick}>
              MENU
              </Link>
        
            </span>
        
            </div>
            </div>
          </>
        )}
     
      </>
    );
  }


export default SidePannel;
