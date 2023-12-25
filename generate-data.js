casual = require('casual');
const { faker } = require('@faker-js/faker');
const fs = require("fs");


//COMMENT
// const randomcommentList = (n) => {
//     if(n < 0){
//         return [];
//     }
//     const commentList = [];
//     Array.from(new Array(n)).forEach((eliment, index) => {
//         const comment = {
//             id: index,
//             name: casual.name,
//             avatar: faker.image.avatar(),
//             like: Math.floor(Math.random() * 100),
//             unchat: Math.floor(Math.random() * 10),
//             unlike: Math.floor(Math.random() * 100),
//             comment: casual.description,
//             productId: Math.floor(Math.random() * 500),
//             createAt: Date.now(),
//             updateAt: Date.now()
//         }
//         commentList.push(comment);
//     })
//     return commentList;
// }

// (() => {
//     //Total 100
//     const commentList = randomcommentList(10000);
//     // prepare db object
//     const backup = {
//         comment: commentList
//     };
//     // write db object to db.json
//     fs.writeFile("backup.json", JSON.stringify(backup), () => {
//         console.log("Ok");
//     });
// })();


//PRODUCT
// const randomproductList = (n) => {
//     if(n < 0){
//         return [];
//     }
//     const productList = [];
//     Array.from(new Array(n)).forEach((eliment, index) => {
//         const product = {
//             id: index,
//             name: casual.description,
//             price: Math.floor(Math.random() * 1000),
//             rating: Math.floor(Math.random() * 5),
//             imgOne: faker.image.url(),
//             imgTwo: faker.image.url(),
//             imgThree: faker.image.url(),
//             text: casual.text
//         }
//         productList.push(product);
//     })
//     return productList;
// }

// (() => {
//     //Total 100
//     const productList = randomproductList(501);
//     // prepare db object
//     const backup = {
//         product: productList
//     };
//     // write db object to db.json
//     fs.writeFile("backup.json", JSON.stringify(backup), () => {
//         console.log("Ok");
//     });
// })();

//CHAPTER
// const randomchapterList = (n) => {
//     if(n < 0){
//         return [];
//     }
//     const chapterList = [];
//     Array.from(new Array(n)).forEach((eliment, index) => {
//         const chapter = {
//             id: index,
//             text: "",
//             productId: 1
//         }
//         chapterList.push(chapter);
//     })
//     return chapterList;
// }

// (() => {
//     //Total 100
//     const chapterList = randomchapterList(1313);
//     // prepare db object
//     const backup = {
//         chapter: chapterList
//     };
//     // write db object to db.json
//     fs.writeFile("backup.json", JSON.stringify(backup), () => {
//         console.log("Ok");
//     });
// })();