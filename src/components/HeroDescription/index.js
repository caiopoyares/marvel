import React, { useState, useEffect } from "react";
import axios from "axios";

import { CharactersContainer } from "./style";

const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

const HeroDescription = ({ match }) => {

    const [heroInfo, setHeroInfo] = useState({});
    
    useEffect(() => {
        const heroId = match.params.heroId;
        const endpoint = `https://gateway.marvel.com:443/v1/public/characters?id=${heroId}&apikey=${apiKey}`;
        axios(endpoint)
            .then(response => setHeroInfo(response.data.data.results[0]) || console.log(response.data.data.results[0]))
    }, []);

    const { thumbnail } = heroInfo;

    return (
        <CharactersContainer>
            {thumbnail && 
                <div style={{display: "flex"}}>
                    <div className="img-container" style={{flexBasis: "50vw"}}>
                    {thumbnail && <img src={`${thumbnail.path}.${thumbnail.extension}`} />}
                    </div>
                    <div className="hero-description">

                    </div>
                </div>
            }
            
        </CharactersContainer>
        
    )
}

export default HeroDescription;