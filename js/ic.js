// コード名称
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

// コード名と構成音の配列のマップ
const chordMap = {
    // C
    C: ["C3", "E3", "G3", "C4", "E4"],
    Cm: ["C3", "G3", "C4", "Eb4", "G4"],
    Cmb5: ["C3", "Gb3", "C4", "Eb4"],
    // Cs
    Cs: ["C#3", "E#3", "G#3", "C#4", "E#4"],
    Csm: ["C#3", "G#3", "C#4", "E4", "G#4"],
    Csmb5: ["C#3", "E3", "G3", "C#4", "E4"],
    // Cb
    Cb: ["Cb3", "Gb3", "Cb4", "Eb4", "Gb4"],
    Cbm: ["Cb3", "Gb3", "Cb4", "D4", "Gb4"],
    Cbmb5: ["Cb3", "D3", "Cb4", "D4", "F4"],
    // D
    D: ["D3", "A3", "D4", "F#4"],
    Dm: ["D3", "A3", "D4", "F4"],
    Dmb5: ["D3", "Ab3", "D4", "F4"],
    // Ds
    Ds: ["D#3", "A#3", "D#4", "G4"],
    Dsm: ["D#3", "A#3", "D#4", "F#4"],
    Dsmb5: ["D#3", "A3", "D#4", "F#4"],
    // Db
    Db: ["Db3", "F3", "Ab3", "Db4", "F4"],
    Dbm: ["Db3", "Ab3", "Db4", "E4", "Ab4"],
    Dbmb5: ["Db3", "Fb3", "G3", "Db4", "Fb4"],
    // E
    E: ["E2", "B2", "E3", "G#3", "B3", "E4"],
    Em: ["E2", "B2", "E3", "G3", "B3", "E4"],
    Emb5: ["E2", "Bb2", "E3", "G3"],
    // Es
    Es: ["E#2", "B#2", "E#3", "A3", "B#3", "E#4"],
    Esm: ["E#2", "B#2", "E#3", "G#3", "B#3", "E#4"],
    Esmb5: ["E#2", "B2", "E#3", "G#3", "B3"],
    // Eb
    Eb: ["Eb3", "Bb3", "Eb4", "G4"],
    Ebm: ["Eb3", "Bb3", "Eb4", "Gb4"],
    Ebmb5: ["Eb3", "A3", "Eb4", "Gb4"],
    // F
    F: ["F2", "C3", "F3", "A3", "C4", "F4"],
    Fm: ["F2", "C3", "F3", "Ab3", "C4", "F4"],
    Fmb5: ["F2", "Cb3", "F3", "Ab3", "Cb4"],
    // Fs
    Fs: ["F#2", "C#3", "F#3", "A#3", "C#4", "F#4"],
    Fsm: ["F#2", "C#3", "F#3", "A3", "C#4", "F#4"],
    Fsmb5: ["F#2", "C3", "F#3", "A3"],
    // Fb
    Fb: ["Fb2", "Cb3", "Fb3", "Ab3", "Cb4", "Fb4"],
    Fbm: ["Fb2", "Cb3", "Fb3", "G3", "Cb4", "Fb4"],
    Fbmb5: ["Fb2", "Bb2", "Fb3", "G3"],
    // G
    G: ["G2", "B2", "D3", "G3", "B3", "G4"],
    Gm: ["G2", "Bb2", "D3", "G3", "D4", "G4"],
    Gmb5: ["G2", "Db3", "G3", "Bb3"],
    // Gs
    Gs: ["G#2", "D#3", "G#3", "C4", "D#4", "G#4"],
    Gsm: ["G#2", "D#3", "G#3", "B3", "D#4", "G#4"],
    Gsmb5: ["G#2", "B2", "D3", "G#3", "B3"],
    // Gb
    Gb: ["Gb2", "Db3", "Gb3", "Bb3", "Db4", "Gb4"],
    Gbm: ["Gb2", "Db3", "Gb3", "A3", "Db4", "Gb4"],
    Gbmb5: ["Gb2", "C3", "Gb3", "A3"],
    // A
    A: ["A2", "E3", "A3", "C#4", "E4"],
    Am: ["A2", "E3", "A3", "C4", "E4"],
    Amb5: ["A2", "Eb3", "A3", "C4"],
    // As
    As: ["A#2", "E#3", "A#3", "D4", "E#4"],
    Asm: ["A#2", "E#3", "A#3", "C#4", "E#4"],
    Asmb5: ["A#2", "E3", "A#3", "C#4"],
    // Ab
    Ab: ["Ab2", "Eb3", "Ab3", "C4", "Eb4", "Ab4"],
    Abm: ["Ab2", "Eb3", "Ab3", "Cb4", "Eb4", "Ab4"],
    Abmb5: ["Ab2", "Cb3", "D3", "Ab3", "Cb4"],
    // B
    B: ["B2", "F#3", "B3", "D#4", "F#4"],
    Bm: ["B2", "F#3", "B3", "D4", "F#4"],
    Bmb5: ["B2", "D3", "B3", "D4", "F4"],
    // Bs
    Bs: ["B#2", "E3", "B#3", "G3", "E4"],
    Bsm: ["B#2", "G3", "B#3", "D#4", "G4"],
    Bsmb5: ["B#2", "F#3", "B#3", "D#4"],
    // Bb
    Bb: ["Bb2", "F3", "Bb3", "D4", "F4"],
    Bbm: ["Bb2", "F3", "Bb3", "Db4", "F4"],
    Bbmb5: ["Bb2", "E3", "Bb3", "Db4"],
};

