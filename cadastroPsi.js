const form = document.querySelector("form");
const button  = document.querySelector("#button");

button.addEventListener("click",cadastroPsi )

async function cadastroPsi(formData) {
    try {

        const res = await fetch("http://localhost:3000/psicologos",
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
            });
        const event = await res.json()
        return event;
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const apresentacao = event.target.apresentacao.value;
    // console.log( nome, email, senha, apresentacao)

    const formData = {
        nome,
        email,
        senha,
        apresentacao
    };
})

