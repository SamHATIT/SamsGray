import {Card as NextUiCard, CardProps} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

export const articleCardBaseClasses = clsx([
    "p-4",
    "shadow-shadow-dark",
    "bg-graphite-light",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "border border-copper/10",
    "hover:border-copper",
    "hover:shadow-shadow-hover",
    "hover:-translate-y-1.5",
    "translate-y-0",
    "translate-x-0",
    "transition-all",
    "duration-300",
    "rounded-[var(--radius)]",
])

const DefaultCard = (props: CardProps) => {
    const {children, className, ...rest} = props;
    return (
        <NextUiCard
            className={clsx([
                "pt-0",
                "duration-700",
                className
            ])}
            {...rest}
        >
            {children}
        </NextUiCard>
    )
}

export default DefaultCard;
