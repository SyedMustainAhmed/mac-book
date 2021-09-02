
// book fetch
let loadData = bookname => {
    let url = `https://openlibrary.org/search.json?q=${bookname}`;
    fetch(url)
        .then(response => response.json())
        .then(data => bookDetails(data));
};
loadData(inputValue);
inputBox.value = "";
// book details function

let bookDetails = data => {
    console.log(data);