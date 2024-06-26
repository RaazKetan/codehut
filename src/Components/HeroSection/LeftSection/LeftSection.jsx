import { Link } from "react-router-dom";
import classes from "./LeftSection.module.css";

const LeftSection = () => {
  
    return (
        <div className = {classes.content}>
            <h4>Your Best Choice</h4>
                    <h1>
                    Elevate Your Coding {'</>'} <br/> Journey, <br/> One Challenge at a Time
                    </h1>
                    <p>Monitor your performance and progress across diffrent coding platforms
                    </p>
                    <Link to="/gitcalender">
                    <button> 
                    Get Started
                    
                    </button>
                    </Link>
        </div>
    )
};
export default LeftSection;