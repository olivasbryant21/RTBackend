indexFn = (req, res, next) => {
    res.json({
        "title": "Hello",
        "body": "Hello, World"
    });
}

module.exports = {
    indexFn,
}