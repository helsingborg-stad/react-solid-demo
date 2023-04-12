import type { IServiceLocator } from "./ServiceLocator.types";
import type { ServiceTypes } from "./Services";

export class ServiceLocator implements IServiceLocator {
  services: Partial<ServiceTypes> = {};

  private static instance: ServiceLocator | null = null;

  static getInstance(): ServiceLocator {
    if (!this.instance) {
      this.instance = new ServiceLocator();
    }

    return this.instance;
  }

  static setGlobalInstance(serviceLocator: ServiceLocator): void {
    this.instance = serviceLocator;
  }

  register<K extends keyof ServiceTypes>(id: K, value: ServiceTypes[K]): void {
    this.services[id] = value;
  }

  get<K extends keyof ServiceTypes>(id: K): ServiceTypes[K] | undefined {
    const service = this.services[id];
    return service;
  }
}
