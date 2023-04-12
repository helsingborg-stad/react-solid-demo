import type { IAuthService } from "../authService.types";

interface GoogleCredentials {
  email: string;
  password: string;
}

export default class GoogleAuthService implements IAuthService {
  private credentials: GoogleCredentials;
  private isLoggedIn = false;

  constructor() {
    this.credentials = {
      email: "",
      password: "",
    };
  }

  async login(): Promise<void> {
    console.log("(GoogleAuthService) login");
    if (
      this.credentials.email.length == 0 ||
      this.credentials.password.length == 0
    ) {
      throw new Error("Failed to login to Google");
    }

    this.isLoggedIn = true;
  }

  async logout(): Promise<void> {
    console.log("(GoogleAuthService) logout");
    this.isLoggedIn = false;
  }

  getToken(): string | null {
    return this.isLoggedIn ? "my_google_token" : null;
  }

  setCredentials(email: string, password: string): void {
    this.credentials = { email, password };
  }
}
