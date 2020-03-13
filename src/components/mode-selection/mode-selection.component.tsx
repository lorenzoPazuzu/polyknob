import React from "react"
import "./mode-selection.component.scss"
import { AppMode } from "../../app/root.component"
import logo from "src/img/Polyknob.png"

interface Props {
    onClick(mode: AppMode): void
}

export class ModeSelection extends React.Component<Props> {
    public render() {
        return (
            <div className="mode-selection">
                <div className="background" />
                <div className="content">
                    <img className="img-responsive" src={logo} alt="Polyknob" width="800" height="300"></img>
                    <div className="alert alert-warning">
                        Choose the modality you want to work with:
                        <ul>
                            <li>
                                <b>Play mode</b> is to freely explore the world of polyrhythms and polymeters
                            </li>
                            <li>
                                <b>Learn mode</b> is to be led into the creation of polyrhythms and polymeters
                            </li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn btn-info" onClick={this.onClick(AppMode.Play)}>
                            Play mode
                        </button>
                        <button className="btn btn-info" onClick={this.onClick(AppMode.Learn)}>
                            Learn mode
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    private onClick = (mode: AppMode) => {
        return (event) => {
            this.props.onClick(mode)
            event.preventDefault()
        }
    }
}
