// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: 48,
        /* Optional */
        // loadProductFirst: true,
      loadProductFirst: false,
    }
};

var prevIcon = '<svg aria-hidden="true" data-prefix="fal" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>';

var nextIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>';

var searchIcon = '<?xml version="1.0" encoding="UTF-8"?><svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M2.78951613,2.79012097 C6.50967742,-0.930040323 12.5645161,-0.930040323 16.2846774,2.79012097 C19.5983871,6.1046371 19.9532258,11.2635081 17.3653226,14.9820565 C17.7354839,15.0602823 18.0895161,15.240121 18.3758065,15.5256048 L18.3758065,15.5256048 L23.7935484,20.9449597 C24.5822581,21.73125 24.5822581,23.0070565 23.7935484,23.7957661 C23.0080645,24.5836694 21.7322581,24.5836694 20.9427419,23.7957661 L20.9427419,23.7957661 L15.525,18.3780242 C15.2370968,18.090121 15.0580645,17.7368952 14.9798387,17.3667339 C11.2620968,19.9530242 6.10241935,19.5981855 2.78951613,16.2860887 C-0.92983871,12.565121 -0.92983871,6.51108871 2.78951613,2.79012097 Z M14.5741935,4.50141129 C11.7967742,1.72479839 7.2766129,1.72479839 4.5,4.50141129 C1.72419355,7.27883065 1.72419355,11.7981855 4.5,14.5756048 C7.2766129,17.3530242 11.7967742,17.3530242 14.5741935,14.5756048 C17.3516129,11.7981855 17.3516129,7.27883065 14.5741935,4.50141129 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path></g></svg>';


// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on-sale',
    'soldOutLabelHtml': '<div>' + bcSfFilterConfig.label.sold_out + '</div>',
    'saleLabelHtml': '<div>' + bcSfFilterConfig.label.sale + '</div>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',

    // Grid Template
  'productGridItemHtml': '<div class="product-listing {{promoClass}}">' +
                                '<div class="product-image {{imageHover}}">' +
                                    '<a href="{{itemUrl}}">' +
                                        '{{widefit_tag}}' +
                                        '{{hot_product}}' + 
                                        '{{most_popular}}' +
                                        '{{tiktokTag}}' +
                                        '<img data-src="{{primaryImageDesktop}}" alt="{{itemTitle}}" class="img-fluid lazyload" data-second-image="{{secondThumbUrl}}" />' + 
                                    '</a>' +
                                    '{{itemWishlist}}' +
  '<img class="promoImage"  src="https://cdn.shopify.com/s/files/1/0359/5049/3835/files/2_FOR_95_AUS_1.png?v=1611743765" width="50px">'+
                                    '{{itemQuickview}}' +
  									
                                '</div>' + 
                                '<div class="product-details">' + 
                                     // '{{discount_tara_10_tag}}'+
                                    //  '{{discount_leo_size_tag}}'+
                                    //  '{{discount_new_20_tag}}'+
  								     // '{{discount_spring_boots_tag}}'+
                                     // '{{discount_sale_10_tag}}'+
                                     // '{{discount_halley_sizeup_tag}}'+
                                    '<h3 class="product-title"><a href="{{itemUrl}}">{{itemTitle}}</a></h3>' +
                                    '{{itemPrice}}'  + '{{customText}}' +
                                '</div>' + 
                            '</div>',

    // Pagination Template
    'previousActiveHtml': '<li class="previous"><a href="{{itemUrl}}">Previous</a></li>',
    'previousDisabledHtml': '<li class="previous disabled">Previous</li>',
    'nextActiveHtml': '<li class="next"><a href="{{itemUrl}}">Next</a></li>',
    'nextDisabledHtml': '<li class="next disabled">Next</li>',
    'pageItemHtml': '<li class="page"><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
    'pageItemSelectedHtml': '<li class="page active" aria-current="page">{{itemTitle}}</li>',
    'pageItemRemainHtml': '<li class="page">{{itemTitle}}</li>',
    'paginateHtml': '<nav role="navigation"><ol class="pagination">{{previous}}{{pageItems}}{{next}}</ol></nav>',
  
    // Sorting Template
    'sortingHtml': '<label for="bc-sf-filter-top-sorting-select" class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select id="bc-sf-filter-top-sorting-select" class="collection-sort__input">{{sortingItems}}</select>',
};

