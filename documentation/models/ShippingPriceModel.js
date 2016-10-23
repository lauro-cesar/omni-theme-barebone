var ShippingPriceModel = Backbone.Model.extend({
    url:'/shopping/cart/shipping_price/',
    defaults: function() {
        var me=this;
        return {
            price:"",
            eta:"",
            isAvailable:false,
            msgError:[]
        }
    },
  });