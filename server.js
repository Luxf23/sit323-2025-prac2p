const express = require('express');
const app = express();
const port = 3000;

// 提供静态 HTML 页面
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
