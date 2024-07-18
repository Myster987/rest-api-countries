"use client";

import { useAtom } from "jotai";
import { regionAtom } from "@/state";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type Props = {
    regions: string[];
    handleSelect: (val: string) => void;
};

export function SelectRegion({ regions, handleSelect }: Props) {
    const [currentRegion] = useAtom(regionAtom);

    return (
        <Select onValueChange={handleSelect} defaultValue={currentRegion}>
            <SelectTrigger className="w-52">
                <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select region</SelectLabel>
                    <SelectItem value="all" key="all">
                        All
                    </SelectItem>
                    {regions.map((val) => (
                        <SelectItem value={val} key={val}>
                            {val}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
