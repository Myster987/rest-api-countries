import Link from "next/link";
import { CountryCard } from "../card/CountryCard";
import { Skeleton } from "../ui/skeleton";

type Props = {
    countries: CountryType[];
    isLoading: boolean;
};

export function CountriesList({ countries, isLoading }: Props) {
    if (isLoading) {
        return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {Array(30)
                    .fill(0)
                    .map((_, index) => (
                        <li key={index}>
                            <Skeleton className="h-[385px] rounded-md" />
                        </li>
                    ))}
            </ul>
        );
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {countries.map((val) => (
                <li key={val.name.official}>
                    <Link href={`/${val.name.official}`}>
                        <CountryCard country={val} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
