function renderHTML(url) {
    switch (url) {
        case "/home":
            return `
            <html>
              <div>home页面</div>
            </html>
        `
        case "/list":
            return `
            <html>
              <div>list页面</div>
            </html>
        `
        case "/api/home":
            return `
            {"name":"kervin"}
        `
        case "/api/list":
            return `
            ["list1","list2","list3"]   
        `
        default:
            return `
            <html>
              <div>not found</div>
            </html>
        `
    }
}

module.exports = {
    renderHTML
}