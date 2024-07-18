/* eslint-disable @next/next/no-img-element */
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

type Props = {
    country: CountryType;
};

export function CountryCard({ country }: Props) {
    return (
        <Card className="h-full bg-gray-100 dark:bg-background">
            <CardHeader>
                <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    loading="lazy"
                    className="pointer-events-none object-contain h-[175px]"
                />
            </CardHeader>
            <CardContent className="pb-2">
                <h2 className="text-xl font-semibold">
                    {country.name.official}
                </h2>
            </CardContent>
            <CardFooter className="grid text-left">
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Capital: {country.capital.join(", ")}</p>
                <p>Region: {country.continents.join(", ")}</p>
            </CardFooter>
        </Card>
    );
}
