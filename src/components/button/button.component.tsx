import React from "react"
import { Icon } from "./button.style"

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    text: string
    type?: "primary" | "danger"
    icon?: "times" | "plus" | string
}

export class Button extends React.Component<IProps, any> {
    public render() {
        const { loading = false, text, type = "light", icon, ...rest } = this.props

        return (
            <>
                <button type="submit" className={`btn btn-${type}`} disabled={loading} {...rest}>
                    {!loading && (
                        <>
                            {icon && <Icon className={`fa fa-${icon}`} />}
                            <span>{text}</span>
                        </>
                    )}
                    {loading && <i className="fas fa-spin fa-circle-notch" />}
                </button>
            </>
        )
    }
}
