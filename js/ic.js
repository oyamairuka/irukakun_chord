// play関数の中で利用されるシンセサイザー
const polySynth = new Tone.PolySynth(Tone.Synth).toDestination();

var now = null;
var currentNoteNames = null;

/* 初期化処理 */
function initialize() {

    // イベント設定
    document.getElementById('major_scale_select').addEventListener('change', (e) => {
        setScale(e, 'selected_major_scale', false);
    });
    document.getElementById('minor_scale_select').addEventListener('change', (e) => {
        setScale(e, 'selected_minor_scale', true);
    });

    window.addEventListener("load", () => {
        setChordButtonEvent();
    });

    // 調の初期値
    document.getElementById('major_scale_select').value = 'C';
    document.getElementById('major_scale_select').dispatchEvent(new Event('change'));
    document.getElementById('minor_scale_select').value = 'Am';
    document.getElementById('minor_scale_select').dispatchEvent(new Event('change'));

}

function play(noteNames) {
    if (noteNames) {
        now = Tone.now();
        polySynth.triggerAttack(noteNames, now);
        currentNoteNames = noteNames;
    }
}

function stop() {
    if (currentNoteNames) polySynth.triggerRelease(currentNoteNames, now + 0.5);
    currentNoteNames = null
}

function clearChordProgression() {
    document.getElementById('chordProgression').innerHTML = "";
}

function setScale(event, id, isMinor) {
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
    let no = 1;
    scaleMap[event.target.value].forEach(e => {
        let d = document.createElement('div');
        d.classList.add('cell');
        let prot = document.getElementsByName(e)[0];
        let b = prot.cloneNode(true);
        b.classList.remove('chordBoxButton');
        b.classList.add('chordButton');
        // 生成したコードボタンにidを設定
        b.id = 'chord' + String(no);
        if (isMinor) {
            b.id = 'm' + b.id;
        }
        no++;
        d.appendChild(b);
        document.getElementById(id).appendChild(d);
    });

    setChordButtonEvent();
}

function setChordButtonEvent() {
    chordNames.forEach(name => {
        const buttons = document.getElementsByName(name);
        buttons.forEach(button => {
            button.onclick = async () => {
                clearButtonCss();
                await Tone.start();
                stop();
                var chordName = GetChordName(name);
                play(chordMap[chordName]);
                if (chordMap[chordName]) {
                    button.classList.add('clicked');
                    addChordProgression(chordName);
                }
            };
        });
    });
}

function clearButtonCss() {
    chordNames.forEach(name => {
        const buttons = document.getElementsByName(name);
        buttons.forEach(button => {
            button.classList.remove('clicked');
        });
    });
}

function addChordProgression(chordName) {
    var save = chordName;
    if (document.getElementById('chordProgression').innerHTML) { save = " → " + chordName; }
    document.getElementById('chordProgression').innerHTML += save;
}

function GetChordName(baseChordName) {
    // TODO: 追加の和音も含めて構成音を判断する
    let elements = document.getElementsByName('add_chord');
    let len = elements.length;
    let checkValue = '';
    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
            break;
        }
    }
    var result = baseChordName;
    switch (checkValue) {
        case 'rdaug':
            result += 'aug';
            break;
        case 'rd7':
            result += '7';
            break;
        case 'rdmaj7':
            result += 'maj7';
            break;
        case 'rd6':
            result += '6';
            break;
        case 'rd9':
            result += '9';
            break;
        case 'rdmaj9':
            result += 'maj9';
            break;
        case 'rd11':
            result += '11';
            break;
        case 'rdmaj11':
            result += 'maj11';
            break;
        case 'rd13':
            result += '13';
            break;
        case 'rdmaj13':
            result += 'maj13';
            break;
        case 'rdadd9':
            result += 'add9';
            break;
        case 'rd69':
            result += '69';
            break;
        case 'rd7b5':
            result += '7b5';
            break;
        case 'rd7b9':
            result += '7b9';
            break;
        case 'rd7s9':
            result += '7s9';
            break;
        case 'rd5':
            result += '5';
            break;
        case 'rdsus4':
            result += 'sus4';
            break;
        case 'rdsus2':
            result += 'sus2';
            break;
        case 'rd7sus4':
            result += '7sus4';
            break;
    }
    return result;
}

initialize();