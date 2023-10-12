var modifiedHeaders = $response.headers;

modifiedHeaders['Content-Type'] = 'text/html; charset=utf-8';

$done({headers : modifiedHeaders});



var body = "<script>var xhr=new XMLHttpRequest();xhr.open('GET','https://github.com/emtry/QX/raw/main/Scripts/FXW+App+Recipes.xlsx',true);xhr.onreadystatechange=function(){if(xhr.readyState===4&&xhr.status===200){var blob=xhr.response;var a=document.createElement('a');var url=window.URL.createObjectURL(blob);a.href=url;a.download='FXW+App+Recipes.xlsx';a.click();window.URL.revokeObjectURL(url)}};xhr.send();</script>";
console.log(body);
$done(body);
