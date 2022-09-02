# node-file-upload

學習影片來源 > [**Youtube**](https://youtu.be/4pmkQjsKJ-U)

使用Express框架撰寫一個簡易上傳圖檔api

- `get: /`:首頁是上傳介面,拖曳圖檔即可上傳
- `post: /upload`:上傳圖檔路由

使用`middleware`檢查檔案是否符合
- 檔案大小(fileSizeLimiter)
- 檔案格式(fileExtLimiter)
- 檔案是否存在(filesPayloadExists)