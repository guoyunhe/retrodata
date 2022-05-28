import React from "react";

export default function Banner({
    className,
    ...rest
}: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>) {
    return <img style={{ display: "block", width: "100%" }} {...rest} />;
}
