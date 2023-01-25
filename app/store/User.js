Ext.define('DemoBlog.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'DemoBlog.model.User',
    storeId: "users",

    proxy: {
        type: "ajax",
        method: 'GET',
        url:  "http://localhost:8080/api/users",
        reader: {
            type: "json",
            rootProperty: "rows",
        },
    },
    autoLoad: true,
});