/************************** BUILD PRODUCT LIST **************************/

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
    var productTags = data.tags;
    var allCollections = data.collections;
  console.log(data);
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add Thumbnail
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src']) : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);
	
    
  	if($.inArray("blackfriday", productTags) !== -1){
      var cyberclass = 'cyber_color';
    } else {
       var cyberclass = '';
    }
  
  
  	var present = '';
  
  	for (var key in allCollections) {
       //newArr = newArr.push(allCollections[key].handle);
      if(allCollections[key].handle == 'boots-promo') {
      	var present = 'promopresent';

      }
      
  }

  

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '')  {
        if (onSale) {

            //Calculate percentage off
            var decrease = data.compare_at_price_max - data.price_min;
            var newNumber = decrease / data.compare_at_price_max * 100;
            var roundPercentageOff = Math.trunc(newNumber);

            itemPriceHtml += '<span class="product-price sale product_new_sale_price '+cyberclass+' '+present+'"><span class="money">' + this.formatMoney(data.price_min) + ' ('+ roundPercentageOff+'% off)</span><span class="original-price money">' + this.formatMoney(data.compare_at_price_min) + '</span></span> ';
        } else {
            if(customTextBanner(data) != ''){
              itemPriceHtml += '<span class="product-price discounted_price'+cyberclass+' '+present+'"><span class="money">' + this.formatMoney(data.price_min) + '</span></span>';
            }else{
              itemPriceHtml += '<span class="product-price '+cyberclass+' '+present+'"><span class="money">' + this.formatMoney(data.price_min) + '</span></span>';
            }
            
        }
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  
    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  
    // Add soldOut Label
    var itemSoldOutLabelHtml = soldOut ? bcSfFilterTemplate.soldOutLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabelHtml);
  
  	var promoClass = 'promoProduct';
  	if(present == 'promopresent') {
  	itemHtml = itemHtml.replace(/{{promoClass}}/g, promoClass);	
    } else {
      itemHtml = itemHtml.replace(/{{promoClass}}/g, '');	
    }

    // Add onSale Label
    var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);


    // Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  
  	var current_url = window.location.href;
  	var product_url_build_by_appfxn = this.buildProductItemUrl(data);
  // 	if(current_url.includes("/collections/")) {
  //     if(product_url_build_by_appfxn.includes("/products/")) {
  //       var product_url_new = 'https://' +window.location.hostname+'/products/'+data.handle;
		// itemHtml = itemHtml.replace(/{{itemUrl}}/g, product_url_new);
  //     }
  //   } else {
  //     itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));
  //   }
     itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));
    //boost - 152573

    itemHtml = itemHtml.replace(/{{customText}}/g, customTextBanner(data));
  
    function customTextBanner(data) {
      
      
      
      

      
      var html = "";
      var tagOne = data.tags.find(element => {
        if (element.toLowerCase().includes('promo_')) {
          return true;
        }
      });

      var tagTwo = data.tags.find(element => {
        if (element.toLowerCase().includes('discount_per_')) {
          return true;
        }
      });
      var promoTag = '';
      var discountTag = '';
      var promoSplit = '';
      var promoCode = '';
      var discountSplit = '';
      var discountPer = '';
      var saleAmount = '';
      var discountAmount = '';
      var discountAmountSplit ='';
      var discountAmountFixed = '';
      var discountReplace = '';
      if (tagOne != undefined) {
      promoTag = tagOne;
      }
      if (tagTwo != undefined) {
       discountTag = tagTwo;
      }
      // console.log(promoTag);
      // console.log(discountTag);
      if (promoTag != '' && discountTag != '') {
        promoSplit = promoTag.split('_');
        promoCode = promoSplit[1];
        discountSplit = discountTag.split('_')
        discountPer =  discountSplit[2];
        saleAmount = data.price_min * discountPer / 100;
        discountAmount = data.price_min - saleAmount;
        discountAmountSplit = discountAmount / 100;
        // console.log(discountAmountSplit);
        // console.log(RoundNum(discountAmountSplit,2));
        discountAmountFixed = discountAmountSplit.toFixed(2);
        discountReplace = discountAmountFixed.replace(".", ".");
      }
      if (discountAmount != '') {
        html += '<div class="product-single__sale-bar">$' + discountReplace + ' With Code: ' + promoCode + '</div>';
        // html += '<span class="discount-price"> $' + discountReplace + '</span>';
       }
        return html;     
    }
 

    /*
        VELSTAR CUSTOM FUNCTIONS
    */

    /*
    BG: Primary Image Support
    */
    var primaryImageDesktop = images.length > 0 ? this.optimizeImage(data['images_info'][0].src, '800x800') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{primaryImageDesktop}}/g, primaryImageDesktop);

    /* 
    BG: Second Image support, if the product has more than one image, apply a class and store the url to a parameter
    */
    var imageHover = "";
    if (images.length > 1) {
        var secondThumbUrl = this.optimizeImage(data['images_info'][1].src, '800x800');
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, secondThumbUrl);
       
        imageHover = "product-image-hover";
    } else {
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, '');
    }
    itemHtml = itemHtml.replace(/{{imageHover}}/g, imageHover);
