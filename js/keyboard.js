/* キーボード押下関連の処理 */

function initialize() {
    // イベント設定
    document.addEventListener('keydown', keydown);
}

// キーボード押下時の処理実装
function keydown(event) {
    let keys = Object.keys(keyboardMap);
    for (let i = 0; i < keys.length; i++) {
        if (keyboardMap[keys[i]] == event.key) {
            if (document.getElementById(keys[i])) {
                let element = document.getElementById(keys[i]);
                let id = keys[i];
                if (element.type == 'button' || element.type == 'reset' || element.type == 'submit') {
                    if (document.getElementById('minor_radio').checked) {
                        id = 'm' + id;
                    }
                    document.getElementById(id).dispatchEvent(new Event('click'));
                }
                else if (element.type == 'radio') {
                    document.getElementById(id).checked = true;
                }
            }
            else if (document.getElementsByName(keys[i])) {
                // メジャーマイナー切り替え処理
                let elements = document.getElementsByName(keys[i]);
                let isRadio = false;
                elements.forEach(e => {
                    if (e.type = 'radio') {
                        isRadio = true;
                    }
                });
                if (isRadio) {
                    toggle(elements);
                }
            }
            return;
        }
    }
}

function toggle(radioButtons) {
    let flag = false;
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioButtons[i].checked = false;
            flag = true;
        }
        else if (flag) {
            radioButtons[i].checked = true;
            flag = false;
            break;
        }
    }
    if (flag) {
        radioButtons[0].checked = true;
    }
}

initialize();