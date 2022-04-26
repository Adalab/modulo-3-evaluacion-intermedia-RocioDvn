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
          "Pivot! Pivot! Pivot! Pivot! Pivot!" - Ross
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "Joey doesn't share food!" - Joey
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "But they don't know that we know they know we know!"- Phoebe
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "I'm not so good with the advice. Can I interest you in a sarcastic
          comment?" - Chandler
        </label>
      </li>
      <li>
        <label className='phrases_label'>"I got off the plane." - Rachel</label>
      </li>
      <li>
        <label className='phrases_label'>"How you doin?" - Joey</label>
      </li>
      <li>
        <label className='phrases_label'>"We were on a break!" - Ross</label>
      </li>
      <li>
        <label className='phrases_label'>
          "I grew up in a house with Monica, okay. If you didn't eat fast, you
          didn't eat." - Ross
        </label>
      </li>
      <li>
        <label className='phrases_label'>"Unagi."- Ross</label>
      </li>
      <li>
        <label className='phrases_label'>
          "Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly
          cat, it's not your fault." - Phoebe
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "Just so you know, it's not that common, it doesn't happen to every
          guy, and it is a big deal!" - Rachel
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "Here come the meat sweats." - Joey
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "Look at me! I'm Chandler! Could I be wearing any more clothes?!" -
          Joey
        </label>
      </li>
      <li>
        <label className='phrases_label'>
          "Phoebe. That's P, as in Phoebe, H as in hoebe, O as in oebe, E as in
          ebe, B as in bebe, and E as in 'Ello there mate." - Phoebe
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
