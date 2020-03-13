import React from "react"
import Sketch from "react-p5"
import * as P5 from "p5"
import { MainSketch, P5Sketch } from "../../sketches/sketch"

export class Drawer extends React.Component<any, any> {
    private readonly sketches: P5Sketch[] = []

    constructor(props: any) {
        super(props)

        this.sketches = [MainSketch]
    }

    public render() {
        return <Sketch setup={this.setup as any} draw={this.draw as any} />
    }

    private setup = (p5: P5, canvasParentRef: "centralSquare") => {
        this.sketches[0].setup(p5, canvasParentRef)
    }

    private draw = (p5: P5, canvasParentRef: "centralSquare") => {
        this.sketches[0].draw(p5, canvasParentRef)
    }
}
