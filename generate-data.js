casual = require('casual');
const fs = require("fs");

const randomCommentList = (n) => {
    if(n < 0){
        return [];
    }
    const commentList = [];
    Array.from(new Array(n)).forEach(() => {
        const comment = {
            name: casual.name,
            createAt: Date.now(),
            updateAt: Date.now(),
            like: Math.floor(Math.random() * 1000),
            unchat: Math.floor(Math.random() * 1000),
            unlike: Math.floor(Math.random() * 1000),
            commet: casual.text,
            productId: Math.floor(Math.random() * 100)
        }
        commentList.push(comment);
    })
    return commentList;
}

(() => {
    //Total 100
    const commentList = randomCommentList(100);
    // prepare db object
    const backup = {
        comment: commentList
    };
    // write db object to db.json
    fs.writeFile("backup.json", JSON.stringify(backup), () => {
        console.log("Ok");
    });
})();