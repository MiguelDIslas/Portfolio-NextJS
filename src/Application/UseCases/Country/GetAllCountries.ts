import { CountryService } from "../../Services/Country.service";

/**
 * Use case to get all countries.
 */
export class GetAllCountries {
  /**
   * Execute the use case.
   */
  static execute() {
    return CountryService.getAll();
  }
}