// 調と音階のマップ
const scaleMap = {
    Cb: ["Cb", "Dbm", "Ebm", "Fb", "Gb", "Abm", "Bbmb5"],
    C: ["C", "Dm", "Em", "F", "G", "Am", "Bmb5"],
    Cs: ["Cs", "Dsm", "Esm", "Fs", "Gs", "Asm", "Bsmb5"],
    Db: ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cmb5"],
    D: ["D", "Em", "Fsm", "G", "A", "Bm", "Csmb5"],
    Eb: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Dmb5"],
    E: ["E", "Fsm", "Gsm", "A", "B", "Csm", "Dsmb5"],
    F: ["F", "Gm", "Am", "Bb", "C", "Dm", "Emb5"],
    Fs: ["Fs", "Gsm", "Asm", "B", "Cs", "Dsm", "Esmb5"],
    Gb: ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "Fmb5"],
    G: ["G", "Am", "Bm", "C", "D", "Em", "Fsmb5"],
    Ab: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gmb5"],
    A: ["A", "Bm", "Csm", "D", "E", "Fsm", "Gsmb5"],
    Bb: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Amb5"],
    B: ["B", "Csm", "Dsm", "E", "Fs", "Gsm", "Asmb5"],
    Cm: ["Cm", "Dmb5", "Eb", "Fm", "Gm", "Ab", "Bb"],
    Cms: ["Csm", "Dsmb5", "E", "Fsm", "Gsm", "A", "B"],
    Dm: ["Dm", "Emb5", "F", "Gm", "Am", "Bb", "C"],
    Dms: ["Dsm", "Esmb5", "Fs", "Gsm", "Asm", "B", "Cs"],
    Emb: ["Ebm", "Fmb5", "Gb", "Abm", "Bbm", "Cb", "Db"],
    Em: ["Em", "Fsmb5", "G", "Am", "Bm", "C", "D"],
    Fm: ["Fm", "Gmb5", "Ab", "Bbm", "Cm", "Db", "Eb"],
    Fms: ["Fsm", "Gsmb5", "A", "Bm", "Csm", "D", "E"],
    Gm: ["Gm", "Amb5", "Bb", "Cm", "Dm", "Eb", "F"],
    Gms: ["Gsm", "Asmb5", "B", "Csm", "Dsm", "E", "Fs"],
    Amb: ["Abm", "Bbmb5", "Cb", "Dbm", "Ebm", "Fb", "Gb"],
    Am: ["Am", "Bmb5", "C", "Dm", "Em", "F", "G"],
    Ams: ["Asm", "Bsmb5", "Cs", "Dsm", "Esm", "Fs", "Gs"],
    Bmb: ["Bbm", "Cmb5", "Db", "Ebm", "Fm", "Gb", "Ab"],
    Bm: ["Bm", "Csmb5", "D", "Em", "Fsm", "G", "A"],
};

// play関数の中で利用されるシンセサイザー
const polySynth = new Tone.PolySynth(Tone.Synth).toDestination();

/* 初期化処理 */
function initialize() {

    // イベント設定
    document.getElementById('major_scale_select').addEventListener('change', (e) => {
        setScale(e, 'selected_major_scale');
    });
    document.getElementById('minor_scale_select').addEventListener('change', (e) => {
        setScale(e, 'selected_minor_scale');
    });

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

    // 調の初期値
    document.getElementById('major_scale_select').value = 'C';
    document.getElementById('major_scale_select').dispatchEvent(new Event('change'));
    document.getElementById('minor_scale_select').value = 'Am';
    document.getElementById('minor_scale_select').dispatchEvent(new Event('change'));

}

function play(noteNames) {
    polySynth.triggerAttackRelease(noteNames, "8n");
}

function setScale(event, id) {
    // 子要素を全て削除
    while (document.getElementById(id).firstChild) {
        document.getElementById(id).removeChild(document.getElementById(id).firstChild)
    }
    // 調の名称を追加
    let h = document.createElement('div');
    h.classList.add('cell');
    h.textContent = event.target.options[event.target.selectedIndex].textContent;
    document.getElementById(id).appendChild(h);
    // コードボタンを追加
    scaleMap[event.target.value].forEach(e => {
        let d = document.createElement('div');
        d.classList.add('cell');
        let prot = document.getElementsByName(e)[0];
        let b = prot.cloneNode(true);
        b.classList.remove('chordBoxButton');
        b.classList.add('chordButton');
        b.onclick = async () => {
            await Tone.start();
            play(chordMap[b.name]);
        };
        d.appendChild(b);
        document.getElementById(id).appendChild(d);
    });
}

initialize();