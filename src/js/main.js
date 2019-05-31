var element = document.getElementById('sorted');
var nameslist = [
    'Orson Milka Iddins',
    'Erna Dorey Battelle',
    'Flori Chaunce Franzel',
    'Odetta Sue Kaspar',
    'Roy Ketti Kopfen',
    'Madel Bordie Mapplebeck',
    'Selle Bellison',
    'Leonerd Adda Mitchell Monaghan',
    'Debra Micheli',
    'Hailey Avie Annakin'
];
var html = ""
// call the sorted method
var data = sorter(nameslist);

data.map(function(value, index){
    html += "<li>"+value+"</li>"
});
element.innerHTML = html;