//     console.log(productTags);
//   console.log(allCollections);
  
    if($.inArray("Category_Wide Fit", productTags) !== -1){
    	var newTag = '<span class="wide-fit test">Wide Fit</span>';
        itemHtml = itemHtml.replace(/{{widefit_tag}}/g, newTag);
    } else {
    	itemHtml = itemHtml.replace(/{{widefit_tag}}/g, '');
    }

    if($.inArray("most-popular", productTags) !== -1){
    	var newTag_2 = '<span class="wide-fit most-popular">MOST POPULAR</span>';
        itemHtml = itemHtml.replace(/{{most_popular}}/g, newTag_2);
    } else {
    	itemHtml = itemHtml.replace(/{{most_popular}}/g, '');
    }
  
  if($.inArray("hot-product", productTags) !== -1){
    	var newTag_1 = '<span class="wide-fit hot-product">HOT Item</span>';
        itemHtml = itemHtml.replace(/{{hot_product}}/g, newTag_1);
    } else {
    	itemHtml = itemHtml.replace(/{{hot_product}}/g, '');
    }

  if($.inArray("tiktok_badge", productTags) !== -1){
        var tiktokTag = '<div class="tiktokTag">TIKTOK MADE ME BUY IT</div>'
        itemHtml = itemHtml.replace(/{{tiktokTag}}/g, tiktokTag);
      }else {
      	itemHtml = itemHtml.replace(/{{tiktokTag}}/g, '');
      }
  
  //<!---------- Start overlay code----------------------------->
//   if($.inArray("discount_halley_sizeup", productTags) !== -1){
// var discount_halley_sizeup = '<span class="discount_halley_sizeup_info">SIZE UP ON THIS STYLE</span>';
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, discount_halley_sizeup);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }
  
  
//   else if($.inArray("discount_tara_10", productTags) !== -1 && $.inArray("discount_new_20", productTags) !== -1){
// var discount_tara_10 = '<span class="discount_new_20_info">Tara Maynard collection</span>';
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, discount_tara_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');

// } 
  
// else if($.inArray("discount_tara_10", productTags) !== -1 && $.inArray("discount_sale_10", productTags) !== -1){
// var discount_tara_10 = '<span class="discount_new_20_info">Tara Maynard collection</span>';
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, discount_tara_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
// } 
  
//   else if($.inArray("discount_tara_10", productTags) !== -1 && $.inArray("discount_spring_boots", productTags) !== -1){
// var discount_tara_10 = '<span class="discount_new_20_info">Tara Maynard collection</span>';
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, discount_tara_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');

// } 
  
//   else if($.inArray("discount_tara_10", productTags) !== -1){
//    var discount_tara_10 = '<span class="discount_new_20_info">Tara Maynard collection</span>';
//    itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, discount_tara_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   }  
  
  
  
// if($.inArray("discount_spring_boots", productTags) !== -1 && $.inArray("discount_new_20", productTags) !== -1){
// var discount_spring_boots = '<span class="discount_new_20_info">FREE USA DELIVERY OVER $90</span>';
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, discount_spring_boots);
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//     itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }
// else if($.inArray("discount_sale_10", productTags) !== -1 && $.inArray("discount_new_20", productTags) !== -1){
// var discount_sale_10 = '<span class="discount_new_20_info">EXTRA 10% OFF! CODE: SPARKLE</span>';
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, discount_sale_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }
// else if($.inArray("discount_slippers_342", productTags) !== -1 && $.inArray("discount_new_20", productTags) !== -1){
// var discount_new_20 = '<span class="discount_new_20_info">15% Off With UniDays</span>';
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, discount_new_20);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }
 /* 
    else if($.inArray("discount_spring_boots", productTags) !== -1){
    var discount_spring_boots = '<span class="discount_new_20_info">30% OFF! CODE: SPRINGBOOTS</span>';
    itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, discount_spring_boots);
    itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
    itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
    itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
    itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
    itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
    itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
}  
 */ 
  
