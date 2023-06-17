import React from 'react'

type BtnCustom = {
    variant: 'primary' | 'secondary'
    children: string
} & React.ComponentProps<'button'>

function Toast({ variant, children, ...rest }: BtnCustom) {

    console.log(variant);

    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}

export default Toast;