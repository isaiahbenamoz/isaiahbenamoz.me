import "./App.css";
import {
  CHAPTER_50_VERSE_6,
  CHAPTER_53_VERSE_5,
  CHAPTER_53_VERSE_8,
  CHAPTER_53_VERSE_12,
  CHAPTER_56_VERSE_4,
} from "./Isaiah";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pulse">{CHAPTER_50_VERSE_6}</div>
        <div className="pulse">{CHAPTER_53_VERSE_5}</div>
        <div className="pulse">{CHAPTER_53_VERSE_8}</div>
        <div className="pulse">{CHAPTER_53_VERSE_12}</div>
        <div className="pulse">{CHAPTER_56_VERSE_4}</div>
      </header>
    </div>
  );
}

export default App;
