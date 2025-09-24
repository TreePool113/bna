"use client";

import { SessionProvider } from "next-auth/react";
import LayoutWrapper from "./layoutWrapper";

export default function SessionProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </SessionProvider>
    )
}