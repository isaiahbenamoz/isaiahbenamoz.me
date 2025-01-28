import "./App.css";
import {
  CHAPTER_50_VERSE_6,
  CHAPTER_53_VERSE_5,
  CHAPTER_53_VERSE_8,
  CHAPTER_53_VERSE_12,
  CHAPTER_56_VERSE_4,
} from "./Isaiah";
import React from "react";

const VERSES = [
  CHAPTER_50_VERSE_6,
  CHAPTER_53_VERSE_5,
  CHAPTER_53_VERSE_8,
  CHAPTER_53_VERSE_12,
  CHAPTER_56_VERSE_4,
];

const ANIMATION_CLASSES = ["pulse10", "pulse11", "pulse12", "pulse13"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Array.from({ length: 100 }).map(() => {
          const randomIndex = Math.floor(Math.random() * VERSES.length);
          return (
            <div className={ANIMATION_CLASSES[randomIndex]}>
              {VERSES[randomIndex]}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
