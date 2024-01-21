"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute left-[76px]">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="text-red-200">
        Try again
      </button>
    </div>
  );
}
