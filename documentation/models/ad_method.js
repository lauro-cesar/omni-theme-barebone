var MethodBase = Backbone.Model.extend({

    defaults:function(){
        var me=this;
        return {
            label:'',
            description:'',
            icon:'',
            logo:'',
            shippingPrice:'',
            shippingEta:'',
            systemMethodID:'',
            id:'',
            isDefault:false,
            checked:false
        }
    }
});

var PaymentMethod = MethodBase.extend();
var DeliveryMethod = MethodBase.extend();