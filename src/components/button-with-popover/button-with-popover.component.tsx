import React, { ReactHTMLElement } from "react"
import { OverlayTrigger, Popover as BPopover } from "react-bootstrap"

interface Props {
    id: string
    title?: string
    placement?: "right" | "left" | "top" | "bottom"
    showIcon?: boolean
    btnText?: string
    renderPopoverContent(): ReactHTMLElement<any>
}

export class ButtonWithPopover extends React.Component<Props> {
    public render() {
        const { btnText, placement, showIcon } = this.props

        return (
            <OverlayTrigger
                trigger="click"
                placement={placement || "right"}
                overlay={this.renderPopover()}
                rootClose
            >
                <button className="btn btn-info">
                    {showIcon && <i className="fa fa-info-circle" />}
                    {btnText && ` ${btnText}`}
                </button>
            </OverlayTrigger>
        )
    }

    public renderPopover() {
        const { id, title, renderPopoverContent } = this.props

        return (
            <BPopover id={id}>
                {title && <BPopover.Title as="h3">{title}</BPopover.Title>}
                <BPopover.Content>{renderPopoverContent()}</BPopover.Content>
            </BPopover>
        )
    }
}
