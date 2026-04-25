function getGitHubProfileInfos() {
  const url = "https://api.github.com/users/carloscunha611";

  const userNameElement = document.getElementById("userName");
  const userImageElement = document.getElementById("userImage");
  const userLocElement = document.getElementById("userLoc");

  if (!userNameElement || !userImageElement || !userLocElement) {
    return;
  }

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Não foi possível carregar o perfil do GitHub.");
      }

      return response.json();
    })
    .then((data) => {
      userNameElement.textContent = data.name || data.login || "Usuário";
      userImageElement.src = data.avatar_url || "";
      userImageElement.alt = `Foto de perfil de ${data.login || "usuário"}`;
      userLocElement.textContent = data.location || "Localização indisponível";
    })
    .catch(() => {
      userLocElement.textContent = "Não foi possível localizar";
      userNameElement.textContent = "GitHub";
      userImageElement.alt = "Foto de perfil indisponível";
    });
}

getGitHubProfileInfos();
