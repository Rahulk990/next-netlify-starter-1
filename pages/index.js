import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

export default function Home() {

  const textData = [
    "Today is ...",
    "Happy Birthday 🎉",
    "Harshi ❤️",
    "another year has gone",
    "in a blink of the eyes",
    "<strong>however</strong>",
    "Do you know..?",
    "today is just special",
    "so special to you",
    "that's why",
    "Let's make it...",
    "the best celebration ever",
    "and let me share...",
    "a piece of happiness to you",
    "I made all this...",
    "as a birthday present to you",
    "thanks for being there",
    "thanks for the friendship we made",
    "thanks for everything",
    "I wish you all the best",
    "May your life be at ease",
    "May all your wishes come true",
    "Remember",
    "your ambitions",
    "you live as a free bird...",
    "flying in the blue sky",
    "Now things are different...",
    "real story of your life",
    "is just about to begin",
    "indeed..",
    "but...",
    "don't worry",
    "because...",
    "God has your back",
    "and",
    "this year will be better",
    "and I hope",
    "you'll find...",
    "happiness along the way",
    "keep your spirit up",
    "enjoy every single moment...",
    "that you experience today",
    "fill it with your most beautiful smile",
    "and make it the best memory..",
    "lastly...",
    "I'd like to wish you one more time",
    "a very happy birthday Xola Mathembisa",

  ];

  const [counterCompleted, setCounterCompleted] = useState(false);
  const targetTime = new Date(`Oct 5, 2024 00:00:00`).getTime();

  const generateTimeDisplay = () => {
    const rightJustNow = new Date().getTime();
    const runway = targetTime - rightJustNow;
    const hours = Math.floor(
      (runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((runway % (1000 * 60)) / 1000);
    const stateObj = {
      hours: hours < 0 ? 0 : hours,
      minutes: minutes < 0 ? 0 : minutes,
      seconds: sec < 0 ? 0 : sec,
    };
    return stateObj;
  };

  const [timeDisplay, setTimeDisplay] = React.useState(generateTimeDisplay);
  const updateCounters = () => setTimeDisplay(generateTimeDisplay);

  const [text, setText] = React.useState(0);
  const [data, setData] = React.useState("Hi!");

  const changeText = () => {
    const current = text;
    var next = current + 1;
    if (next >= textData.length) {
      next = current;
    }
    return next;
  }

  React.useEffect(() => {
    setInterval(() => setTimeDisplay(generateTimeDisplay), 1000);
  }, []);

  React.useEffect(() => {
    setInterval(() => setText(changeText()), 1000);
  }, [counterCompleted]);

  React.useEffect(() => {
    setData(textData.at(text));
  }, [text]);

  const CounterUtil = ({ displayValue, label }) => (
    <div className="counter">
      <h2 className="counter-h2">{label}</h2>
      {displayValue}
    </div>
  );

  const CounterMain = () => (
    <div className="app">
      <section className="container">
        <div className="date">
          <h1 className="date-h1">🎉 Celebrations in 🎉</h1>
        </div>
        <div className="wrapped">
          <CounterUtil displayValue={timeDisplay.hours} label={'Hours'} />
          <CounterUtil displayValue={timeDisplay.minutes} label={'Minutes'} />
          <CounterUtil displayValue={timeDisplay.seconds} label={'Seconds'} />
        </div>
        {timeDisplay.hours == 0 &&
          timeDisplay.minutes == 0 &&
          timeDisplay.seconds == 0 && (
            <div className="date">
              <button
                className="date-button"
                onClick={() => setCounterCompleted(true) }
              >
                Start
              </button>
            </div>
          )}
      </section>
    </div>
  );

  const TextMain = () => (
    <div className="app">
      <section className="container">
        <div className="date">
          <h1 className="date-h1"> {data} </h1>
        </div>
      </section>
    </div>
  );

  return (
    <>
      {!counterCompleted && <CounterMain />}
      {counterCompleted && <TextMain />}
    </>
  );
}
