import "./App.css";
import Header from "./components/header/Header";
import Poster from "./components/poster/Poster";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Poster />
      <Search />
    </div>
  );
}

export default App;
