import React from "react"
import { Button } from "../button/button.component"
import { MainSketch } from "../../sketches/sketch"
import { ButtonWithPopover } from "../button-with-popover/button-with-popover.component"
import "./footer-panel.component.scss"

enum ButtonType {
    Layer,
    Track,
    Shape,
    Rotate,
    DeleteShape
}

interface IProps {
    onChangeShape(numSides: number[]): void
}

export class FooterPanel extends React.Component<IProps> {
    public render() {
        return (
            <div className="footer-panel">
                <div className="d-flex justify-content-md-around">
                    <div className="button-container">
                        <Button
                            text="Layer"
                            icon="plus"
                            onMouseDown={this.onLayerClick}
                            onMouseUp={this.onMouseReleased}
                        />
                        <ButtonWithPopover
                            id="test-popover"
                            placement="bottom"
                            showIcon
                            renderPopoverContent={this.renderPopoverContent(ButtonType.Layer) as any}
                        />
                    </div>

                    <div className="button-container">
                        <Button
                            text="Track"
                            icon="vector-square"
                            onMouseDown={this.onTrackClick}
                            onMouseUp={this.onMouseReleased}
                        />
                        <ButtonWithPopover
                            id="test-popover"
                            placement="bottom"
                            showIcon
                            renderPopoverContent={this.renderPopoverContent(ButtonType.Track) as any}
                        />
                    </div>

                    <div className="button-container">
                        <Button
                            text="Shape"
                            icon="shapes"
                            onMouseDown={this.onShapeClick}
                            onMouseUp={this.onMouseReleased}
                        />
                        <ButtonWithPopover
                            id="test-popover"
                            placement="bottom"
                            showIcon
                            renderPopoverContent={this.renderPopoverContent(ButtonType.Shape) as any}
                        />
                    </div>

                    <div className="button-container">
                        <Button text="Rotate" icon="sync" onClick={this.onRotateClick} />
                        <ButtonWithPopover
                            id="test-popover"
                            placement="bottom"
                            showIcon
                            renderPopoverContent={this.renderPopoverContent(ButtonType.Rotate) as any}
                        />
                    </div>

                    <div className="button-container">
                        <Button
                            text="Delete shape"
                            icon="trash fill"
                            type="danger"
                            onClick={this.onShapeDeleteClick}
                        />
                        <ButtonWithPopover
                            id="test-popover"
                            placement="bottom"
                            showIcon
                            renderPopoverContent={this.renderPopoverContent(ButtonType.DeleteShape) as any}
                        />
                    </div>

                    <Button text="Encoder" onClick={this.encoderClick} />
                    <Button text="-1" onClick={this.minusOneClick} />
                    <Button text="+1" onClick={this.plusOneClick} />
                </div>
            </div>
        )
    }

    private renderPopoverContent = (buttonType) => {
        return () => {
            const map = {
                [ButtonType.Layer]:
                    "Hold to add a layer, press to enter the layer mode. Then you can switch between them with the increasing and decreasing buttons.",
                [ButtonType.Track]:
                    "Hold to add a track, press to enter the track mode. Then you can switch between them with the increasing and decreasing buttons. Remember that each track can accomodate just one polygon.",
                [ButtonType.Rotate]:
                    "Press to enter the rotation mode. Then you can rotate shapes with the increasing and decreasing buttons.",
                [ButtonType.Shape]:
                    "Press to enter the shape mode. Then you can switch between them with the increasing and decreasing buttons. Hold to enter the custom shape mode. Scroll the dots with the increasing and decreasing buttons and select them with the encoder one.",
                [ButtonType.DeleteShape]: "Press to delete the shape selected."
            }

            return <p>{map[buttonType]}</p>
        }
    }

    private onLayerClick = () => {
        MainSketch.createNewLayer()
    }

    private onTrackClick = () => {
        MainSketch.selectShape()
    }
    private onShapeClick = () => {
        MainSketch.changeShape()
    }

    private onRotateClick = () => {
        MainSketch.rotateShape()
    }

    private onShapeDeleteClick = () => {
        MainSketch.deleteShape()
        this.props.onChangeShape(MainSketch.getNumSides())
    }
    private encoderClick = () => {
        MainSketch.encoderButt()
    }

    private plusOneClick = () => {
        MainSketch.encoderInc()
        this.props.onChangeShape(MainSketch.getNumSides())
    }

    private minusOneClick = () => {
        MainSketch.encoderDec()
        this.props.onChangeShape(MainSketch.getNumSides())
    }

    private onMouseReleased = () => {
        MainSketch.mouseReleased()
        this.props.onChangeShape(MainSketch.getNumSides())
    }
}
