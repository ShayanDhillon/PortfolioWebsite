import React from "react";
import '../../App.css'
import './Home.css'
import { Button } from "../Button";

function Home() {

    const arr = ["Assembly (Arm v7)", "C", "Express.js", "Django", "FastAPI", "HTML/CSS/SASS", "Java", "JavaScript", "Next.js", "Node.js", "Python", "R", "ReactJS", "SQL", "TypeScript", "VBA"]

    

    return (
        <div className="hero-container" id = 'home'>
            
            <div class="area">
            
                <div className="hero-text">
                    <h1>Hi, my name is <span>Shayan Dhillon</span></h1>
                    <p>Currently in my 3rd year, studying Computer Science at Wilfrid Laurier University.
                    </p>
                    <p2>
                        Some programming languages I have experience using include:
                    </p2>

                    <div className="hero-code">

                        {arr.map((item, index) => (
                            index < arr.length - 1 && <code key={index}>{item},</code>
                        ))}
                        <code>{arr[arr.length - 1]}</code>
                        
                        
                    </div>

                    <div className = 'hero-btn'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' to={'mailto:shayandhillon@gmail.com'}> 
                            <i class="fa-solid fa-envelope"/>
                            Contact Me
                        </Button>
                    </div>
                    

                    
                </div>

                
            

            
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            

        </div>
    );
}

export default Home;