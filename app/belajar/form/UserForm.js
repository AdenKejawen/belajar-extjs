Ext.define('belajar.form.UserForm', {
	extend : 'Ext.form.FormPanel', 
	alias : 'widget.belajar.form.UserForm',
	id: 'belajar.form.UserForm',
	title: 'User Form',
    labelWidth: 200,
    bodyStyle:'padding:10px 10px 0',
    initComponent: function() {
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Username',
                allowBlank:false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Email'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Confirm',
                inputType: 'password'
            }
        ];
        belajar.form.UserForm.superclass.initComponent.call(this);
    },
    
    simpanUser: function(){
    	var form = Ext.getCmp('belajar.form.UserForm');
    	if(form.getForm().isValid()){
    		Ext.MessageBox.alert(
                'TODO','implement form save'
            );
    	} else {
    		Ext.MessageBox.alert(
                'Error!',
                'Please check again'
            );	
    	}
    }
});
