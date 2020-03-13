import React from "react"
import { MainSketch } from "../../../sketches/sketch"
import { Metro } from "../../../sketches/metronome"
import { AppMode } from "src/app/root.component"
import { AppContext } from "../../../app/app-context"

export interface IState {
    selectedTimeSignature: string
    selectedNumberOfGrains: string
}

export interface IProps {
    layer: 1 | 2

    onSubmit(timeSignature: string, numberOfGrains: string)
}

export class TimeForm extends React.Component<IProps, IState> {
    public state = {
        selectedTimeSignature: "",
        selectedNumberOfGrains: ""
    }
    private timeSignature = ["4/4", "3/4", "9/8", "7/8", "5/4", "3/2"]
    private numberOfGrains = {
        "4/4": [4, 8, 12, 16, 20, 24, 28],
        "3/4": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
        "9/8": [9, 18, 27, 36],
        "7/8": [7, 14, 21, 28],
        "5/4": [5, 10, 15, 20, 25, 30],
        "3/2": [3, 6, 9, 12, 15, 18]
    }

    public render() {
        const { layer } = this.props
        const { selectedTimeSignature, selectedNumberOfGrains } = this.state
        const disabledNumberOfGrains = selectedTimeSignature === undefined

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label htmlFor="polyrhytm" className="col-sm-2 col-form-label">
                        <ul></ul>
                        <h5>Layer{layer}</h5>
                    </label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="polyrhytm" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="timeSignature">Time signature</label>
                    <select
                        className="form-control"
                        id="timeSignature"
                        onChange={this.onSelectTimeSignature}
                        value={selectedTimeSignature}
                    >
                        <option></option>
                        {this.timeSignature.map((o) => (
                            <option key={`option-${o}`}>{o}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfGrains">Number of grains</label>
                    <AppContext.Consumer>
                        {(context) => (
                            <>
                                {context.appMode === AppMode.Learn && (
                                    <select
                                        className="form-control"
                                        id="numberOfGrains"
                                        disabled={disabledNumberOfGrains}
                                        value={selectedNumberOfGrains}
                                        onChange={this.onSelectNumberOfGrains}
                                    >
                                        {selectedTimeSignature &&
                                            this.numberOfGrains[
                                                (selectedTimeSignature as unknown) as string
                                            ].map((o) => <option key={`option-${o}`}>{o}</option>)}
                                    </select>
                                )}
                                {context.appMode === AppMode.Play && (
                                    <input
                                        className="form-control"
                                        id="numberOfGrains"
                                        disabled={disabledNumberOfGrains}
                                        value={selectedNumberOfGrains}
                                        onChange={this.onSelectNumberOfGrains}
                                    />
                                )}
                            </>
                        )}
                    </AppContext.Consumer>
                </div>
                <button type="submit" className="btn btn-info btn-block">
                    Confirm
                </button>
            </form>
        )
    }

    private onSelectTimeSignature = (event) => {
        if(MainSketch.measure!=="" &&MainSketch.measure_2!==""){
            MainSketch.stop_sequencer_1()
            MainSketch.stop_sequencer_2()
            Metro.metroPause()
            Metro.metro2Pause()
            
        }
        this.setState({
            selectedTimeSignature: event.target.value,
            selectedNumberOfGrains: this.numberOfGrains[event.target.value][0]
        })
    }

    private onSelectNumberOfGrains = (event) => {
        this.setState({ selectedNumberOfGrains: event.target.value })
    }

    private onSubmit = (event) => {
        const { selectedTimeSignature, selectedNumberOfGrains } = this.state
        const { layer } = this.props
            
       
        
        if (selectedNumberOfGrains) {
            switch (layer) {
                case 1:
           
                
                    MainSketch.setNGrain(Number(selectedNumberOfGrains))
                    MainSketch.setTS1(String(selectedTimeSignature))
                    Metro.setTS_1(String(selectedTimeSignature))
                    MainSketch.generateShapes()
                    MainSketch.updateArrays()
                    MainSketch.triggerer()

                   
               
                    break
                case 2:
                    
                    MainSketch.setNGrain2(Number(selectedNumberOfGrains))
                    MainSketch.setTS2(String(selectedTimeSignature))
                    Metro.setTS_2(String(selectedTimeSignature))
                    MainSketch.generateShapes()
                    MainSketch.updateArrays()
                    MainSketch.triggerer()
                   
                  
                   
                  
                    break
            }
        }

        this.props.onSubmit(selectedTimeSignature, selectedNumberOfGrains)
        event.preventDefault()
    }
}
