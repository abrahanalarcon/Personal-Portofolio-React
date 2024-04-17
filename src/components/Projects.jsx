import { useState} from "react"
import Cards from './Cards';
import { db } from "../data/db"

function Projects(){


    const [data] = useState(db)
   return(
    <div className="contenedor" id="portafolio">
      <h1 className="centrar-texto">Interesting<span className="logo__bold"> Projects</span></h1>
       <div className="grid-pages">
        {data.map((cards) => (
              <Cards
                 key={cards.id} 
                 cards={cards}
              
              />
        
        ))}
         
       </div>
    </div>

      );



}

export default Projects;