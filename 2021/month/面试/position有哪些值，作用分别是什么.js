// position有哪些值，作用分别是什么

// static
// 不会以任何特殊方式定位， 处于正常文档流 （默认值）

// fixed(脱离文档流)
// 相对于视口； 浏览器窗口

// absolute（脱离文档流）
// 元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位，如 fixed）。
// 然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

// relative
// 相对于正常位置定位. 不会对其余内容调整来适应元素留下来的空间

// sticky
// 粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。
// 起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）。
