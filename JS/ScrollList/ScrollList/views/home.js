ScrollList.home = function (params) {
    var viewModel = {
        dataSource: GetItems(),
        onDataBound: function (e) {
            e.scrollToItemIndex(12);
        }
    };
    return viewModel;
};