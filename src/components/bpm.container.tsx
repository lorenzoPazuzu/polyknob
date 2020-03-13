import * as React from "react"
import { Transport } from "tone"
import { BPM } from "./bpm-component"

export class BpmContainer extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            bpm: 120
        }
    }

    handleBPMChange = (bpm: number) => {
        Transport.bpm.value = bpm
        this.setState({ bpm })
    }

    render() {
        return (
            <div style={{ display: "block" }}>
                <BPM handleChange={this.handleBPMChange} value={this.state.bpm} />
            </div>
        )
    }
}
