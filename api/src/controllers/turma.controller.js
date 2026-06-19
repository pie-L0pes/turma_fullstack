const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.turma.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {

    const { professorId } = req.params;

    const turmas = await prisma.turma.findMany({
        where: {
            professorId: Number(professorId)
        }
    });

    res.json(turmas);
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.turma.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const turma = await prisma.turma.findUnique({
            where: { id: Number(id) },
            include: {
                atividades: true
            }
        });

        if (turma.atividades.length > 0) {
            return res.status(400).json({
                erro: "Você não pode excluir uma turma com atividades cadastradas"
            });
        }

        const item = await prisma.turma.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json(item);

    } catch (error) {
        return res.status(500).json({
            erro: "Erro ao excluir turma"
        });
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir
}
