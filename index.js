const e = require('express');
const app = e();

app.get('/', (req, res) => {
    res.send('Hello Kubernetes!');
});

app.listen(3000, () => {
    console.log('app run on port 3000');
});
