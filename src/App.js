import logo from './logo.svg';
import tsIcon from  './img/KFC.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href={"http://www.kfc.com.cn/kfccda/index.aspx"}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        　<img src={tsIcon} alt={"Image Not Found"}/></a>
      </header>
    </div>
  );
}

export default App;
