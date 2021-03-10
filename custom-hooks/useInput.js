import React, { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return [value, onChange];
}
