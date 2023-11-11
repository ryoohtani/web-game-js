import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');

  const changeDescription = () => {
    setDescription('クリック後の表示です。');
  }

  return (
    <div>
        <header>
          <ul>
            <li>リスト</li>
            <li>フォーム</li>
          </ul>
        </header>
        <hr/>
      { description }
      ゼロから始めるreact
        <List title="取り扱い言語一覧" />
        <Form />
        <button onClick = {changeDescription}>ボタン</button>
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
