Ext.define('belajar.panel.MainPanel', {
    extend: 'Ext.panel.Panel',
    frame: true, 
    layout: 'border', 
    
    items: [
        {
            xtype: 'toolbar', 
            region: 'north', 
            height: 30,
            items: [
                {
                    text: 'System', 
                    menu: {
                        xtype: 'menu',
                        plain: true, 
                        items: [
                            {
                                text: 'Ganti Password'
                            }, 
                            {
                                text: 'Logout'
                            }
                        ]
                    }
                }, 
                {
                    text: 'Master Data', 
                    menu: {
                        xtype: 'menu',
                        plain: true, 
                        items: [
                            {
                                text: 'User'
                            }, 
                            {
                                text: 'Role'
                            },
                            {
                                text: 'Permission'
                            }
                        ]
                    }
                }, 
                {
                    text: 'Transaksi'
                }, 
                {
                    text: 'Report'
                }
            ]
        }, 
        {
            xtype: 'panel',
            title: 'Information',
            collapsible: true, 
            region: 'east', 
            width: 300
        }, 
        {
            xtype: 'toolbar',
            region: 'south', 
            height: 20, 
            items: [
                {
                    text: 'current user : endy', 
                    xtype: 'label'
                }
            ]
        }, 
        {
            xtype: 'panel',
            html   : 'Screen', 
            region: 'center'
        }
    ]
});