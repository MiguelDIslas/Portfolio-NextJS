"use client";
import useAboutViewModel from "./About.ViewModel";
import Title from "@Components/Atom/Text/Title";
import i18n from "@Language/i18n";

export default function AboutScreen() {
  useAboutViewModel();

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <div>
        <Title text={i18n.t("about.title")} />
        <div className="flex flex-col lg:flex-row mt-8 justify-center items-center">
          <div className="w-100 mb-8 lg:mb-0 lg:w-50">
            <p className="py-4 font-medium flex flex-wrap">
              <span>{i18n.t("about.description")}</span>
              <span>{i18n.t("about.description2")}</span>
            </p>
          </div>
          <div className="w-100 lg:w-50">
            <div className="tagcloud flex justify-center items-center text-primary-color my-3 mx-auto text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
