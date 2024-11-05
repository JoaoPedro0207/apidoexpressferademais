const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Carrega variáveis de ambiente

const app = express();

app.use(cors()); // Middleware para CORS

// Middleware para JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

// Rota inicial
app.get("/", (req, res) => {
    res.send("API de CRUD de Usuários")
});

// Importa e usa as rotas de usuário
const userRoutes = require("./routes/usuarios");
app.use("/api", userRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});