function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/carloscunha611`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userImage.src = data.avatar_url
      userLoc.textContent = data.location
    })
}

getGitHubProfileInfos()
