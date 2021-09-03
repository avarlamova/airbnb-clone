import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <header className="app--header"></header>
      <Header />
      <Home />
    </div>
  );
}

export default App;
