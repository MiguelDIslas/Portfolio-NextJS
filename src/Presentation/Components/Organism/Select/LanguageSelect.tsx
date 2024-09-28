"use client";

import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import Select, { SingleValue } from "react-select";

import i18n from "@Language/i18n";
import us from '@Data/country/us.json';
import { Country } from "@Entity/Contry.entity";
import { LanguageEnum } from "@Enum/LanguageEnum";
import { GetAllCountries } from "@UseCases/Country/GetAllCountries";


const LanguageSelect = () => {
  const countries = GetAllCountries.execute();
  const router = useRouter();

  const onChange = (param: SingleValue<Country>) => {
    if (param) {
      i18n.changeLanguage(param.language.code as LanguageEnum);
      router.refresh();
    }
  };

  return (
    <div
      className="absolute
    top-2
    right-2
    z-50
    flex
    flex-row
    items-center
    justify-center
    width-2/4
    bg-slate-800
    "
    >
      <Select
        isSearchable={false}
        isClearable={false}
        options={countries}
        defaultValue={us}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option: Country) => (
          <div className="flex flex-row items-center gap-2 w-full text-black text-xs">
            <ReactCountryFlag
              countryCode={option.code}
              svg
              style={{
                width: "1em",
                height: "1em",
              }}
            />
            {option.language.name}
          </div>
        )}
        classNames={{
          control: () => "border-2 flex",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "#fff",
            primary25: "#fff",
          },
        })}
      />
    </div>
  );
};

export default LanguageSelect;
