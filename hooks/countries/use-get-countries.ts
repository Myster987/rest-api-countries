import { useQuery } from "@tanstack/react-query";

export const useGetCountries = () => {
    const query = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const res = await fetch(
                "https://restcountries.com/v3.1/independent?status=true&fields=name,capital,population,flags,continents"
            );
            const data: CountryType[] = await res.json();
            return data;
        },
    });

    return query;
};
