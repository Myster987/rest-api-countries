type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

type CountryType = Resolve<{
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    population: number;
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
}>;
