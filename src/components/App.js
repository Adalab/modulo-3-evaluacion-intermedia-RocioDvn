import '../styles/App.scss';
import phrasesList from '../data/friends.json';
import { useState } from 'react';

function App() {
  //console.log(friends);
  const [data, setData] = useState(phrasesList);
  const [newPhrases, setNewPhrases] = useState({
    quote: '',
    character: '',
  });

  const handleNewPhrases = (ev) => {
    setNewPhrases({
      ...newPhrases,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrases]);
    setNewPhrases({
      quote: '',
      character: '',
    });
  };

  const htmlData = data.map((phrases, i) => (
    <>
      <li className='phrases_item' key={i}>
        <label className='phrases_label'>
          {phrases.quote} {phrases.character}
        </label>
      </li>
    </>
  ));

  return (
    <>
      <header>
        <h1 className='tittle'>Frases de Friends</h1>
      </header>

      <main>
        <ul className='phrases_list'> {htmlData}</ul>
        <form>
          <h2>Añadir una nueva frase</h2>
          Frase
          <input
            type='text'
            id='character'
            value={newPhrases.character}
            onChange={handleNewPhrases}
          ></input>
          Personaje
          <input
            type='text'
            id='quote'
            value={newPhrases.quote}
            onChange={handleNewPhrases}
          ></input>
        </form>
        <button onClick={handleClick}>Añadir una nueva frase</button>
      </main>
    </>
  );
}

export default App;
