const chordNames = [
    "C", "Cm", "Cmb5",
    "Cs", "Csm", "Csmb5",
    "Cb", "Cbm", "Cbmb5",
    "D", "Dm", "Dmb5",
    "Ds", "Dsm", "Dsmb5",
    "Db", "Dbm", "Dbmb5",
    "E", "Em", "Emb5",
    "Es", "Esm", "Esmb5",
    "Eb", "Ebm", "Ebmb5",
    "F", "Fm", "Fmb5",
    "Fs", "Fsm", "Fsmb5",
    "Fb", "Fbm", "Fbmb5",
    "G", "Gm", "Gmb5",
    "Gs", "Gsm", "Gsmb5",
    "Gb", "Gbm", "Gbmb5",
    "A", "Am", "Amb5",
    "As", "Asm", "Asmb5",
    "Ab", "Abm", "Abmb5",
    "B", "Bm", "Bmb5",
    "Bs", "Bsm", "Bsmb5",
    "Bb", "Bbm", "Bbmb5",
];

const chordMap = {
    // C
    //C: ["C3"],
    C: ["C3", "E3", "G3", "C4", "E4"],
    Cm: ["C3", "G3", "C4", "Eb4", "G4"],
    // Cs
    Cs: ["C#3", "F3", "G#3", "C#4", "F4"],
    Csm: ["C#3", "G#3", "C#4", "E4", "G#4"],
    // Cb
    Cb: [],
    Cbm: [],
    // D
    D: ["D3", "A3", "D4", "F#4"],
    Dm: ["D3", "A3", "D4", "F4"],
    // Ds
    Ds: ["D#3", "A#3", "D#4", "G4"],
    Dsm: ["D#3", "A#3", "D#4", "F#4"],
    Dsmb5: ["D#3", "A3", "D#4", "F#4"],
    // Db
    Db: [],
    Dbm: [],
    // E
    E: ["E2", "B2", "E3", "G#3", "B3", "E4"],
    Em: ["E2", "B2", "E3", "G3", "B3", "E4"],
    // Es
    Es: [],
    Esm: [],
    // Eb
    Eb: [],
    Ebm: [],
    // F
    F: ["F2", "C3", "F3", "A3", "C4", "F4"],
    Fm: ["F2", "C3", "F3", "Ab3", "C4", "F4"],
    // Fs
    Fs: ["F#2", "C#3", "F#3", "A#3", "C#4", "F#4"],
    Fsm: ["F#2", "C#3", "F#3", "A3", "C#4", "F#4"],
    // Fb
    Fb: [],
    Fbm: [],
    // G
    G: ["G2", "B2", "D3", "G3", "B3", "G4"],
    Gm: ["G2", "Bb2", "D3", "G3", "D4", "G4"],
    // Gs
    Gs: ["G#2", "D#3", "G#3", "C4", "D#4", "G#4"],
    Gsm: ["G#2", "D#3", "G#3", "B3", "D#4", "G#4"],
    // Gb
    Gb: [],
    Gbm: [],
    // A
    A: ["A2", "E3", "A3", "C#4", "E4"],
    Am: ["A2", "E3", "A3", "C4", "E4"],
    // As
    As: [],
    Asm: [],
    // Ab
    Ab: [],
    Abm: [],
    // B
    B: ["B2", "F#3", "B3", "D#4", "F#4"],
    Bm: ["B2", "F#3", "B3", "D4", "F#4"],
    Bmb5: ["B2", "D3", "B3", "D4", "F4"],
    // Bs
    Bs: [],
    Bsm: [],
    // Bb
    Bb: [],
    Bbm: [],
};

window.addEventListener("load", () => {
    chordNames.forEach(name => {
        const buttons = document.getElementsByName(name);
        buttons.forEach(button => {
            button.onclick = async () => {
                await Tone.start();
                play(chordMap[name]);
            };
        });
    });
});

function play(noteNames) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    synth.triggerAttackRelease(noteNames, "4n");
}