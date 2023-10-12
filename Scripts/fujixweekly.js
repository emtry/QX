const url = "https://github.com/emtry/QX/raw/main/Scripts/FXW+App+Recipes.xlsx";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    $done({bodyBytes: response.bodyBytes});
}, reason => {
    $done();
});
