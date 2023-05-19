/* キーボード押下関連の処理 */

function initialize() {
    // イベント設定
    document.addEventListener('keydown', keydown);
    document.getElementById('selected_scale1').classList.add('selectedScaleColor');
}

// キーボード押下時の処理実装
function keydown(event) {
    // スケール切り替え
    if ('ArrowUp' == event.key || 'ArrowDown' == event.key) {
        scaleChange('ArrowUp' == event.key);
        return;
    }
    // コード演奏の場合
    let keys = Object.keys(keyboardMap);
    for (let i = 0; i < keys.length; i++) {
        if (keyboardMap[keys[i]] == event.key) {
            let chordButtonId = keys[i] + String(selectedScaleNo);
            let minorChordButtonId = 'm' + chordButtonId;
            if (document.getElementById(chordButtonId) || document.getElementById(minorChordButtonId)) {
                let element = document.getElementById(chordButtonId);
                if (!element) element = document.getElementById(minorChordButtonId);
                if (element.type == 'button' || element.type == 'reset' || element.type == 'submit') {
                    let id = chordButtonId;
                    if (isMinor(selectedScaleNo)) id = 'm' + id;
                    document.getElementById(id).dispatchEvent(new Event('click'));
                }
            }
            else if (document.getElementById(keys[i])) {
                let element = document.getElementById(keys[i]);
                let id = keys[i];
                if (element.type == 'button' || element.type == 'reset' || element.type == 'submit') {
                    document.getElementById(id).dispatchEvent(new Event('click'));
                }
                else if (element.type == 'radio') {
                    let save = document.getElementById(id).checked;
                    document.getElementById(id).checked = !save;
                    // ラジオボタンのチェックが無しになったらnoneをチェックする
                    if (save) document.getElementById('rdnone').checked = true;
                }
            }
            return;
        }
    }
}

function scaleChange(up) {
    if (up) {
        if (selectedScaleNo == 1) return;
        --selectedScaleNo;
    }
    else {
        if (selectedScaleNo == 5) return;
        ++selectedScaleNo;
    }
    for (let i = 1; i < 6; i++) document.getElementById('selected_scale' + String(i)).classList.remove('selectedScaleColor');
    document.getElementById('selected_scale' + String(selectedScaleNo)).classList.add('selectedScaleColor');
}

initialize();