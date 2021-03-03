import '../stylesheets/App.scss';

function CharacterCard(props) {
  return (
    <li className="list">
      <img
        alt="Rick Sanchez"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
      <div className="bk container">
        <h4 className="bk name">Rick Sanchez</h4>
        <p className="bk species">Human</p>
      </div>
    </li>
  );
}

export default CharacterCard;
