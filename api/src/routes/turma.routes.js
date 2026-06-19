const express = require("express");

const router = express.Router();

const { 
    cadastrar, 
    listar, 
    buscar,  
    excluir } = require("../controllers/turma.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar/:professorId", listar);
router.get("/buscar/:id", buscar);
router.delete("/excluir/:id", excluir);

module.exports = router;
