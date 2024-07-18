"use client";

import { useAtom } from "jotai";
import { regionAtom, searchbarAtom } from "@/state";
import { useGetCountries } from "@/hooks/countries/use-get-countries";
import { CountriesList } from "@/components/list/CountiresList";
import { Searchbar } from "@/components/searchbar/Searchbar";
import { SelectRegion } from "@/components/select/SelectRegion";

export default function Home() {
    const countriesQuery = useGetCountries();
    const [currentInput, setInput] = useAtom(searchbarAtom);
    const [currentRegion, setRegion] = useAtom(regionAtom);

    const countriesData = countriesQuery.data || [];
    const countries =
        currentRegion != "all"
            ? countriesData.filter((val) =>
                  val.continents.includes(currentRegion)
              )
            : countriesData;

    const regions = Array.from(
        new Set(countriesData.map((val) => val.continents).flat()).values()
    );

    return (
        <main className="grid gap-4 p-4">
            <div className="flex justify-between gap-4">
                <Searchbar
                    value={currentInput}
                    handleChange={(e) => setInput(e.target.value)}
                />
                <SelectRegion
                    regions={regions}
                    handleSelect={(e) => setRegion(e)}
                />
            </div>
            <CountriesList
                countries={countries.filter((val) =>
                    val.name.official
                        .toLowerCase()
                        .includes(currentInput.toLowerCase())
                )}
                isLoading={countriesQuery.isLoading}
            />
        </main>
    );
}
