import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {
  const [tab, setTab] = useState(`list`); //initialState
  const [langs, setLangs] = useState([]); //initialState

  useEffect(() => {
    console.log(`App.jsx:useEffect`);
    fetchLanguages();
  }, []); //inputs

  async function fetchLanguages() {
    const languages = await getLanguages();
    setLangs(languages);
  }

  function addLang(lang) {
    setLangs([...langs, lang]);
    setTab(`list`);
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab(`list`)}>リスト</li>
          <li onClick={() => setTab(`form`)}>フォーム</li>
        </ul>
      </header>
      <hr />

      {tab === `list` ? <List langs={langs} /> : <Form onAddlang={addLang} />}
    </div>
  );
}

export default App;
