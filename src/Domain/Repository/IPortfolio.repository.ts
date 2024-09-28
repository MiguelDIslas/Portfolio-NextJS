import { Portfolio } from "../Entity/Portfolio.entity";

/**
 * Interface for Portfolio Repository
 */
export interface IPortfolioRepository {
  /**
   * Get all portfolios.
   */
  getAll(): Portfolio[];
}
