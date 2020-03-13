import * as React from "react"

import "./bpm.style.css"

export interface BPMProps {
    handleChange: (value: number) => void
    value: number
}

export class BPM extends React.Component<BPMProps> {
    handleChange = (e) => {
        const val = e.target.value

        this.props.handleChange(val)
        if (val > 30 && val < 300) {
        }
    }
    render() {
        return (
            <div style={{ display: "inline-block", flex: 1, flexDirection: "row" }}>
                <input  onChange={this.handleChange} className="bpm" />
                <h5 style={{ textAlign: "center" }}>BPM</h5>
            </div>
        )
    }
}
