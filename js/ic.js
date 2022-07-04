const chordNames = [
    "C", "Cm",
    "D", "Dm",
    "F", "Fm",
    "G", "Gm",
];

const chordMap = {
    C: ["C3", "E3", "G3", "C4", "E4"],
    Cm: ["C3", "G3", "C4", "Eb4", "G4"],
    D: ["D3", "A3", "D4", "F#4"],
    Dm: ["D3", "A3", "D4", "F4"],
    F: ["F2", "C3", "F3", "A3", "C4", "F4"],
    Fm: ["F2", "C3", "F3", "Ab3", "C4", "F4"],
    G: ["G2", "B2", "D3", "G3", "B3", "G4"],
    Gm: ["G2", "Bb2", "D3", "G3", "D4", "G4"],
};

window.addEventListener("load", () => {
    chordNames.forEach(name => {
        const button = document.getElementById(name);
        button.onclick = async () => {
            await Tone.start();
            play(chordMap[name]);
        };
    });
});

function play(noteNames) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    synth.triggerAttackRelease(noteNames, "4n");
}