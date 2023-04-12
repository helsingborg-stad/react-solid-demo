import type { IServiceLocator } from "../../ServiceLocator.types";
import type { IViewCountService } from "../ViewCountService.types";

const REMOTE_KEY = "apiViewCount";

export default class ApiViewCountService implements IViewCountService {
  private serviceLocator: IServiceLocator;

  constructor(serviceLocator: IServiceLocator) {
    this.serviceLocator = serviceLocator;
  }

  async getIsAuthorized(): Promise<boolean> {
    const authService = this.serviceLocator.get("authService");

    const token = authService?.getToken();

    return !!token;
  }

  async getViewCount(): Promise<number> {
    const isAuthorized = await this.getIsAuthorized();

    if (!isAuthorized) {
      throw new Error("Not logged in");
    }

    // MOCK - assume this is a remote API call
    return parseInt(window.localStorage.getItem(REMOTE_KEY) ?? "0");
  }

  async addViewCount(): Promise<void> {
    const isAuthorized = await this.getIsAuthorized();

    if (!isAuthorized) {
      throw new Error("Not logged in");
    }

    // MOCK - assume this is a remote API call
    const current = parseInt(window.localStorage.getItem(REMOTE_KEY) ?? "0");
    window.localStorage.setItem(REMOTE_KEY, (current + 1).toString());
  }
}
