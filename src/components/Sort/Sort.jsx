import React from "react";

export const Sort = ({sort}) => {
    
    const [open, setOpen] = React.useState(true)

    return (
        <>
        <span>Сортировка по: </span>
        
        
        <ul>
            {
                open && (
                    <div>
                        <ul>
                            <li>популярности</li>
                            <li>цене</li>
                            <li>алфавиту</li>
                        </ul>
                    </div>
                )
            }
        </ul>
         
        </>

    )
}
