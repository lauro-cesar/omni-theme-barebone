var CartSummaryModel = Backbone.Model.extend({
    url:'/shopping/summary/',
    defaults: function() {
        return {
            subTotal:'R$ 0.00',
            grandTotal:'R$ 0.00',
            isReady:false,
            zipCode:false
        }
    }
  });

var CartSummary= new CartSummaryModel()