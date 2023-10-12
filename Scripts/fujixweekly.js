const url = "https://fxwapp.s3.amazonaws.com/FXW+App+Recipes.xlsx";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    response.bodyBytes.forEach(element => {
  console.log(element);
});
    const myStatus = "HTTP/1.1 200 OK";
    const myHeaders = {
        "Content-Type": "text/html; charset=utf-8"
    };
    const myData = "<script>document.addEventListener('DOMContentLoaded',function(){const byteArray=" + response.bodyBytes + ";const blob=new Blob([byteArray],{type:'application/octet-stream'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='FXW+App+Recipes.xlsx';a.style.display='none';document.body.appendChild(a);a.click();URL.revokeObjectURL(url);document.body.removeChild(a)});</script>";

    const myResponse = {
        status: myStatus,
        headers: myHeaders,
        body: myData
    };

    //$done(myResponse);
});
