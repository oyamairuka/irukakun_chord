const chordNames = [
    "C", "Cm", "Cm-5",
    "C#", "C#m", "C#m-5",
    "Cb", "Cbm", "Cbm-5",
    "D", "Dm", "Dm-5",
    "D#", "D#m", "D#m-5",
    "Db", "Dbm", "Dbm-5",
    "E", "Em", "Em-5",
    "E#", "E#m", "E#m-5",
    "Eb", "Ebm", "Ebm-5",
    "F", "Fm", "Fm-5",
    "F#", "F#m", "F#m-5",
    "Fb", "Fbm", "Fbm-5",
    "G", "Gm", "Gm-5",
    "G#", "G#m", "G#m-5",
    "Gb", "Gbm", "Gbm-5",
    "A", "Am", "Am-5",
    "A#", "A#m", "A#m-5",
    "Ab", "Abm", "Abm-5",
    "B", "Bm", "Bm-5",
    "B#", "B#m", "B#m-5",
    "Bb", "Bbm", "Bbm-5",
];

const chordMap = {
    // C
    C: ["C3", "E3", "G3", "C4", "E4"],
    Cm: ["C3", "G3", "C4", "Eb4", "G4"],
    // C#
    // Cb
    // D
    D: ["D3", "A3", "D4", "F#4"],
    Dm: ["D3", "A3", "D4", "F4"],
    // D#
    // Db
    // E
    // E#
    // Eb
    // F
    F: ["F2", "C3", "F3", "A3", "C4", "F4"],
    Fm: ["F2", "C3", "F3", "Ab3", "C4", "F4"],
    // F#
    // Fb
    // G
    G: ["G2", "B2", "D3", "G3", "B3", "G4"],
    Gm: ["G2", "Bb2", "D3", "G3", "D4", "G4"],
    // G#
    // Gb
    // A
    // A#
    // Ab
    // B
    // B#
    // Bb
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