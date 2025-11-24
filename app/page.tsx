import './styles/wordle.css';
import { GameProvider } from './components/GameProvider';
import { Game } from './components/Game';
import { Header } from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}
