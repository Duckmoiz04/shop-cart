import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn("container mx-auto px-4 xl:px-32", className)}>{children}</div>;
};

export default Container;
