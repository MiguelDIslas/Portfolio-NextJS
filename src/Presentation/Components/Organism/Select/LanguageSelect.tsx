"use client";

import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import Select, { SingleValue } from "react-select";

import i18n from "@Language/i18n";
import us from "@Data/country/us.json";
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
      title="Select Language"
      className={`
        w-10
        h-10
        fixed
        right-5 bottom-20
        z-50
        flex
        flex-row
        items-center
        justify-center`}
    >
      <Select
        isSearchable={false}
        isClearable={false}
        options={countries}
        defaultValue={us}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
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
            primary: "#f2f2f2",
            primary50: "#f2f2f2",
            primary75: "#f2f2f2",
            neutral0: "#f2f2f2",
          },
        })}
      />
    </div>
  );
};

export default LanguageSelect;
