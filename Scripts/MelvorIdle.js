var body = $response.body;
var obj = JSON.parse(body);

obj['data']['FunctionResult']['isOwned'] = true;
body = JSON.stringify(obj);

console.log(body);

$done(body);