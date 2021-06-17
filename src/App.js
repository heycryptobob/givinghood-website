import './App.scss';
import { Header } from './Header'
import { Hero } from './Hero';
import { Roadmap } from './Roadmap';
import { Tokenomics } from './Tokenomics';
import { Community } from './Community';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}

export default App;
