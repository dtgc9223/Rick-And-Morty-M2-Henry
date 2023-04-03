export default function SearchBar(props) {
    return (
       <div>
          <input type='search' />
          <button onClick={(characterID) => window.alert(characterID)}>Agregar</button>
       </div>
    );
 }
 