import React from 'react'
import CardItem from '../CardItem'
import './Projects.css'

function Projects() {
  return (
    <div className='cards' id = 'projects'>

        <h1>Projects</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem 
                      src="port.png"
                      text="Portfolio Website"
                      label= "ReactJS, HTML/CSS"
                      path= "https://github.com/ShayanDhillon/PortfolioWebsite"
                    />
                    
                    <CardItem 
                      src="SDGP.png"
                      text="Student Database Grade App"
                      label= "VBA, SQL"
                      path= "https://github.com/ShayanDhillon/Student-Database-Grade-Application"
                    />
                    <CardItem 
                      src="TOD.png"
                      text="Tower Of Darkness"
                      label= "Java"
                      path= "https://github.com/ShayanDhillon/TowerOfDarkness"
                    />
                    <CardItem 
                      src="Disc.png"
                      text="Discord Music Bot"
                      label= "Python"
                      path= "https://github.com/ShayanDhillon/ReplitDiscordMusic"
                    />
                    
                    
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
