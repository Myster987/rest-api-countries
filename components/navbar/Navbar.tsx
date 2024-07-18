import Link from "next/link";
import { ThemeSelect } from "../theme";

export function Navbar() {
    return (
        <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-100 dark:bg-background">
            <Link href="/">
                <h1 className="font-semibold text-xl sm:text-2xl">
                    Where in the World?
                </h1>
            </Link>
            <ThemeSelect />
        </div>
    );
}
