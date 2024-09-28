import React from "react";
import Image from "next/image";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import PortfolioIcon from "../Icon/PortfolioIcon";
import { Portfolio } from "@Entity/Portfolio.entity";

/**
 * The props of the PortfolioItem component.
 */
type PortfolioItemProps = {
  /**
   * The portfolio to display.
   */
  portfolio: Portfolio;
};

/**
 * Component that displays the portfolio item.
 */
const PortfolioItem: React.FC<PortfolioItemProps> = ({ portfolio }) => {
  return (
    <div className="block relative overflow-hidden">
      <div className="portfolio-image">
        <Image
          width="1000"
          height="1000"
          className="w-full h-[30vh] object-cover"
          src={portfolio.image}
          alt=""
        />
        <ul className="-translate-y-[300px] transition-all duration-[0.4s] ease-in-out absolute left-1/2 top-[35%] opacity-0">
          {portfolio.githubLink && (
            <PortfolioIcon
              title="Code"
              Icon={FaGithub}
              href={portfolio.githubLink}
            />
          )}
          {portfolio.productionLink && (
            <PortfolioIcon
              title="Production"
              Icon={MdWeb}
              href={portfolio.productionLink}
            />
          )}
        </ul>
      </div>
      <h6 className="text-2xl font-bold">{portfolio.title}</h6>
      <p className="m-0 w-full">{portfolio.description}</p>
    </div>
  );
};

export default PortfolioItem;
