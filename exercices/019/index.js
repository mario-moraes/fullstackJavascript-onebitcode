const Author = require("./Author.js");

const mario = new Author("Mario");

const post = mario.createPost("Aprendendo Javascript", "lorem ipsum dolor");

post.addComment("Mario", "Bom artigo");
post.addComment("Neto", "Péssimo artigo");

console.log(mario);
console.log(post);

