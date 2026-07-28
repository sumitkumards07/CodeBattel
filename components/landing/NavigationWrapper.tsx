"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

const HIDDEN_NAV_ROUTES = ["/courses/react-labs"];

export default function NavigationWrapper() {
    const pathname = usePathname();
    const hideNav = HIDDEN_NAV_ROUTES.some((route) => pathname.startsWith(route));

    if (hideNav) return null;

    return <Navigation />;
}
