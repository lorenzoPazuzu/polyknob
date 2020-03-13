import Tone from "tone"
import { Tick } from "src/engines"

import "./metronome.css"

class Metro_N {
    private tick: any
    private start_meaure_tick: any
    private tick_2: any
    private start_meaure_tick_2: any
    public loopId_1: number
    public loopId_2: number

    private measure: String = ""
    private measure_2: String = ""
    private num: number = 4
    private den: number = 4
    private num_2: number = 4
    private den_2: number = 4
    private isPlaying_1: boolean = false
    private isPlaying_2: boolean = false
    constructor() {
        this.tick = new Tick("C5")
        this.start_meaure_tick = new Tick("E5")
        this.tick_2 = new Tick("G5")
        this.start_meaure_tick_2 = new Tick("A5")
        this.loopId_1 = 0
        this.loopId_2 = 0
        Tone.Transport.loop = false
    }
    setTS_1 = (value: String) => {
        this.num = Number(value.substring(0, 1))
        this.den = Number(value.substring(2))
        let val = this.mapping(value)
        if (val !== undefined) this.measure = val

        return this
    }
    setTS_2 = (value: String) => {
        this.num_2 = Number(value.substring(0, 1))
        this.den_2 = Number(value.substring(2))
        let val = this.mapping(value)
        if (val !== undefined) this.measure_2 = val

        return this
    }
    mapping = (val: String) => {
        let num = Number(val.substring(0, 1))
        let den = Number(val.substring(2))
        if (den === 4) {
            if (num === 5) return "0:5"
            if (num === 3) return "0:3"
            if (num === 4) return "1:0"
        } else {
            if (den === 8) {
                if (num === 9) return "0:4:2"
                if (num === 7) return "0:3:2"
            }
        }
        return "1:2"
        //end
    }
    createLoop_1 = () => {
        const loop = (time: number) => {
            for (let i = 0; i < this.num; i++) {
                if (i === 0) {
                    this.start_meaure_tick.trigger(time)
                } else {
                    this.tick.trigger(time + i * Tone.Time(this.den + "n").toSeconds())
                }
            }
            //DO DRAWINGS HERE
        } //the function callback "const loop" is called at the beginning of every measure (long as the time signature) at the choosen bpm, the trigger is scheduled in order to have a beat of metronome at EXACTLY Time('4n').toSeconds() that is the distance of quarter notes at any given bpm. The tracks and metronome are indipendent (for now).
        if (this.measure !== "")
            this.loopId_1 = Tone.Transport.scheduleRepeat(loop, this.measure, "0")
    }

    public handleClick_1 = () => {
        this.createLoop_1()
        if (Tone.Transport.state !== "started") Tone.Transport.start()
    }
    createLoop_2 = () => {
        const loop = (time: number) => {
            for (let i = 0; i < this.num_2; i++) {
                if (i === 0) {
                    this.start_meaure_tick_2.trigger(time)
                    //metronome
                } else {
                    this.tick_2.trigger(time + i * Tone.Time(this.den_2 + "n").toSeconds())
                }
            }
            //DO DRAWINGS HERE
        } //the function callback "const loop" is called at the beginning of every measure (long as the time signature) at the choosen bpm, the trigger is scheduled in order to have a beat of metronome at EXACTLY Time('4n').toSeconds() that is the distance of quarter notes at any given bpm. The tracks and metronome are indipendent (for now).
        if (this.measure_2 !== "")
            this.loopId_2 = Tone.Transport.scheduleRepeat(loop, this.measure_2, "0")
    }

    public handleClick_2 = () => {
        this.createLoop_2()
        if (Tone.Transport.state !== "started") Tone.Transport.start()
    }
    public metroPause = () => {
        Tone.Transport.clear(this.loopId_1)
    }
    public metro2Pause = () => {
        Tone.Transport.clear(this.loopId_2)
    }
}

export const Metro = new Metro_N()
