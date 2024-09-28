import { PortfolioRepository } from "@Repository/Portfolio.repository";

/**
 * The Portfolio Service
 */
export class PortfolioService {
  private static repository = new PortfolioRepository();

  /**
   * Get all the portfolios.
   */
  static getAll() {
    const data = this.repository.getAll();
    const dataSortedById = data.sort((a, b) => a.id - b.id);

    return dataSortedById;
  }

  /**
   * Get all the technologies used in the portfolios.
   */
  static getTechnologies() {
    const data = this.repository.getAll();
    const technologies = data.map((portfolio) => portfolio.tech);
    const uniqueTechnologies = ["All", ...new Set(technologies.flat())];

    return uniqueTechnologies;
  }
}
