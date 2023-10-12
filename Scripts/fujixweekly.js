const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Content-Type": "text/html; charset=utf-8","Access-Control-Allow-Origin": "*"};
const myData = "<script>var xhr=new XMLHttpRequest();xhr.open('GET','https://fxwapp.s3.amazonaws.com/FXW+App+Recipes.xlsx',true);xhr.onreadystatechange=function(){if(xhr.readyState===4&&xhr.status===200){var blob=xhr.response;var a=document.createElement('a');var url=window.URL.createObjectURL(blob);a.href=url;a.download='FXW+App+Recipes.xlsx';a.click();window.URL.revokeObjectURL(url)}};xhr.send();</script>";

const myResponse = {
    status: myStatus,
    headers: myHeaders, 
    body: myData 
};

$done(myResponse);
