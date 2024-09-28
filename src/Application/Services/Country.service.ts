import { CountryRepository } from "@Repository/Country.repository";

/**
 * The Country Service
 */
export class CountryService {
  private static repository = new CountryRepository();

  /**
   * Get all the countries.
   */
  static getAll() {
    return this.repository.getAll();
  }
}
