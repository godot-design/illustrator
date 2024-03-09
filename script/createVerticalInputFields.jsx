// STEP1: Q数, 列数, 行数を入力するプロンプトを表示
var qCount = parseInt(prompt("Input Q", "12"));
var columnCount = parseInt(prompt("Input column count", "10"));
var rowCount = parseInt(prompt("Input row count", "3"));

var isAfterCS5 = true;          //CS5以降でY軸の符号が反転するため、判定用の真偽値を定義
var mm = Number (2.834645669)   //プログラム上はpointで扱われるため、mm変換用の定数を定義

// STEP2: 仕様に従って長方形を作成
var rectWidth = qCount * 0.25 * mm;
var rectHeight = qCount * 0.25 * mm;
var rectStrokeWidth = 0.1;

var rect = app.activeDocument.pathItems.rectangle(0, 0, rectWidth, rectHeight);
rect.stroked = true;
rect.filled = false;
rect.strokeWidth = rectStrokeWidth;
rect.strokeColor = new CMYKColor();
rect.strokeColor.cyan = 100;

// STEP3: 仕様に従って長方形をコピーする
// STEP3-1: 垂直方向のコピー
for (var i = 1; i < columnCount; i++) {
    //IllustraternoのバージョンによってY座標のオフセットが反転するため、反転
    var offsetY = isAfterCS5 ? -(i * (rectHeight)) : (i * (rectHeight))
    var newRect = rect.duplicate();
    newRect.translate(0,offsetY);
}

// STEP3-2: 水平方向のコピー
var horizontalOffset = Math.ceil(rectWidth * 1.75 * 1000) / 1000; // 小数点第3位以下を切り上げ
for (var j = 1; j < rowCount; j++) {
    var offsetX = j * horizontalOffset;
    for (var k = 0; k < columnCount; k++) {
        var newRect = rect.duplicate();
        //IllustraternoのバージョンによってY座標のオフセットが反転するため、反転
        var offsetY = isAfterCS5 ? -(k * (rectWidth)) : (k * (rectWidth))
        newRect.translate(offsetX, offsetY);

    }
}

// STEP4: 全体と同サイズの長方形を作成
var totalRect = app.activeDocument.pathItems.rectangle(0, 0, ((rowCount * horizontalOffset) - horizontalOffset + rectWidth), (columnCount * rectHeight)) ;//最終行はオフセット１個分引く
totalRect.stroked = true;
totalRect.filled = false;
totalRect.strokeWidth = rectStrokeWidth;
totalRect.strokeColor = new CMYKColor();
totalRect.strokeColor.cyan = 100;
