import { useCallback } from "react";
import type { IServiceLocator } from "../services/ServiceLocator.types";
import type { ServiceTypes, ValidServices } from "../services/Services";
import useForceUpdater from "./useForceUpdater";

export default function useServiceLocator(
  serviceLocator: IServiceLocator
): IServiceLocator {
  const forceUpdate = useForceUpdater();

  const register = useCallback(
    (id: keyof ServiceTypes, value: ValidServices) => {
      console.log("registering", id);
      serviceLocator.register(id, value);
      forceUpdate();
    },
    [forceUpdate, serviceLocator]
  );

  return {
    ...serviceLocator,
    get: serviceLocator.get,
    register,
  };
}
