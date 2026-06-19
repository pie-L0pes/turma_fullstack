async function entrar() {

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha todos os campos");
        return;
    }

    const req = await fetch("http://localhost:3000/professor/listar");

    const professores = await req.json();

    let professorLogado = null;
    professores.forEach(
        professor => {
            if ( professor.email === email && professor.senha === senha) {
                professorLogado = professor;
            }
        }
    );

    if (professorLogado) {

        localStorage.setItem(
            "professorId",
            professorLogado.id
        );

        localStorage.setItem(
            "nome",
            professorLogado.nome
        );
        window.location ="./principal.html";
    }
    else {
        alert(
            "Email ou senha inválidos"
        );
    }
}