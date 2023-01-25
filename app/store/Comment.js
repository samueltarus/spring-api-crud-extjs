Ext.define('DemoBlog.store.Comment', {
    extend: 'Ext.data.Store',

    alias: 'store.comment',

    model: 'DemoBlog.model.Comment',
    storeId: "comments",

    proxy: {
        type: "ajax",
        method: 'GET',
        url:  "http://localhost:8080/api/comments",
        reader: {
            type: "json",
            rootProperty: "rows",
        },
    },
    autoLoad: true,
});