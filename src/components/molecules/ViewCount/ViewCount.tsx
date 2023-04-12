"use client";

import { useContext, useEffect, useState } from "react";
import ViewCountServiceContext from "../../../contexts/ViewCountServiceContext";

export default function ViewCount(): JSX.Element {
  const service = useContext(ViewCountServiceContext);
  const [viewCount, setViewCount] = useState(-1);
  const [error, setError] = useState<string | null>(null);

  console.log("viewCount service", service?.constructor.name);

  useEffect(() => {
    void (async () => {
      setError(null);
      try {
        const newViewCount = await service?.getViewCount();
        console.log("ViewCount new", newViewCount);
        if (typeof newViewCount === "number") {
          setViewCount(newViewCount);
        }
      } catch (thrownError) {
        setViewCount(-1);
        setError((thrownError as Error).message);
      }
    })();
  }, [service]);

  const tryAddViewCount = async () => {
    try {
      setError(null);
      await service?.addViewCount();
    } catch (thrownError) {
      setError((thrownError as Error).message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      }}
    >
      <span>View Count:</span>
      <span>{viewCount}</span>
      <button style={{ margin: 5 }} onClick={tryAddViewCount}>
        Add
      </button>
      {error && <span style={{ color: "#bf616a" }}>{error}</span>}
    </div>
  );
}
