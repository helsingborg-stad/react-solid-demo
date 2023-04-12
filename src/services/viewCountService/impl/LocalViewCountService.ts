import type { IViewCountService } from "../ViewCountService.types";

const STORAGE_KEY_BASE = "localViewCount";

export default class LocalViewCountService implements IViewCountService {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  async getViewCount(): Promise<number> {
    return parseInt(
      window.localStorage.getItem(STORAGE_KEY_BASE + this.key) ?? "0"
    );
  }

  async addViewCount(): Promise<void> {
    const current = parseInt(
      window.localStorage.getItem(STORAGE_KEY_BASE + this.key) ?? "0"
    );
    window.localStorage.setItem(
      STORAGE_KEY_BASE + this.key,
      (current + 1).toString()
    );
  }
}
