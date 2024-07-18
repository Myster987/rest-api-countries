import { Input } from "@/components/ui/input";
import { ChangeEventHandler } from "react";

type Props = {
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
};

export function Searchbar({ value, handleChange }: Props) {
    return (
        <Input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search country by name..."
            className="md:w-[450px]"
        />
    );
}
