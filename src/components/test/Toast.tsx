import React from 'react'

type BtnCustom = {
    variant: 'primary' | 'secondary'
    children: boolean | string
} & React.ComponentProps<'button'>

enum UserResponse {
    No = "no",
    Yes = 1,
}

function Toast({ variant, children, ...rest }: BtnCustom) {

    console.log(UserResponse.No);

    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}

export default Toast;