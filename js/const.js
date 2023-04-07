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
// TODO: 追加の和音分を加える
const chordMap = {
    // C
    C: ["C3", "E3", "G3", "C4", "E4"],
    Cm: ["C3", "G3", "C4", "Eb4", "G4"],
    Cmb5: ["C3", "Gb3", "C4", "Eb4"],
    Caug: ["G#4", "C4", "G#3", "E3", "C3"],
    C7: ["E4", "C4", "Bb3", "E3", "C3"],
    Cm7: ["G4", "Eb4", "Bb3", "G3", "C3"],
    Cmb57: ["Gb4", "C4", "A3", "Eb3", "C3"],
    C5: ["C3", "G3", "C4"],
    Csus4: ["F4", "C4", "G3", "F3", "C3"],
    Csus2: ["C3", "D3", "G3", "D4", "G4"],
    C7sus4: ["C3", "F3", "Bb3", "C4", "F4"],
    // Cs
    Cs: ["C#3", "E#3", "G#3", "C#4", "E#4"],
    Csm: ["C#3", "G#3", "C#4", "E4", "G#4"],
    Csmb5: ["C#3", "E3", "G3", "C#4", "E4"],
    Csaug: ["A4", "C#4", "A3", "F3", "C#3"],
    Cs5: ["C#3", "G#3", "C#4"],
    Cssus4: ["C#3", "F#3", "C#4", "F#4", "G#4"],
    Cssus2: ["C#3", "D#3", "G#3", "C#4"],
    Cs7sus4: ["C#3", "F#3", "B3", "C#4", "F#4"],
    // Cb
    Cb: ["Cb3", "Gb3", "Cb4", "Eb4", "Gb4"],
    Cbm: ["Cb3", "Gb3", "Cb4", "D4", "Gb4"],
    Cbmb5: ["Cb3", "D3", "Cb4", "D4", "F4"],
    Cbaug: ["G4", "B3", "G3", "Eb3", "B2"],
    Cb5: ["B2", "Gb3", "B3"],
    Cbsus4: ["B2", "E3", "B3", "E4", "Gb4"],
    Cbsus2: ["B2", "Gb3", "B3", "Db4", "Gb4"],
    Cb7sus4: ["B2", "E3", "A3", "B3", "E4"],
    // D
    D: ["D3", "A3", "D4", "F#4"],
    Dm: ["D3", "A3", "D4", "F4"],
    Dmb5: ["D3", "Ab3", "D4", "F4"],
    Daug: ["F#4", "D4", "A#3", "D3"],
    D5: ["D3", "A3", "D4", "A4"],
    Dsus4: ["D3", "G3", "D4", "A4"],
    Dsus2: ["D3", "A3", "D4", "E4"],
    D7sus4: ["D3", "C4", "D4", "G4"],
    // Ds
    Ds: ["D#3", "A#3", "D#4", "G4"],
    Dsm: ["D#3", "A#3", "D#4", "F#4"],
    Dsmb5: ["D#3", "A3", "D#4", "F#4"],
    Dsaug: ["G4", "B3", "G3", "D#3"],
    Ds5: ["D#3", "A#3", "D#4"],
    Dssus4: ["D#3", "A#3", "D#4", "G#4"],
    Dssus2: ["D#3", "A#3", "D#4", "F4"],
    Ds7sus4: ["D#3", "G#3", "C#4", "G#4"],
    // Db
    Db: ["Db3", "F3", "Ab3", "Db4", "F4"],
    Dbm: ["Db3", "Ab3", "Db4", "E4", "Ab4"],
    Dbmb5: ["Db3", "Fb3", "G3", "Db4", "Fb4"],
    Dbaug: ["A4", "Db4", "A3", "F3", "Db3"],
    Db5: ["Db3", "Ab3", "Db4"],
    Dbsus4: ["Db3", "Gb3", "Db4", "Gb4", "Ab4"],
    Dbsus2: ["Db3", "Eb3", "Ab3", "Db4"],
    Db7sus4: ["Db3", "Gb3", "B3", "Db4", "Gb4"],
    // E
    E: ["E2", "B2", "E3", "G#3", "B3", "E4"],
    Em: ["E2", "B2", "E3", "G3", "B3", "E4"],
    Emb5: ["E2", "Bb2", "E3", "G3"],
    Eaug: ["G#4", "C4", "G#3", "E3", "C3", "E2"],
    E5: ["E2", "B2", "E3"],
    Esus4: ["E2", "A2", "E3", "A3", "B3", "E4"],
    Esus2: ["E2", "B2", "E3", "B3", "E4", "F#4"],
    E7sus4: ["E2", "A2", "D3", "A3", "B3", "E4"],
    // Es
    Es: ["E#2", "B#2", "E#3", "A3", "B#3", "E#4"],
    Esm: ["E#2", "B#2", "E#3", "G#3", "B#3", "E#4"],
    Esmb5: ["E#2", "B2", "E#3", "G#3", "B3"],
    Esaug: ["C#4", "A3", "F3", "A2", "F2"],
    Es5: ["F2", "C3", "F3"],
    Essus4: ["F2", "A#2", "F3", "A#3", "C4", "F4"],
    Essus2: ["F3", "G3", "C4", "F4"],
    Es7sus4: ["F2", "A#2", "D#3", "A#3", "C4", "F4"],
    // Eb
    Eb: ["Eb3", "Bb3", "Eb4", "G4"],
    Ebm: ["Eb3", "Bb3", "Eb4", "Gb4"],
    Ebmb5: ["Eb3", "A3", "Eb4", "Gb4"],
    Ebaug: ["G4", "B3", "G3", "Eb3"],
    Eb5: ["Eb3", "Bb3", "Eb4"],
    Ebsus4: ["Eb3", "Bb3", "Eb4", "Ab4"],
    Ebsus2: ["Eb3", "Bb3", "Eb4", "F4"],
    Eb7sus4: ["Eb3", "Ab3", "Db4", "Ab4"],
    // F
    F: ["F2", "C3", "F3", "A3", "C4", "F4"],
    Fm: ["F2", "C3", "F3", "Ab3", "C4", "F4"],
    Fmb5: ["F2", "Cb3", "F3", "Ab3", "Cb4"],
    Faug: ["C#4", "A3", "F3", "A2", "F2"],
    F5: ["F2", "C3", "F3"],
    Fsus4: ["F4", "C4", "Bb3", "F3", "Bb2", "F2"],
    Fsus2: ["F3", "G3", "C4", "F4"],
    F7sus4: ["F2", "Bb2", "Eb3", "Bb3", "C4", "F4"],
    // Fs
    Fs: ["F#2", "C#3", "F#3", "A#3", "C#4", "F#4"],
    Fsm: ["F#2", "C#3", "F#3", "A3", "C#4", "F#4"],
    Fsmb5: ["F#2", "C3", "F#3", "A3"],
    Fsaug: ["D4", "A#3", "D3", "A#2", "F#2"],
    Fs5: ["F#2", "C#3", "F#3"],
    Fssus4: ["F#4", "C#4", "B3", "F#3", "B2", "F#2"],
    Fssus2: ["F#3", "G#3", "C#4"],
    Fs7sus4: ["F#2", "B2", "E3", "B3", "C#4", "F#4"],
    // Fb
    Fb: ["Fb2", "Cb3", "Fb3", "Ab3", "Cb4", "Fb4"],
    Fbm: ["Fb2", "Cb3", "Fb3", "G3", "Cb4", "Fb4"],
    Fbmb5: ["Fb2", "Bb2", "Fb3", "G3"],
    Fbaug: ["Ab4", "C4", "Ab3", "E3", "C3", "E2"],
    Fb5: ["E2", "B2", "E3"],
    Fbsus4: ["E2", "A2", "E3", "A3", "B3", "E4"],
    Fbsus2: ["E2", "B2", "E3", "B3", "E4", "Gb4"],
    Fb7sus4: ["E2", "A2", "D3", "A3", "B3", "E4"],
    // G
    G: ["G2", "B2", "D3", "G3", "B3", "G4"],
    Gm: ["G2", "Bb2", "D3", "G3", "D4", "G4"],
    Gmb5: ["G2", "Db3", "G3", "Bb3"],
    Gaug: ["G4", "B3", "G3", "D#3", "B2", "G2"],
    G5: ["G2", "D3", "G3"],
    Gsus4: ["G2", "C3", "D3", "G3", "D4", "G4"],
    Gsus2: ["G2", "A2", "D3", "G3", "D4", "G4"],
    G7sus4: ["G2", "C3", "D3", "G3", "C4", "F4"],
    // Gs
    Gs: ["G#2", "D#3", "G#3", "C4", "D#4", "G#4"],
    Gsm: ["G#2", "D#3", "G#3", "B3", "D#4", "G#4"],
    Gsmb5: ["G#2", "B2", "D3", "G#3", "B3"],
    Gsaug: ["C4", "G#3", "E3", "C3", "G#2"],
    Gs5: ["G#2", "D#3", "G#3"],
    Gssus4: ["G#2", "D#3", "G#3", "C#4", "D#4", "G#4"],
    Gssus2: ["G#2", "A#2", "D#3", "A#3", "D#4"],
    Gs7sus4: ["G#2", "D#3", "F#3", "C#4", "D#4", "G#4"],
    // Gb
    Gb: ["Gb2", "Db3", "Gb3", "Bb3", "Db4", "Gb4"],
    Gbm: ["Gb2", "Db3", "Gb3", "A3", "Db4", "Gb4"],
    Gbmb5: ["Gb2", "C3", "Gb3", "A3"],
    Gbaug: ["D4", "Bb3", "D3", "Bb2", "Gb2"],
    Gb5: ["Gb2", "Db3", "Gb3"],
    Gbsus4: ["Gb2", "B2", "Gb3", "B3", "Db4", "Gb4"],
    Gbsus2: ["Gb3", "Ab3", "Db4"],
    Gb7sus4: ["Gb2", "B2", "E3", "B3", "Db4", "Gb4"],
    // A
    A: ["A2", "E3", "A3", "C#4", "E4"],
    Am: ["A2", "E3", "A3", "C4", "E4"],
    Amb5: ["A2", "Eb3", "A3", "C4"],
    Aaug: ["F4", "C#4", "A3", "F3", "A2"],
    A5: ["A2", "E3", "A3"],
    Asus4: ["A2", "E3", "A3", "D4", "E4"],
    Asus2: ["A2", "E3", "A3", "B3", "E4"],
    A7sus4: ["A2", "E3", "G3", "D4", "E4"],
    // As
    As: ["A#2", "E#3", "A#3", "D4", "E#4"],
    Asm: ["A#2", "E#3", "A#3", "C#4", "E#4"],
    Asmb5: ["A#2", "E3", "A#3", "C#4"],
    Asaug: ["F#4", "D4", "A#3", "D3", "A#2"],
    As5: ["A#2", "F3", "A#3"],
    Assus4: ["A#2", "D#3", "A#3", "D#4", "F4"],
    Assus2: ["A#2", "F3", "A#3", "C4", "F4"],
    As7sus4: ["A#2", "D#3", "G#3", "D#4", "F4"],
    // Ab
    Ab: ["Ab2", "Eb3", "Ab3", "C4", "Eb4", "Ab4"],
    Abm: ["Ab2", "Eb3", "Ab3", "Cb4", "Eb4", "Ab4"],
    Abmb5: ["Ab2", "Cb3", "D3", "Ab3", "Cb4"],
    Abaug: ["C4", "Ab3", "E3", "C3", "Ab2"],
    Ab5: ["Ab2", "Eb3", "Ab3"],
    Absus4: ["Ab2", "Eb3", "Ab3", "Db4", "Eb4", "Ab4"],
    Absus2: ["Ab2", "Bb2", "Eb3", "Bb3", "Eb4"],
    Ab7sus4: ["Ab2", "Eb3", "Gb3", "Db4", "Eb4", "Ab4"],
    // B
    B: ["B2", "F#3", "B3", "D#4", "F#4"],
    Bm: ["B2", "F#3", "B3", "D4", "F#4"],
    Bmb5: ["B2", "D3", "B3", "D4", "F4"],
    Baug: ["G4", "B3", "G3", "D#3", "B2"],
    B5: ["B2", "F#3", "B3"],
    Bsus4: ["B2", "E3", "B3", "E4", "F#4"],
    Bsus2: ["B2", "F#3", "B3", "C#4", "F#4"],
    B7sus4: ["B2", "E3", "A3", "B3", "E4"],
    // Bs
    Bs: ["B#2", "E3", "B#3", "G3", "E4"],
    Bsm: ["B#2", "G3", "B#3", "D#4", "G4"],
    Bsmb5: ["B#2", "F#3", "B#3", "D#4"],
    Bsaug: ["G#4", "C4", "G#3", "E3", "C3"],
    Bs5: ["C3", "G3", "C4"],
    Bssus4: ["C3", "F3", "G3", "C4", "F4"],
    Bssus2: ["C3", "D3", "G3", "D4", "G4"],
    Bs7sus4: ["C3", "F3", "A#3", "C4", "F4"],
    // Bb
    Bb: ["Bb2", "F3", "Bb3", "D4", "F4"],
    Bbm: ["Bb2", "F3", "Bb3", "Db4", "F4"],
    Bbmb5: ["Bb2", "E3", "Bb3", "Db4"],
    Bbaug: ["F#4", "D4", "Bb3", "D3", "Bb2"],
    Bb5: ["Bb2", "F3", "Bb3"],
    Bbsus4: ["Bb2", "Eb3", "Bb3", "Eb4", "F4"],
    Bbsus2: ["Bb2", "F3", "Bb3", "C4", "F4"],
    Bb7sus4: ["Bb2", "Eb3", "Ab3", "Eb4", "F4"],
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

// キーボードと和音のマッピング
const keyboardMap = {
    // コードボタン
    chord1: 'a',
    chord2: 's',
    chord3: 'd',
    chord4: 'f',
    chord5: 'j',
    chord6: 'k',
    chord7: 'l',
    // メジャーマイナー切り替え
    major_or_minor: 'm',
    // ストップボタン
    stopButton: 'q',
    // クリアボタン
    clearButton: 'c',
    // 追加のコード
    rdnone: '1',
    rdaug: 't',
    rd7: '7',
    rdmaj7: 'u',
    rd6: '6',
    rd9: '9',
    rdmaj9: 'o',
    rd11: '-',
    rdmaj11: '^',
    rd13: '3',
    rdmaj13: 'e',
    rdadd9: '0',
    rd69: '8',
    rd7b5: 'y',
    rd7b9: 'p',
    rd7s9: ';',
    rd5: '5',
    rdsus4: '4',
    rdsus2: '2',
    rd7sus4: 'i'
};