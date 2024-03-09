# illustrator
Script for illustrator 

## 使い方
[スクリプトによる自動処理](https://helpx.adobe.com/jp/illustrator/using/automation-scripts.html)

## 作成時の備忘メモ
### 初回　ChatGPTへの指示

```
以下の仕様で動作する、Illustrator用のJavaScriptを作成してください。

STEP1で、「Q数」「列数」「行数」をまとめて入力するプロンプトを表示させる
STEP2で、以下の仕様の長方形を作成する。
・先のSTEP1で入力された「Q数」*0.25mmの高さ、「Q数」*0.25mmの幅のサイズ
・線の幅は0.1mm
・塗りなし
・枠線の色はシアン100%
STEP3で、STEP2で作成した長方形を以下の仕様でコピーする。
・STEP3-1で水平方向に以下の仕様でコピーする
　・長方形の幅と同サイズのオフセットとする。
　・STEP１で入力した「列数」分コピーする
・STEP3-2で垂直方向に以下の仕様でコピーする
　・コピー時のオフセットは「長方形の高さ*175%の小数点第3位以下を切り上げ」とする
　・STEP3-1で作成したコピーすべてを、STEP1で入力した「行数」分コピーする
・STEP4で、STEP2,3で作成した長方形全体と同サイズの長方形を作成してください。
```

### 他、考慮が必要だったポイント
* 水平にコピーしてから、コピーしたものを全部垂直に、という指定がうまく伝えづらかった。起点となる　長方形を１STEP内で展開するような指示に変えた。
* pointからmmへの変換   
* 垂直の挙動がIllustratorのバージョンによって異なる。

### 参考
[イラストレーターの垂直方向移動の数値が逆に行く理由は？](https://okwave.jp/qa/q9233161.html)  
[How to draw a rectangle in millimeters?](https://community.adobe.com/t5/illustrator-discussions/how-to-draw-a-rectangle-in-millimeters/m-p/10213012)
