import { useState } from "react";

export default function useForceUpdater(): () => void {
  const [, updater] = useState<object>({});
  return () => updater({});
}
