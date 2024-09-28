import { Country } from "@Entity/Contry.entity";
import { ICountryRepository } from "@IRepository/ICountry.repository";

import us from "@Data/country/us.json";
import mx from "@Data/country/mx.json";

/**
 * Country repository
 */
export class CountryRepository implements ICountryRepository {
  /**
   * Get all countries
   */
  getAll(): Country[] {
    return [us, mx];
  }
}
