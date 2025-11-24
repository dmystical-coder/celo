import './styles/wordle.css';
import { GameProvider } from './components/GameProvider';
import { Game } from './components/Game';
import { Header } from './components/Header';
import { Stats } from './components/Stats';

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}
