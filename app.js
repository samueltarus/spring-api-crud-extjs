/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DemoBlog.Application',

    name: 'DemoBlog',

    requires: [
        // This will automatically load all classes in the DemoBlog namespace
        // so that application classes do not need to require each other.
        'DemoBlog.*'
    ],

    // The name of the initial view to create.
    mainView: 'DemoBlog.view.main.Main'
});
