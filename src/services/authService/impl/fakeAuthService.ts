import type { IAuthService } from "../authService.types";

export default class FakeAuthService implements IAuthService {
  private isLoggedIn = false;

  async login(): Promise<void> {
    console.log("(FakeAuthService) login");
    this.isLoggedIn = true;
  }

  async logout(): Promise<void> {
    console.log("(FakeAuthService) logout");
    this.isLoggedIn = false;
  }

  getToken(): string | null {
    return this.isLoggedIn ? "my_fake_token" : null;
  }
}
