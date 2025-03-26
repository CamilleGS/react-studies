import React from "react";
import {ContainerItems as Containers }from "./style";

function ContainerItems({children, isBlur}){
    return <Containers isBlur={isBlur}>{children}</Containers>
}

export default ContainerItems