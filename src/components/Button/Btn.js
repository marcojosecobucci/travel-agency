import React from 'react'
import { Button } from "./BtnStyles";

const Btn = ({title=''}) => {
    
    return (
        <div>
            <Button><h3>{title}</h3></Button>
        </div>
    )
}

export default Btn
