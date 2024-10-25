import Header from './components/Header';
import HorseList from './components/HorseList';

function App() {
  return (
    <div className="App">
      <Header />
        <h1 className="text-xl px-4 py-2">Welcome to the Horse App!</h1>
        <p className="text-md px-4">Here you can view our horses and their details.</p>
        <br />

      <HorseList />
    </div>
  );
}

export default App;
