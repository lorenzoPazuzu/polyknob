import React from "react"
import { TimeForm } from "./time-form/time-form.component"
import { ButtonWithPopover } from "../button-with-popover/button-with-popover.component"
import { AppMode } from "src/app/root.component"

interface IProps {
    onFirstLayerSubmit(timeSignature: string, numberOfGrains: string): void
    onSecondLayerSubmit(timeSignature: string, numberOfGrains: string): void
}

export class ControlPanel extends React.Component<IProps, any> {
    public render() {
        return (
            <div style={{ margin: "12px" }}>
                <ButtonWithPopover
                    id="test-popover"
                    placement="bottom"
                    title="Rhythm panel"
                    showIcon
                    btnText="Click me"
                    renderPopoverContent={this.renderPopoverContent as any}
                />
                <TimeForm layer={1} onSubmit={this.props.onFirstLayerSubmit} />
                <TimeForm layer={2} onSubmit={this.props.onSecondLayerSubmit} />
            </div>
        )
    }

    private renderPopoverContent = () => {
        return (
            <p>
                Here you can choose the time signature and the number of grains for the first layer and for
                the second one, once you have added it. The default time signature for each layer is 4/4.
            </p>
        )
    }
}
