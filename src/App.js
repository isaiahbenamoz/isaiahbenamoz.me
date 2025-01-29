import "./App.css";
import {
  CHAPTER_26_VERSE_17,
  CHAPTER_26_VERSE_18,
  CHAPTER_50_VERSE_6,
  CHAPTER_53_VERSE_5,
  CHAPTER_53_VERSE_8,
  CHAPTER_53_VERSE_12,
  CHAPTER_56_VERSE_3,
} from "./Isaiah";
import React from "react";

const VERSES = [
  CHAPTER_26_VERSE_17,
  CHAPTER_26_VERSE_18,
  CHAPTER_50_VERSE_6,
  CHAPTER_53_VERSE_5,
  CHAPTER_53_VERSE_8,
  CHAPTER_53_VERSE_12,
  CHAPTER_56_VERSE_3,
];

const ANIMATION_CLASSES = ["pulse10", "pulse11", "pulse12", "pulse13"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Array.from({ length: 100 }).map(() => {
          const verseIndex = Math.floor(Math.random() * VERSES.length);
          const animationIndex = Math.floor(
            Math.random() * ANIMATION_CLASSES.length
          );
          return (
            <div
              className={ANIMATION_CLASSES[animationIndex]}
              onClick={() => window.open(VERSES[verseIndex].link)}
            >
              {VERSES[verseIndex].hebrew}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
