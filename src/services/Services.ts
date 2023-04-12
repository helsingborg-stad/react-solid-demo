import type { IAuthService } from "./authService/authService.types";
import type { IViewCountService } from "./viewCountService/ViewCountService.types";

export type ValidServices = IAuthService | IViewCountService;

export type ServiceTypes = {
  authService: IAuthService;
  viewCountService: IViewCountService;
};
