id = "79vgw9"

document
    .getElementById(
        "nomeProfessor"
    )
    .innerHTML =
    localStorage.getItem(
        "nome"
    );

async function listar() {

    const turmaId =
        localStorage.getItem(
            "turmaId"
        );

    const req =
        await fetch(
            `http://localhost:3000/atividade/listar/${turmaId}`
        );

    const atividades = await req.json();

    const lista =
        document.getElementById("lista");
    lista.innerHTML = "";

    atividades.forEach(
        atividade => {

            lista.innerHTML += `
<tr>

<td>

${atividade.id}
</td>

<td>

${atividade.descricao}

</td>

</tr>

`;
        }
    );
    document
        .getElementById(
            "nomeTurma"
        )
        .innerHTML = `Turma ${turmaId}`;

}

function abrirModal() {

    document
        .getElementById(
            "modal"
        )
        .style.display =
        "flex";

}

function fecharModal() {

    document
        .getElementById(
            "modal"
        )
        .style.display =
        "none";

}

async function cadastrarAtividade() {

    const descricao =
        document.getElementById(
            "descricao"
        ).value;

    const turmaId =
        +localStorage.getItem(
            "turmaId"
        );

    await fetch(

        "http://localhost:3000/atividade/cadastrar",

        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body:
                JSON.stringify({
                    descricao,
                    turmaId
                })
        }
    );

    fecharModal();
    listar();
}

function sair() {
    localStorage.clear();
    window.location = "./login.html";
}

function voltar() {
    window.location ="./principal.html";
}

listar();