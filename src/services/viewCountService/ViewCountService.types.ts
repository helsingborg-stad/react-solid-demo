export interface IViewCountService {
  getViewCount(): Promise<number>;
  addViewCount(): Promise<void>;
}
