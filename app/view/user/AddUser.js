Ext.define('FundMaster.view.user.AddUser', {

    extend : 'Ext.window.Window',
    xtype: 'adduserform',
    controller: 'adduserFormController',
    autoShow:true,
    frame:true,
    title: ' New User',
    width:800,
    modal : true,
    shadow:true,
    autoHeight:true,
    closable: true,
    items: {
        xtype: 'form',
        id:'adduserform',
        labelAlign: 'left',
        bodyStyle:'padding:5px',
        height:'auto',
        frame:true,
        items: [{
            layout:'column',
            border:false,
            labelWidth:200,
            items:[{
                columnWidth:1.0,
                layout: 'anchor',
                border:false,
                items: [{
                    xtype: 'textfield',
                    emptyText: 'Username',
                    fieldLabel: 'Username',
                    name: 'username',
                    id: 'usewrname',
                    hidden:false,
                    readOnly:true,
                    anchor: '98%'
                },{
                    xtype: 'textfield',
                    emptyText: 'Id Number',
                    fieldLabel: 'Id Number',
                    name: 'idNumber',
                    hidden:true,
                    readOnly:true,
                    anchor: '98%'
                },{
                    xtype: 'textfield',
                    emptyText: 'Password',
                    fieldLabel: 'Password',
                    name: 'password',
                    hidden:true,
                    readOnly:true,
                    anchor: '98%'
                },{
                    xtype: 'textfield',
                    emptyText: 'Phone Number',
                    fieldLabel: 'Phone Number',
                    name: 'phoneNumber',
                    hidden:true,
                    readOnly:true,
                    anchor: '98%'
                }]
            }]

        }],

        buttons: [{
            iconCls: 'x-icon-save',
            id:'saveadduserform',
            // handler:'onFormSubmitClick'
        },{
            text: 'Close',
            iconCls: 'x-icon-close',
            // handler: 'onFormCancelButtonClick'
        }]

    }

});