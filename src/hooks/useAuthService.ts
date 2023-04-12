import type { IAuthService } from "../services/authService/authService.types";

interface UseAuthService {
  service?: IAuthService;
}

export default function useAuthService({
  service,
}: UseAuthService): IAuthService | null {
  return service ?? null;
}
