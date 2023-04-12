"use client";

import type { ChangeEvent } from "react";
import { useCallback } from "react";

export interface DropdownProps {
  values: string[];
  active: string;
  onChange(value: string): void;
}

export default function Dropdown({
  values,
  onChange,
  active,
}: DropdownProps): JSX.Element {
  const changeCallback = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <select onChange={changeCallback} value={active}>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
