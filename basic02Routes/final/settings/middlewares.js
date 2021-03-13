const authorize = (req, res, next) => {
    const { name } = req.params;

    if (name === "nick") {
        req.user = { id: "123456" }
    }

    next();
}

module.exports = { authorize };