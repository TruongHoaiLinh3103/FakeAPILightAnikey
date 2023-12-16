casual = require('casual');
const { faker } = require('@faker-js/faker');
const fs = require("fs");

const randomcommentList = (n) => {
    if(n < 0){
        return [];
    }
    const commentList = [];
    Array.from(new Array(n)).forEach((eliment, index) => {
        const comment = {
            id: index,
            name: casual.name,
            avatar: faker.image.avatar(),
            like: Math.floor(Math.random() * 100),
            unchat: Math.floor(Math.random() * 10),
            unlike: Math.floor(Math.random() * 100),
            comment: casual.description,
            productId: Math.floor(Math.random() * 90),
            createAt: Date.now(),
            updateAt: Date.now()
        }
        commentList.push(comment);
    })
    return commentList;
}

(() => {
    //Total 100
    const commentList = randomcommentList(1000);
    // prepare db object
    const backup = {
        comment: commentList
    };
    // write db object to db.json
    fs.writeFile("backup.json", JSON.stringify(backup), () => {
        console.log("Ok");
    });
})();