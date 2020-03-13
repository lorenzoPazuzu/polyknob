import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./root.component.scss"
import { Drawer } from "../components/drawer/drawer.component"
import { ControlPanel } from "../components/control-panel/control-panel.component"
import { RightPanel } from "../components/right-panel/right-panel.component"
import { FooterPanel } from "../components/footer-panel/footer-panel.component"
import { subscribeToTimer } from "../api"
import { ModeSelection } from "../components/mode-selection/mode-selection.component"
import { AppContext } from "./app-context"
import { MainSketch } from "../sketches/sketch"

export enum AppMode {
    Play,
    Learn
}

interface State {
    appMode: AppMode | null
    timestamp: string
    timeSignature1: string | null
    timeSignature2: string | null
    numSides: number[]
}

export class RootComponent extends React.Component<any, State> {
    constructor(props) {
        super(props)
        subscribeToTimer((err, timestamp) =>
            this.setState({
                timestamp
            })
        )
    }

    public state = {
        appMode: null,
        numSides: [],
        timestamp: "",
        timeSignature1: null,
        timeSignature2: null
    }

    public render() {
        const { appMode, numSides, timeSignature1, timeSignature2 } = this.state
        const noModeSelected = appMode === null
        const backgroundColor = appMode === AppMode.Learn ? "#17a2b8" : "#348781"
        MainSketch.setEncoder(String(this.state.timestamp))

        return (
            <AppContext.Provider value={{ appMode }}>
                <div className="App">
                    {noModeSelected && <ModeSelection onClick={this.onClick} />}
                    {!noModeSelected && (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 control-column">
                                    <ControlPanel
                                        onFirstLayerSubmit={this.onFirstLayerSubmit}
                                        onSecondLayerSubmit={this.onSecondLayerSubmit}
                                    />
                                </div>

                                <div
                                    id="centralSquare"
                                    className="col-8"
                                    style={{ position: "relative", backgroundColor }}
                                >
                                    <Drawer />
                                </div>

                                <div className="col-2 control-column">
                                    <RightPanel
                                        timeSignature1={timeSignature1}
                                        timeSignature2={timeSignature2}
                                        numSides={numSides}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 control-column">
                                    <FooterPanel onChangeShape={this.onChangeShape} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </AppContext.Provider>
        )
    }

    private onFirstLayerSubmit = (timeSignature) => {
        this.setState({
            timeSignature1: timeSignature
        })
    }

    private onSecondLayerSubmit = (timeSignature) => {
        this.setState({
            timeSignature2: timeSignature
        })
    }

    private onChangeShape = (numSides: number[]) => {
        this.setState({ numSides })
    }

    private onClick = (mode: AppMode) => {
        this.setState({
            appMode: mode
        })
        console.log(this.state.appMode)
        MainSketch.setAppMode(mode)
        // TODO: do something more with the mode just selected
    }
}
