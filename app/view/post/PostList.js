Ext.define('DemoBlog.view.post.PostList', {
    extend: 'Ext.grid.Panel',
    xtype: 'postslist',

    requires: [
        'DemoBlog.store.Post'
    ],

    title: 'Posts',

    store: {
        type: 'post'
    },

    columns: [
        { text: 'id',  dataIndex: 'id' },
        { text: 'Title',  dataIndex: 'title',flex:1 },
        { text: 'Description', dataIndex: 'description', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
