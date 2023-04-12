import create from "lodash.create";
import { useCallback } from "react";
import useForceUpdater from "./useForceUpdater";
import type { IViewCountService } from "../services/viewCountService/ViewCountService.types";
import { useMutableCall } from "./useMutableCall";

interface UseViewCountService {
  service?: IViewCountService;
}

export default function useViewCountService({
  service,
}: UseViewCountService): IViewCountService | null {
  const addViewCount = useMutableCall(async () => {
    await service?.addViewCount();
  });

  return service
    ? create(Object.getPrototypeOf(service), {
        ...service,
        addViewCount,
        getViewCount: service.getViewCount,
      })
    : null;
}
