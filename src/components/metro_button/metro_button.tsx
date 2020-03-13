import * as React from "react"
import "../metro_button/metro.css"

export class MetroB extends React.Component<any, any> {
    constructor(props) {
        super(props)

        this.state = {
            playing: false
        }
    }

    public handleClick = () => {
        if (this.state.playing) {
            this.props.pause()
        } else {
            this.props.play()
        }
        this.setState({
            playing: !this.state.playing
        })
    }
    render() {
        const playClassName = "m_playButton" + (this.state.playing ? " m_pauseButton" : "")
        return <div onClick={this.handleClick} className={playClassName} />
    }
}
