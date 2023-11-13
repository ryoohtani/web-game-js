import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {

  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log('App.js:useEffect');
    fatchLanguages();
  }, [langs])

  const fatchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    // タブ切り替え
    setTab('list');
  }

  return (
    <div>
        <header>
          <ul>
            <li onClick={() => setTab('list')}>リスト</li>
            <li onClick={() => setTab('form')}>フォーム</li>
          </ul>
        </header>
        <hr/>

      {
        tab === 'list' ? <List langs = {langs}/>:<Form onAddLang = {addLang} />
      }

    </div>    
  );
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
