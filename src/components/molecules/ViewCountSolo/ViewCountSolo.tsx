"use client";

import { useEffect, useState } from "react";
import useViewCountService from "../../../hooks/useViewCountService";
import LocalViewCountService from "../../../services/viewCountService/impl/LocalViewCountService";

export default function ViewCountSolo(): JSX.Element {
  const service = useViewCountService({
    service: new LocalViewCountService("solo"),
  });
  const [viewCount, setViewCount] = useState(-1);

  useEffect(() => {
    void (async () => {
      const newViewCount = await service?.getViewCount();
      console.log("ViewCount new", newViewCount);
      if (typeof newViewCount === "number") {
        setViewCount(newViewCount);
      }
    })();
  }, [service]);

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
      <button style={{ margin: 5 }} onClick={() => service?.addViewCount()}>
        Add
      </button>
    </div>
  );
}
