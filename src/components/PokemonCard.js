import {React, useState} from "react";
import { Card } from "semantic-ui-react";



function PokemonCard(pokemon) {


  const poke = pokemon.pokemon
  const [facingFront, setFacingFront] = useState(true)

  function handleClick() {
    setFacingFront((facingFront) => !facingFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={facingFront?poke.sprites.front:poke.sprites.back} alt={poke.name} />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
