window.ScrollList = window.ScrollList || {};
$(function() {
    ScrollList.app = new DevExpress.framework.html.HtmlApplication({
        namespace: ScrollList,
        defaultLayout: ScrollList.config.defaultLayout,
        navigation: ScrollList.config.navigation
    });
    ScrollList.app.router.register(":view/:id", { view: "home", id: undefined });
    ScrollList.app.navigate();
});
