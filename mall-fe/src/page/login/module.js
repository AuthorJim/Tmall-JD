var url = 'http://blog.163.com/album?id=1#comment';
var reg = /(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?/;
console.log(url.match(reg))