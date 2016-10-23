
var AdBase = Backbone.Model.extend({
	inCart:function(){
		var me=this;
        // return true;
		return ( typeof Shopping_Cart.get(me.get('adID')) !== 'undefined');
	},
    destinationZipCode:function(){
        return 95560000
    },
    deliveryMethodID:function(){
        omniEvents.trigger("Log","Getting default method ID");
        return "PAC"
    },
    photoGallery:function(){
        var me=this;
        console.log(me.get('adID'));
        return [{'photoCaption':'Caption 1','photoSrc':'https://lh3.googleusercontent.com/4BbOndvQOMPuoJ5XNnP7AHpqNK5hlmO_XRf4QEbq0JV4rfkPaymowfVIq9UuyqWWCBvqzSBu5QqpngtQKhgD'},{'photoCaption':'Caption 2','photoSrc':'https://lh3.googleusercontent.com/4BbOndvQOMPuoJ5XNnP7AHpqNK5hlmO_XRf4QEbq0JV4rfkPaymowfVIq9UuyqWWCBvqzSBu5QqpngtQKhgD'}]
    },
    deliveryMethodName:function(){
        omniEvents.trigger("Log","Getting default method ID");
        return "1"
    },
    defaults: function() {
        var me= this;
        return {
            itemQT:1,
            adID:'',
            permalink:'',
            adTitle:'',
            adBaitText:'',
            adContentText:'',
            itemPriceLabel:'',
            total_in_stock:0,
            photos:[],
            hasZipCode:false,
            freeShipping:false,
            showShippingCalculator:false,
            perma_path:"#catalog",
            itemSubTotal:'',
            defaultImage:'https://lh3.googleusercontent.com/ig46kbAM6OftExddR8jakoRCLzkaYf1ZdOB8397SvP0fLEG9jHm2FZxO25CSbNA38HydGhfXho5kRk9zfi4'
        }
    }
})

var AdModel = AdBase.extend({
	idAttribute:'adID',
})


var AdDetailModel = AdBase.extend({
    urlRoot:'/catalog/item/detail/',
    idAttribute:'adID',
})


var AdCartModel = AdBase.extend({
    collection:Shopping_Cart,
	urlRoot:'/shopping/',
})