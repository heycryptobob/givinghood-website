import './App.scss';
import { Header } from './Header'
import { Hero } from './Hero';
import { Roadmap } from './Roadmap';
import { Tokenomics } from './Tokenomics';
import { Community } from './Community';
import Features from './Features';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}

export default App;
