var MyList = DevExpress.ui.dxList.inherit({
    _render: function () {
        this.callBase();
        if (this._dataSource) {
            if (this._dataSource._isLoaded && $.isFunction(this.option("dataBound")))
                this.option("dataBound")(this);
        }
    },
    scrollToItemIndex: function (index) {
        var elements = this._items();
        if (elements.length < index || index < 0)
            return;
        var itemHeight = elements[0].offsetHeight;
        this._scrollView.scrollPos(itemHeight * index, true);
    }
});
DevExpress.ui.registerComponent("myList", MyList);