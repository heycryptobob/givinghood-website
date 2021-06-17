import './App.scss';
import { Hero } from './Hero';
import { Roadmap } from './Roadmap';
import { Tokenomics } from './Tokenomics';
import { Community } from './Community';
import { Features } from './Features';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}