import { useEffect, useRef, useState } from "react";
import Screen from "./components/Screen";
import MainSection from "./components/MainSection";

const messages = [
  "Hi, I'm Henry Dang",
  "I've been a software developer for around 2 years, and learned a lot.",
  "I have been and always wanted to be a part of a team that create something useful, meaningful.",
  "If you think we're on the same boat, then feel free to contact me.",
];

function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const introDone = activeScreen === messages.length;
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (activeScreen === messages.length) return;

    timeoutRef.current = setTimeout(
      () => {
        setActiveScreen((prev) => prev + 1);
      },
      Math.min(messages[activeScreen].split(" ").length * 500, 3000),
    );

    return () => clearTimeout(timeoutRef.current);
  }, [activeScreen]);

  return (
    <main className="relative h-screen p-2 text-center">
      {messages.map((message, index) => (
        <Screen
          key={index}
          active={activeScreen === index}
          onClick={() => {
            console.log("clicked");
            clearTimeout(timeoutRef.current);
            setActiveScreen((prev) => prev + 1);
          }}
        >
          {message}
        </Screen>
      ))}

      <MainSection active={introDone} onReplay={() => setActiveScreen(0)} />
    </main>
  );
}

export default App;