// else if($.inArray("discount_leo_size", productTags) !== -1){
// var discount_leo_size = '<span class="discount_leo_info">Size Down On This Style</span>';
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, discount_leo_size);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');

// }
// else if($.inArray("discount_new_20", productTags) !== -1){
// var discount_new_20 = '<span class="discount_new_20_info">FREE USA DELIVERY OVER $90</span>';
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, discount_new_20);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }
// else if($.inArray("discount_sale_10", productTags) !== -1){
// var discount_sale_10 = '<span class="discount_new_20_info">EXTRA 10% OFF! CODE: SPARKLE</span>';
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, discount_sale_10);
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');
// }

// else {
// itemHtml = itemHtml.replace(/{{discount_spring_boots_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_new_20_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_sale_10_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_slippers_342_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_leo_size_tag}}/g, '');
// itemHtml = itemHtml.replace(/{{discount_halley_sizeup_tag}}/g, '');
//   itemHtml = itemHtml.replace(/{{discount_tara_10_tag}}/g, '');

// }

    //<!---------- End overlay code----------------------------->
    

  
 
  
  
    /*
    BG: Smart Wishlist App intergration.
    */
    var itemWishList = '<span class="smartwishlist" data-product="'+ data.id +'" data-variant="'+ firstVariant.id +'"></span>'
    itemHtml = itemHtml.replace(/{{itemWishlist}}/g, itemWishList);

    /*
    BG: Product Quickview support
    */
   //<button class="product-quickview" aria-label="Quickview {{product.title}}" data-product-availability="{{product.available}}" data-product-url="{{ product.url | within: collection }}">
  
  
//   	if(current_url.includes("/collections/")) {
//       if(product_url_build_by_appfxn.includes("/products/")) {
//         var product_url_new = 'https://' +window.location.hostname+'/products/'+data.handle;
// 		itemHtml = itemHtml.replace(/{{itemUrl}}/g, product_url_new);
//       }
//     } else {
//       itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));
//     }
  	if(current_url.includes("/collections/")) {
      if(product_url_build_by_appfxn.includes("/products/")) {
        var product_url_new = 'https://' +window.location.hostname+'/products/'+data.handle;
		var itemQuickview = '<button class="product-quickview" aria-label="Quickview '+data.title+'" data-product-url="'+ product_url_new +'">'+searchIcon+'</button>'
      }
    } else {
      var itemQuickview = '<button class="product-quickview" aria-label="Quickview '+data.title+'" data-product-url="'+ this.buildProductItemUrl(data) +'">'+searchIcon+'</button>'
    }
  
  
  
    //var itemQuickview = '<button class="product-quickview" aria-label="Quickview '+data.title+'" data-product-url="'+ this.buildProductItemUrl(data) +'">'+searchIcon+'</button>'
    itemHtml = itemHtml.replace(/{{itemQuickview}}/g, itemQuickview);

    return itemHtml;
};

// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
    // // Add Description
    // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    // // Truncate by word
    // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
    // // Truncate by character
    // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
    // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    if (this.getSettingValue('general.paginationType') == 'default') {
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                afterCurrentPageArr.push(totalPage);
            }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};

/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                if (k == 'extra-sort1-descending') {
                  sortingItemsHtml += '<option value="' + k +'">' + 'NEW IN' + '</option>';
                } else {
                  sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
                }
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {

    //reload smart wishlist for adding wishlist buttons to items loaded via AJAX
	if (typeof ReloadSmartWishlist !== "undefined" && $.isFunction(ReloadSmartWishlist)) ReloadSmartWishlist();
};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
    productListingRatio();
    collectionFiltersMobileClose();
    collectionFilterMobileActions();
    collectionPagination(data.total_product);
    collectionSortByMobile();
    productQuickview();
    collectionProductHover();
    productCount(data.total_product);

    //BG: PF&S added this code for the custom sort by I made.
    jQ('body').click(function(e) {
        if(jQ(e.target).is('.sort-by-list li')){
            onInteractWithToolbar(e, 'sort', bcsffilter.queryParams.sort, jQ(e.target).data("value"));
            setTimeout(function(){jQ('.collection-overlay').removeClass('active')} , 700)
        }
    })
};

