import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, reset } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.myFavorites);
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const resetButton = () => {
        dispatch(reset())
    }

    return(
        <>
            <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
            <button onClick={reset}>Reset</button>
                {favorites.map(({id, name, species, gender, image}) => {
                    return (
                        <Card 
                            key={id}
                            id={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image}
                        />
                    )
                })}
            </>
    )
}

export default Favorites;