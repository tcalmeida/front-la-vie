const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const apresentacao = document.getElementById("apresentacao").value;

  const formData = {
    nome,
    email,
    senha,
    apresentacao,
  };

  async function cadastrarPsi() {
    try {
      const response = await fetch("http://localhost:3000/psicologos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const event = await response.json();
      return event;
    } catch (error) {
      console.log(error);
    }
  }
  return cadastrarPsi();
});
