/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCountryByName } from "@/hooks/countries/use-get-country-by-name";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
    params: {
        countryName: string;
    };
};

export default function Page({ params }: Props) {
    const countryQuery = useGetCountryByName(params.countryName);

    const country = countryQuery.data;

    if (countryQuery.isLoading || !country) {
        return (
            <div className="md:h-[calc(100vh-56.8px)] p-4">
                <Card className="flex flex-col lg:flex-row h-full px-12 lg:px-4 py-4 gap-6 items-center bg-gray-100 dark:bg-background">
                    <div className="flex justify-center items-start">
                        <Skeleton className="w-[275px] h-[150px] sm:w-[550px] sm:h-[400px] rounded-md" />
                    </div>
                    <Separator
                        orientation="vertical"
                        className="hidden lg:block"
                    />
                    <Separator orientation="horizontal" className="lg:hidden" />
                    <div>
                        <Separator className="w-[200px] md:w-[400px] h-[50px] rounded-lg" />
                        <div className="sm:text-lg grid gap-2 text-left pt-3">
                            <Separator className="w-[125px] md:w-[250px] h-[30px] rounded-full" />
                            <Separator className="w-[125px] md:w-[250px] h-[30px] rounded-full" />
                            <Separator className="w-[125px] md:w-[250px] h-[30px] rounded-full" />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="md:h-[calc(100vh-56.8px)] p-4">
            <Card className="flex flex-col lg:flex-row h-full px-12 lg:px-4 py-4 gap-6 items-center bg-gray-100 dark:bg-background">
                <div className="flex justify-center items-start">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        loading="lazy"
                        className="pointer-events-none object-contain "
                    />
                </div>
                <Separator orientation="vertical" className="hidden lg:block" />
                <Separator orientation="horizontal" className="lg:hidden" />
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                        {country.name.official}
                    </h2>
                    <div className="sm:text-lg grid gap-1 text-left pt-3">
                        <p>Population: {country.population.toLocaleString()}</p>
                        <p>Capital: {country.capital.join(", ")}</p>
                        <p>Region: {country.continents.join(", ")}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
