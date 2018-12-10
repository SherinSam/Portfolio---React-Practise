import React from 'react'

const Main = (props) => {
    return(
        <div class="project-card">    
            <h1 class="sub-head">{props.name}</h1>
            <p>{props.description}</p>
            <a class="link" href={props.link}>Deployed Site</a>    
        </div>
    )
}

export default Main;