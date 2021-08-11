## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

## Covered cases

- 正常 case

  - 按下設定 開始倒數計時
  - 時間到以後換到結果頁

- 時間倒數計時結束之前再次按下設定會重設時間
- 時間 input 做了一些限制
  - 0 分鐘
  - 必須是正常的數字
  - 數字上限
- media query
- theme
- 非同步架構
- redux 架構
- vite (只是做好玩的 沒用)
- lazy component (更沒用)

## Non covered cases

- 參加者很多的情況 (virtualized list)
- 修改參加者數量
- 弄的票票亮亮的
- 完整的測試
