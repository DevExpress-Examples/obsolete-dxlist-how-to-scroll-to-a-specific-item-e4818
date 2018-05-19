function GetItems() {
    var items = [];
    for (var i = 1; i <= 20; i++)
        items.push({
            ID: i,
            Name: 'Name_' + i.toString()
        });
    return items;
}