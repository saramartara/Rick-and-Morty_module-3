import '../stylesheets/App.scss';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  console.log(props);
  return (
    <section>
      <ul className="listContainer">
        <CharacterCard />
      </ul>
    </section>
  );
}

export default CharacterList;
