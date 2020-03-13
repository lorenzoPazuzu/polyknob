import React from "react"
import { Button } from "../button/button.component"
import { MainSketch } from "../../sketches/sketch"
import { Metro } from "../../sketches/metronome"
import { Container } from "./right-panel.style"
import { PlayPause } from "../play_button/play-pause"
import { MetroB } from "../metro_button/metro_button"
import { ButtonWithPopover } from "../button-with-popover/button-with-popover.component"
import { BpmContainer } from "../bpm.container"

interface IProps {
    numSides: number[]
    timeSignature1: string | null
    timeSignature2: string | null
}

export class RightPanel extends React.Component<IProps, any> {
    private onMetroClick_1 = () => {
        Metro.handleClick_1()
    }
    private onMetroClick_2 = () => {
        Metro.handleClick_2()
    }
    private metroPause = () => {
        Metro.metroPause()
    }
    private metro2Pause = () => {
        Metro.metro2Pause()
    }

    private onSoundClick = () => {
        MainSketch.chooseSound()
    }
    private pause_1 = () => {
        MainSketch.stop_sequencer_1()
        MainSketch.stop_sequencer_2()
    }

    private play_1 = () => {
        MainSketch.updateGrains_1()
        MainSketch.updateGrains_2()
    }

    get numSides(): number[] {
        return MainSketch.getNumSides()
    }

    public render() {
        const { numSides, timeSignature1, timeSignature2 } = this.props
        console.log("render rightPanel", this.numSides)

        return (
            <div style={{ marginTop: "12px" }}>
                <ButtonWithPopover
                    id="test-popover"
                    placement="bottom"
                    title="Audio Panel"
                    showIcon
                    btnText="Click me"
                    renderPopoverContent={this.renderPopoverContent as any}
                />
                <Container>
                    <div className="d-flex justify-content-center">
                        <BpmContainer />
                    </div>

                    <div className="row">
                        <MetroB play={this.onMetroClick_1} pause={this.metroPause} />

                        <h6 style={{ marginTop: "1.6em" }}>Clock 1</h6>
                    </div>

                    
                    <div className="row">
                        <MetroB play={this.onMetroClick_2} pause={this.metro2Pause} />

                        <h6 style={{ marginTop: "1.6em" }}>Clock 2</h6>
                    </div>
                    <div className="row">
                        <PlayPause play={this.play_1} pause={this.pause_1} />

                        <h6 style={{ marginTop: "1.6em" }}>Global Transport</h6>
                    </div>



                    <Button
                        text="Instrument"
                        icon="music player fill"
                        onMouseDown={this.onSoundClick}
                        style={{ marginTop: "2em", marginBottom: "3pxem" }}
                    />
                </Container>

                {numSides.length >= 2 && (
                    <div>
                        <div className="alert alert-info" role="alert" style={{ marginTop: "1.5em" }}>
                            <b>
                                <i style={{ marginTop: "1.6em" }}>Polyrhythm Layer 1</i>
                            </b>
                            {numSides.map((num) => (
                                <i>: {num} </i>
                            ))}
                        </div>
                    </div>
                )}
                {timeSignature1 && timeSignature2 && timeSignature1 != timeSignature2 && (
                    <div>
                        <div className="alert alert-info" role="alert" style={{ marginTop: "1.5em" }}>
                            <p>
                                <b>
                                    <i>Polymeter </i>
                                </b>
                                <i>
                                    {timeSignature1} : {timeSignature2}
                                </i>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    private renderPopoverContent = () => {
        return <p>Here you can manage all the audio features of the interface, the default BPM is set to 120.</p>
    }
}
