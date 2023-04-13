function logout() {
    localStorage.clear();
    location.href = "/"
}

module.exports = {
    logout
}