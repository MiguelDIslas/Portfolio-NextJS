import { useState, useEffect } from "react";
import { Portfolio } from "@Entity/Portfolio.entity";
import { GetAllPortfolios } from "@UseCases/Portfolio/GetAllPortfolios";
import { GetAllTechnologies } from "@UseCases/Portfolio/GetAllTechnologies";

export default function usePortfolioViewModel() {
  /**
   * State to store the initial state of portfolios.
   */
  const [initialState, setInitialState] = useState<Portfolio[]>([]);

  /**
   * State to store the portfolios.
   */
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  /**
   * State to store the filters.
   */
  const [filters, setFilters] = useState<string[]>([]);

  /**
   * Function to filter the portfolios.
   */
  const onClickFilter = (filter: string) => {
    if (filter === "All" || filter === "" || filter === "Todos") {
      setPortfolios(initialState);
    } else {
      const data = initialState.filter((portfolio) =>
        portfolio.tech.includes(filter)
      );
      setPortfolios(data);
    }
  };

  /**
   * Effect to get all portfolios and technologies.
   */
  useEffect(() => {
    const data = GetAllPortfolios.execute();
    const technologies = GetAllTechnologies.execute();
    setInitialState(data);
    setPortfolios(data);
    setFilters(technologies);
  }, []);

  return { 
    portfolios, 
    filters, 
    onClickFilter 
  };
}
