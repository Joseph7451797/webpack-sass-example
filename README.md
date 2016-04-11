# webpack-reload-test

支援 SCSS、JS 熱載入，有開發模式與產出（build）模式兩種設定，詳見 webpack-hot-dev-server.config.js 與 webpack.build.config.js
(原本的 webpack.config.js 已棄用)

## 使用方法

下載後安裝必須模組：

```text
npm install
```

啟動開發模式：

```text
npm run hot-dev
```
瀏覽器打開 http://127.0.0.1:8080 可以享受熱載入的功能


產出模式：

```text
npm run build
```
<br>
**附註：**
持續更新中，LESS 熱載入功能遙遙無期

## License

MIT (http://www.opensource.org/licenses/mit-license.php)