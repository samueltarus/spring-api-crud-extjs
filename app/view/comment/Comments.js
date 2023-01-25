Ext.define('DemoBlog.view.comment.Comments', {
    extend: 'Ext.grid.Panel',
    xtype: 'commentslist',

    requires: [
        'DemoBlog.store.Comment'
    ],

    title: 'Comments',

    store: {
        type: 'comment'
    },

    columns: [
        { text: 'id',  dataIndex: 'id' },
        { text: 'Description', dataIndex: 'description', flex: 1 },
        { text: 'Rate',  dataIndex: 'rate',flex:1 },

    ],

    listeners: {
        select: 'onItemSelected'
    }
});
