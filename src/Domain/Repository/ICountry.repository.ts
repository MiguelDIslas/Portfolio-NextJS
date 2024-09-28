import { Country } from "@Entity/Contry.entity";

/**
 * Country repository
 */
export interface ICountryRepository {
  /**
   * Get all countries
   */
  getAll(): Country[];
}
