import { PortfolioService } from "../../Services/Portfolio.service";

/**
 * Use case to get all portfolios.
 */
export class GetAllPortfolios {
  /**
   * Execute the use case.
   */
  static execute() {
    return PortfolioService.getAll();
  }
}