const quotes = [{
    quote: "どうして過去の自分や今の自分を肯定してやれないんだよ",
    author: "比企谷八幡",
},{
    quote: "努力は自分を裏切らない。夢を裏切ることはあるけどな。",
    author: "比企谷八幡",
},{
    quote: "媚びる時はプライドを捨てて媚びること。それが俺のプライド…おれの本気、見せてやるよ。",
    author: "比企谷八幡",
},{
    quote: "真実は残酷だというのならきっと嘘はやさしいのだろう。だがそのやさしさは嘘だ。",
    author: "比企谷八幡",
},{
    quote: "人生はリセットできないが人間関係はリセットできる。",
    author: "比企谷八幡",
},{
    quote: "スタンド使いとスタンド使いが惹かれ合うようにぼっちがぼっちを発見する能力に長けているらしい。",
    author: "比企谷八幡",
},{
    quote: "問題なのは悪意によって孤立させられてることだ。",
    author: "比企谷八幡",
},{
    quote: "自分が変われば世界が変わるというがそんなことはない。",
    author: "比企谷八幡",
},{
    quote: "いつも自分が悪いなんてことはない、社会が世の中が周囲が誰かが間違っていることだってたくさんある。",
    author: "比企谷八幡",
},{
    quote: "偽物だってわかっててそれでも手を差し伸べたいと思ったならそいつは本物なんだろ…きっと。",
    author: "比企谷八幡",
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;