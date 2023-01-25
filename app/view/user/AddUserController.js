// Ext.define('FundMaster.view.user.AddUserController', {

//     extend : 'Ext.app.ViewController',

//     alias: 'controller.adduserFormController',

//     // mixins: [
//     //     'FundMaster.view.mixins.WindowMixin'
//     // ],
//     init : function () {

//     },
//     onFormSubmitClick: function () {

//         let me = this;

//         let window = me.getView();

//         let model = me.getViewModel();

//         let form = Ext.getCmp('adduserform').getForm();

//         form.submit({
//             clientValidation: true,
//             url: "http://localhost:8080/api/users",
//             timeout:60000,
//             waitMsg : 'Saving User',
//             method :'POST',
//             params: {
//                 _eventName: 'users'
//             },
//             success: function(form, action) {
//                 window.closeWindow();

//             },
//             failure: function(form, action) {
//                 failureAction(form, action)
//             }
//         });

//     },
//     onFormCancelButtonClick: function () {
//         this.getView().close();
//     }
// })