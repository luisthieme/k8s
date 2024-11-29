const app = require('express')();

app.get('/', (req, res) => {
    res.json({ message: 'running in k8s!' });
});

app.listen(8090, '0.0.0.0', () => console.log('app listening on port 8090'));
