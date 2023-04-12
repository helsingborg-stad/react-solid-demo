export interface IAuthService {
  login(): Promise<void>;
  logout(): Promise<void>;
  getToken(): string | null;
}
