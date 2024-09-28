import { PortfolioService } from "../../Services/Portfolio.service";

/**
 * Use case to get all technologies.
 */
export class GetAllTechnologies {
  /**
   * Execute the use case.
   */
  static execute() {
    return PortfolioService.getTechnologies();
  }
}
