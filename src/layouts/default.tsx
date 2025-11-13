import React from "react";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/Footer";
import {Head, MetaProps} from "@/layouts/head";
import {SearchBarProps} from "@/components/SearchBar";
import {DefaultsMenu} from "@/components/defaults/Defaults.Menu";
import clsx from "clsx";

type DefaultLayoutProps = {
    searchBoxProps?: SearchBarProps
    containerMaxWidth?: string
    metaProps?: MetaProps
    showFooter?: boolean
} & { children: React.ReactNode; }

export default function DefaultLayout({
                                          children,
                                          searchBoxProps,
                                          containerMaxWidth = "max-w-screen-xl",
                                          metaProps = {},
                                          showFooter = true
                                      }: DefaultLayoutProps) {
    return (
        <div className="min-h-screen bg-graphite flex flex-col">
            <Head {...metaProps}/>
            <Navbar searchBoxProps={searchBoxProps}/>
            <DefaultsMenu/>
            <main className={clsx(
                `flex-grow w-full flex flex-col`,
                containerMaxWidth,
                `mx-auto px-6 md:px-8`
            )}>
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
}
