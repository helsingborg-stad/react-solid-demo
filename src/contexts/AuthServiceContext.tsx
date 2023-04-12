import { createContext, useCallback, useContext } from "react";
import useAuthService from "../hooks/useAuthService";
import { useMutableCall } from "../hooks/useMutableCall";
import type { IAuthService } from "../services/authService/authService.types";
import ServiceLocatorContext from "./ServiceLocatorContext";

const AuthServiceContext = createContext<IAuthService | null>(
  {} as IAuthService
);

interface AuthServiceProviderProps {
  children: React.ReactNode;
}

export function AuthServiceProvider({
  children,
}: AuthServiceProviderProps): JSX.Element {
  const serviceLocator = useContext(ServiceLocatorContext);

  const serviceInstance = useAuthService({
    service: serviceLocator?.get("authService"),
  });

  const login = useMutableCall(async () => {
    await serviceInstance?.login();
  });
  const logout = useMutableCall(async () => {
    await serviceInstance?.logout();
  });

  console.log("auth provider update!", serviceInstance?.getToken());

  const getToken = useCallback(() => {
    return serviceInstance?.getToken() ?? null;
  }, [serviceInstance]);

  return (
    <AuthServiceContext.Provider
      value={
        serviceInstance
          ? {
              getToken,
              login,
              logout,
            }
          : null
      }
    >
      {children}
    </AuthServiceContext.Provider>
  );
}

export default AuthServiceContext;
