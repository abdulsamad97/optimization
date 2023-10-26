$("input[name='product-size-number']:checked").each(function() {
        var idVal = $(this).attr("id");
        var size = $("label[for='"+idVal+"']").text();
        console.log(size);
       $(".product-swatch-label strong.size").text(size);
});

$('input:radio[name="product-size-number"]').on('click', function(e) {
    var variant_id = $(this).val();
    console.log(variant_id);
    var idVal = $(this).attr("id");
    var size = $("label[for='"+idVal+"']").text();
   $(".product-swatch-label strong.size").text(size);
   $('.product-swatch-list.mobile option[value="'+ variant_id +'"]').prop('selected', true);
//   	jQuery(".product-swatch-list.mobile option[value=variant_id]").attr('selected','selected'); 
});

// For removing tag in blog page


$('.tag-list li').filter(function() { return $.text([this]) === 'POBAE'; }).remove();
$('.sidebar-content ul li').filter(function() { return $.text([this]) === 'POBAE'; }).remove();

//For redirecting to blog listing page

$('#blog-read-more-btn').on('click',function(){
	window.location.href = "https://au.publicdesire.com/blogs/news";
});


//FOR MOBILE MENU
$("#site-navigation ul li.has-child").click( function () {
    $("#site-navigation ul li").toggle();
    $(this).toggle();
    $(this).find('ul li').toggle();
});
