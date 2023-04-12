import { useCallback } from "react";
import useForceUpdater from "./useForceUpdater";

export function useMutableCall<T>(
  callable: () => Promise<T>
): () => Promise<T> {
  const updater = useForceUpdater();
  return useCallback(async () => {
    try {
      const result = await callable();
      updater();
      return result;
    } catch (error) {
      updater();
      throw error;
    }
  }, [callable, updater]);
}
