var api = new webRest([
    'GET /book/:id',
    'GET /article'
  ],{
  host:'https://api.douban.com/v2',
  promise:Promise,
  http:function(request){
    if (request.method === 'GET' && request.data) {
     var  queryString = [];
      for (var i in request.data) {
        var value = request.data[i];
        if (value === null) value = '';
        if (value === void 0) continue;
        queryString.push(encodeURIComponent(i) + '=' + encodeURIComponent(value));
      }
      if (queryString.length) {
        if (!~request.url.indexOf('?')) request.url += '?';
        if (!/[?&]$/.test(request.url)) request.url += '&';
        request.url += queryString.join('&');
      }
      delete request.data;
    }
    // function ajax(method, url, data) {
    //   var request = new XMLHttpRequest();
    //
    //   return new Promise(function (resolve, reject) {
    //     request.onreadystatechange = function () {
    //       if (request.readyState === 4) {
    //         if (request.status === 200) {
    //           resolve(JSON.parse(request.responseText));
    //         } else {
    //           reject(JSON.parse(request.responseText));
    //         }
    //       }
    //     };
    //     request.open(method, url);
    //     request.send(data);
    //
    //   });
    // }
    //
    // return ajax(request.method,request.path,request.data);
    console.log(request)

  }
});
console.log(123)
