# Obsolete: dxList - How to scroll to a specific item


<p><strong>This approach is related to 13.1. Starting with 13.2, please use the </strong><a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxList/Configuration#contentReadyAction"><strong><u>dxList.contentReadyAction</u></strong></a><strong> event and </strong><a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxList/Methods#scrollTolocation"><strong><u>dxList.scrollTo</u></strong></a><strong> </strong><strong>method instead. See the ticket </strong><a href="https://www.devexpress.com/Support/Center/p/S171464">Add the afterRender event to widgets</a><strong> to learn more:</strong></p><p><strong></strong>For example:<strong><br />
</strong></p>

```js
 var itemHeight = 23;
$("#list").dxList("instance").scrollTo(itemHeight * 12);

```

<p><strong>Prior 13.2:<br />
</strong><br />
dxList does not provide any API that allows scrolling to an item. We can create a <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxList"><u>dxList</u></a> inheritor and add the required functionality. This example demonstrates how to add the <strong>dataBound</strong> event and a method that scrolls content to a specific item index. </p>

```js
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




```

<p>We handle the <strong>dataBound</strong> event and call the <strong>scrollToItemIndex</strong> method that was added to our inheritor.</p><p><strong>See also:<br />
</strong><a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/Utils#registerComponentname_class"><u>DevExpress.ui.registerComponent</u></a></p>

<br/>


