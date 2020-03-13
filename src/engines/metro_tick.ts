import { Synth } from "tone"

export class Tick {
    private sound: any
    private tone: String

    constructor(tone: String) {
        this.sound = new Synth()
        this.tone = tone
    }

    setup() {
        this.sound.volume.value = -20
        this.sound.toMaster()
    }

    trigger(time: number) {
        this.setup()
        this.sound.triggerAttackRelease(this.tone, "30n", time)
    }
}
