"use client";
import usePortfolioViewModel from "./Portfolio.ViewModel";
import i18n from "@Language/i18n";
import Title from "@Components/Atom/Text/Title";
import PortfolioItem from "@Components/Atom/Item/PortfolioItem";

export default function PortfolioScreen() {
  const { portfolios, filters, onClickFilter } = usePortfolioViewModel();

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <Title text={i18n.t("portfolio.title")} />
      <div className="flex justify-center items-center flex-wrap w-3/4 my-8 mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onClickFilter(filter)}
            className="outline-none border-none bg-transparent cursor-pointer py-2 px-1 mx-2 font-bold text-white transition-all duration-300 hover:text-primary-color focus:text-primary-color active:text-primary-color"
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((portfolio, i) => (
          <PortfolioItem key={i} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
}
