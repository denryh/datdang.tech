import { useCallback, useState } from "react";

export function useScreen() {
  const [currentScreen, setScreen] = useState(0);

  const nextScreen = useCallback(function nextScreen() {
    setScreen(function incrementScreenByOne(prevScreen) {
      return prevScreen + 1;
    });
  }, []);

  const resetScreen = useCallback(function resetScreen() {
    setScreen(0);
  }, []);

  return {
    currentScreen,
    nextScreen,
    resetScreen,
  };
}
