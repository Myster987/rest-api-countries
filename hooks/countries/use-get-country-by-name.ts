import { useQuery } from "@tanstack/react-query";

export const useGetCountryByName = (name: string) => {
    const query = useQuery({
        queryKey: ["country", name],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API}/name/${name}?fullText=true&fields=name,capital,population,flags,continents`
            );
            const data: CountryType = (await res.json())[0];

            return data;
        },
    });

    return query;
};
