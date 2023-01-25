Ext.define('DemoBlog.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',

    requires: [
        'DemoBlog.store.User'
    ],

    title: 'Users',
    dockedItems: {
        itemId: 'toolbar',
        xtype: 'toolbar',
        items: [
            {
                text: 'Operations',
                menu: [{
                    text: 'Add User',
                    items: [{
                        xtype: 'adduserform'
                    }]
                },{
                    text: 'Update User'
                },{
                    text: 'Delete User'
                }]
            }
        ]
    },

    store: {
        type: 'user'
    },

    columns: [
        { text: 'id',  dataIndex: 'id' },
        { text: 'Username',  dataIndex: 'username',flex: 1  },
        { text: 'Phone Number',  dataIndex: 'phoneNumber' ,flex: 1 },
        { text: 'Id Number', dataIndex: 'idNumber', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
