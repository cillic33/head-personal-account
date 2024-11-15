// @barrelblur: название файла должно быть useToggle.ts

import {useState} from "react";

// Странно, файл и сам хук называются по-разному. Исправить это
export function useBoolean(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  return {
    isOn,
    on: () => setIsOn(true),
    off: () => setIsOn(false),
    toggle: () => setIsOn((state) => !state),
  };
}
