document.getElementById("nomeProfessor").innerHTML =
    localStorage.getItem(
        "nome"
    );


async function listar() {
    const professorId = localStorage.getItem("professorId");

    const req = await fetch(`http://localhost:3000/turma/listar/${professorId}`);

    const turmas = await req.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    turmas.forEach(turma => {
        lista.innerHTML += `
<tr>

<td>

${turma.id}

</td>

<td>

${turma.nome}

</td>

<td>

<button

onclick="
visualizar(
${turma.id}
)
"

>

Visualizar

</button>

<button

onclick="
excluir(
${turma.id}
)
"

>

Excluir

</button>

</td>

</tr>

`;
    }
    );
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

async function cadastrarTurma() {
    const nome = document.getElementById("nomeTurma").value;
    const professorId = +localStorage.getItem("professorId");
    await fetch("http://localhost:3000/turma/cadastrar",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body:
                JSON.stringify({
                    nome,
                    professorId
                })
        }
    );

    document.getElementById("nomeTurma").value ="";
    fecharModal();
    listar();
}

async function excluir(id) {

    const confirmar = confirm("Deseja excluir a turma?");

    if (!confirmar)
        return;

    const req =
        await fetch(`http://localhost:3000/turma/excluir/${id}`,
            {
                method: "DELETE"
            }
        );

    const resposta = await req.json();

    if (resposta.erro) {
        alert(resposta.erro);
        return;
    }
    listar();
}

function visualizar(id) {
    localStorage.setItem(
        "turmaId",
        id
    );

    window.location ="./atividades.html";
}

function sair() {
    localStorage.clear();
    window.location ="./login.html";
}

listar();