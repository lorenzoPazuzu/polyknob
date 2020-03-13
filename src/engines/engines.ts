import { Player } from "tone"

const kk = require("../assests/kick.wav")
const s1 = require("../assests/snare1.wav")
const s2 = require("../assests/snare2.wav")
const clp = require("../assests/clap.wav")
const stk = require("../assests/stick.wav")
const blS = require("../assests/blastBlock.wav")
const cHH = require("../assests/closedHH.wav")
const oHH = require("../assests/openHH.wav")
const egg = require("../assests/egg.wav")
const tmH = require("../assests/tomHigh.wav")
const tmL = require("../assests/tomFloor.wav")

export class Engines {
    public drumKit: any = []

    constructor() {
        this.drumKit[0] = new Player(kk).toMaster()
        this.drumKit[1] = new Player(s1).toMaster()
        this.drumKit[2] = new Player(s2).toMaster()
        this.drumKit[3] = new Player(clp).toMaster()
        this.drumKit[4] = new Player(blS).toMaster()
        this.drumKit[5] = new Player(cHH).toMaster()
        this.drumKit[6] = new Player(oHH).toMaster()
        this.drumKit[7] = new Player(egg).toMaster()
        this.drumKit[7] = new Player(stk).toMaster()
        this.drumKit[8] = new Player(tmH).toMaster()
        this.drumKit[9] = new Player(tmL).toMaster()
    }
}
