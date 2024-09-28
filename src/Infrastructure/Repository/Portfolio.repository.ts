import { Portfolio } from "@Entity/Portfolio.entity";
import { IPortfolioRepository } from "@IRepository/IPortfolio.repository";

import gonher from '@Data/portfolio/gonher.json';
import itwebsite from '@Data/portfolio/itwebsite.json';
import sse from "@Data/portfolio/sse.json";

/**
 * Portfolio Repository
 */
export class PortfolioRepository implements IPortfolioRepository {
  /**
   * Get all portfolios.
   */
  getAll(): Portfolio[] {
    return [gonher, itwebsite, sse];
  }
}