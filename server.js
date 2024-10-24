import express from "express";

async function soma(a, b) {
    return a + b;
}


async function subtracao(a, b) {
    return a - b;
}


async function divisao(a, b) {
    if (b === 0) {
        return  new Error('Erro: Divisão por zero!');
    }
    return a / b;
}


async function multiplicacao(a, b) {
    return a * b;
}



const app = express();
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});
app.post('/sum', async function (req, res) {
    try {
        const {num1,num2} = req.body
        const result = await soma(num1, num2);

        res.json({ result });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
});

app.post('/subt', async function (req, res) {
    try {
        const {num1,num2} = req.body
        const result = await subtracao(num1, num2);

        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/multi', async function (req, res) {
    try {
        const {num1,num2} = req.body
        const result = await multiplicacao(num1, num2);

        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/div', async function (req, res) {
    try {
        const {num1,num2} = req.body
        const result = await divisao(num1, num2);

        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:3001/`);
});