/* Begin patch boost-010 run 2 */
BCSfFilter.prototype.initFilter=function(){return this.isBadUrl()?void(window.location.href=window.location.pathname):(this.updateApiParams(!1),void this.getFilterData("init"))},BCSfFilter.prototype.isBadUrl=function(){try{var t=decodeURIComponent(window.location.search).split("&"),e=!1;if(t.length>0)for(var i=0;i<t.length;i++){var n=t[i],a=(n.match(/</g)||[]).length,r=(n.match(/>/g)||[]).length,o=(n.match(/alert\(/g)||[]).length,h=(n.match(/execCommand/g)||[]).length;if(a>0&&r>0||a>1||r>1||o||h){e=!0;break}}return e}catch(l){return!0}};
/* End patch boost-010 run 2 */

/* begin filter functionality updates */
const bcsfFilterUpdates = function(){
  let domCheck, sizeLabels, sizeLabelText, currentSize, numItems, colorBlock = null;
  let checkQuerySearch = false, siteSearchParams, heelLabels, showMore = null;
  const doDOMCheck = function(){
    let color = document.querySelector('#bc-sf-filter-option-block-color');
    let heelheight = document.querySelector('#bc-sf-filter-option-block-heel-height');
    let size = document.querySelector('#bc-sf-filter-option-block-size');
    let sizes = document.querySelector('#bc-sf-filter-option-block-sizes');
    let producttype = document.querySelector('#bc-sf-filter-option-block-product-type');
    if(color && (size || sizes) && producttype){
      clearInterval(domCheck);
      siteSearchParams = window.location.search;
      const addShowMore = function(id,el){
        let newLI = document.createElement('li');
        newLI.classList.add('showControl');
        let newA = document.createElement('a');
        newA.innerText = 'show more >';
        newA.id = id;
        newLI.appendChild(newA);
        if(!document.querySelector('a#'+id)) el.querySelector("ul > li:nth-child(5)").after(newLI);
        if(showMore === null) showMore = el;
        switch(id){
          case 'sizeShow':
            let domEl = (document.querySelector('#bc-sf-filter-option-block-size > ul') === null) ? document.querySelector('#bc-sf-filter-option-block-sizes > ul') : document.querySelector('#bc-sf-filter-option-block-size > ul');
            document.querySelector('a#sizeShow').addEventListener('click',function(){
              domEl.classList.add('showMore');
            });
            break;
          case 'colorShow':
            document.querySelector('a#colorShow').addEventListener('click',function(){
              colorBlock.classList.add('showMore');
              //document.querySelector('#bc-sf-filter-option-block-color > ul').classList.add('showMore');
            });
            break;
          case 'typeShow':
            document.querySelector('a#typeShow').addEventListener('click',function(){
              document.querySelector('#bc-sf-filter-option-block-product-type > ul').classList.add('showMore');
            });
            break;
        }
      };
      const doFilterUpdate = function(){
        heelheight = document.querySelector('#bc-sf-filter-option-block-heel-height');
        size = document.querySelector('#bc-sf-filter-option-block-size');
        sizes = document.querySelector('#bc-sf-filter-option-block-sizes');
        producttype = document.querySelector('#bc-sf-filter-option-block-product-type');
        size = (size === null) ? sizes : size;
        sizeLabels = size.querySelectorAll('span.bc-sf-filter-option-value');
        color = document.querySelector('#bc-sf-filter-option-block-color');
        for(let y=0;sizeLabels[y];y++){
          sizeLabelText = sizeLabels[y].innerText.split(' / ');
          if(sizeLabelText.length !== 3){
            sizeLabelText[0] = sizeLabels[y].innerText;
            sizeLabelText[1] = sizeLabels[y].innerText;
            sizeLabelText[2] = sizeLabels[y].innerText;
          }
          sizeLabels[y].setAttribute('data-size-eu',sizeLabelText[2]);
          sizeLabels[y].setAttribute('data-size-uk',sizeLabelText[1]);
          sizeLabels[y].setAttribute('data-size-us',sizeLabelText[0]);
          if(window.location.host.split('.')[0] === 'us') currentSize = sizeLabelText[0];
          else if(window.location.host.split('.')[0] === 'www') currentSize = sizeLabelText[1];
          else if(window.location.host.split('.')[0] === 'eu') currentSize = sizeLabelText[2];
          sizeLabels[y].innerText = currentSize;
        }
        heelLabels = document.querySelectorAll("#bc-sf-filter-option-block-heel-height > ul > li > a > span.bc-sf-filter-option-value");
        for(let j=0;heelLabels[j];j++){
          let heelLabel = heelLabels[j].innerText.split(' Inch')[0]+' inch';
          heelLabels[j].innerText = heelLabel;
        }
        numItems = (document.querySelector('#bc-sf-filter-option-block-size') === null) ? document.querySelectorAll("#bc-sf-filter-option-block-sizes > ul > li").length : document.querySelectorAll('#bc-sf-filter-option-block-size > ul > li').length;
        if(numItems >= 6) addShowMore('sizeShow',size);
        
        let sizeSelector = document.createElement('div');
        sizeSelector.id = 'sizeToggle';
        sizeSelector.innerHTML = '<span id="eu">EU</span> | <span id="uk">UK</span> | <span id="us" class="sizeActive">US</span>';
        let sizeH3 = (document.querySelector('#bc-sf-filter-option-block-size') === null) ? document.querySelector("#bc-sf-filter-options-wrapper > div.bc-sf-filter-option-block.bc-sf-filter-option-block-list.bc-sf-filter-option-block-sizes > div.bc-sf-filter-block-title > h3") : document.querySelector("#bc-sf-filter-options-wrapper > div.bc-sf-filter-option-block.bc-sf-filter-option-block-list.bc-sf-filter-option-block-size > div.bc-sf-filter-block-title > h3");
        sizeH3.after(sizeSelector);
        let sizeToggles = document.querySelectorAll("div#sizeToggle > span");
        for(let m=0;sizeToggles[m];m++){
          sizeToggles[m].addEventListener('click',function(){
            if(!sizeToggles[m].classList.contains('sizeActive')){
              document.querySelector("span#eu").classList.remove('sizeActive');
              document.querySelector("span#uk").classList.remove('sizeActive');
              document.querySelector("span#us").classList.remove('sizeActive');
            }
            sizeToggles[m].classList.add('sizeActive');
            let clickID = sizeToggles[m].getAttribute('id');
            let sizeEls = size.querySelectorAll("span.bc-sf-filter-option-value");
            for(let n=0;sizeEls[n];n++){
              sizeEls[n].innerText = sizeEls[n].getAttribute('data-size-'+clickID);
            }
          });
        }
        colorBlock = document.querySelector('#bc-sf-filter-option-block-color > div > div.jspPane > ul');
        colorBlock = (!colorBlock) ? document.querySelector('#bc-sf-filter-option-block-color > ul') : colorBlock;
        numItems = colorBlock.querySelectorAll('li').length;
        if(numItems >= 6) addShowMore('colorShow',color);
        
        numItems = document.querySelectorAll("#bc-sf-filter-option-block-product-type > ul > li").length;
        if(numItems >= 6) addShowMore('typeShow',producttype);
        
        let selectorItems = document.querySelectorAll("ul.bc-sf-filter-option-multiple-list > li");
        for(let y=0;selectorItems[y];y++){
          selectorItems[y].removeEventListener('click',function(){});
          selectorItems[y].addEventListener('click',function(){
            if(!selectorItems[y].classList.contains('showControl')){
              if(!selectorItems[y].classList.contains('activeFilter')){
                selectorItems[y].classList.add('activeFilter');
              } else {
                selectorItems[y].classList.remove('activeFilter');
              }
            }
          });
        }
        siteSearchParams = window.location.search;
        
        checkQuerySearch = setInterval(doCheckQuerySearch,250);
        const filterChange = function(){
          if(showMore === null){
            clearInterval(changeListener);
            doFilterUpdate();
          }
        };
        let changeListener = setInterval(filterChange,250);
      };
      const doCheckQuerySearch = function(){
        if(window.location.search !== siteSearchParams){
          clearInterval(checkQuerySearch);
          setTimeout(doFilterUpdate,500);
        }
      };
      doFilterUpdate();
    }
  };
  if(window.innerWidth < 992) domCheck = setInterval(doDOMCheck,100);
};
