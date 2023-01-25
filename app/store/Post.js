Ext.define('DemoBlog.store.Post', {
    extend: 'Ext.data.Store',

    alias: 'store.post',

    model: 'DemoBlog.model.Post',
    storeId: "posts",

    proxy: {
        type: "ajax",
        method: 'GET',
        url:  "http://localhost:8080/api/posts",
        reader: {
            type: "json",
            rootProperty: "rows",
        },
    },
    autoLoad: true,
});