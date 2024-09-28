"use client";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import i18n from "@Language/i18n";
import { UrlsEnum } from "@Enum/UrlsEnum";
import Particle from "@Components/Atom/General/Particle";
import SocialMediaButton from "@Components/Atom/Button/SocialMediaButton";

export default function HomeScreen() {
  return (
    <div className="w-full min-h-screen relative">
      <Particle />
      <section className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-[4rem] text-center font-bold mb-5 xl:mb-0 prevent-select">
          {i18n.t("home.title")}
          <span className="text-[4rem] text-primary-color ml-2">
            Miguel Delgado
          </span>
        </p>
        <p className="text-sm text-center lg:text-lg font-semibold prevent-select flex flex-wrap">
          <span>{i18n.t("home.primaryText")}</span>
          <span className="text-primary-color w-full text-center text-sm lg:text-lg">
            {i18n.t("home.secondaryText")}
          </span>
          <span>{i18n.t("home.thirdText")}</span>
        </p>
        <div className="flex justify-center mt-4">
          <SocialMediaButton
            href={UrlsEnum.LinkedIn}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
            Icon={FaLinkedin}
          />
          <SocialMediaButton
            href={UrlsEnum.MailTo}
            title="Email"
            Icon={MdEmail}
          />
          <SocialMediaButton
            href={UrlsEnum.Github}
            target="_blank"
            rel="noreferrer"
            title="Github profile"
            Icon={FaGithub}
          />
        </div>
      </section>
    </div>
  );
}
