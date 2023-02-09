exports.renderStatus = function (url) {
    var arr = ["/home", "/list", "/api/home", "/api/list"];
    return arr.includes(url) ? 200 : 404;
};
