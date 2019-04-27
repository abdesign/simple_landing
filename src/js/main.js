
// JSON Data to hold products from the product catalog in order to simulate dynamic data
const prodCat = [

  {
    id: 1,
    name: "6-5/8\" 4 LED Millenium 1 Marker Light",
    img: ["cat_001.jpg","cat_001_low.jpg"],
    price: "13.99 - 14.99"
  },

  {
    id: 2,
    name:"Peterbilt Stainless Steel Classic Half Moon H4 Headlight",
    img: ["cat_002.jpg","cat_002_low.jpg"],
    price: "191.99"
  },

  {
    id: 3,
    name: "4\" Pearl Square Double Face LED Light",
    img: ["cat_003.jpg","cat_003_low.jpg"],
    price: "66.99"
  },

  {
    id: 4,
    name: "Peterbilt 388, 389, 567 2008+ Projection Headlight",
    img: ["cat_004.jpg","cat_004_low.jpg"],
    price: "322.99"
  },

  {
    id: 5,
    name: "Double JJ Peterbilt Aluminum Headlight Brackets",
    img: ["cat_005.jpg","cat_005_low.jpg"],
    price: "325.99"
  },

  {
    id: 6,
    name: "36 LED Grakon 5000 Replacement Cab Light",
    img: ["cat_006.jpg","cat_006_low.jpg"],
    price: "24.99"
  },

  {
    id: 7,
    name: "PIAA Night Tech Performance Halogen Headlight Bulbs (PR)",
    img: ["cat_007.jpg","cat_007_low.jpg"],
    price: "64.99 - 89.99"
  },

  {
    id: 8,
    name: "Peterbilt Low Beam Projection Headlight with LED",
    img: ["cat_008.jpg","cat_008_low.jpg"],
    price: "70.99"
  }

];

// JSON Data to hold FEATURED products from the product catalog in order to simulate dynamic data
const prodFeatured = [

  {
    id: 9,
    name: "4\" Pearl Round Double Face LED Light",
    img: ["featured_001.jpg","featured_001_low.jpg"],
    price: "57.99"
  },
  {
    id: 10,
    name: "Peterbilt 386, 387 Chrome Projection Headlight",
    img: ["featured_002.jpg","featured_002_low.jpg"],
    price: "199.99"
  },
  {
    id: 11,
    name: "Night Dominator Projector LED Headlight Bulbs (PR)",
    img: ["featured_003.jpg","featured_003_low.jpg"],
    price: "145.99"
  }

];


(function($){

  /**
  * featuredProducts()
  *
  * @desc Creates HTML Widgets Based on a JSON Data Set for featured products in the catalog
  * @param array $prodFeatured - the array of objects that contain data for each featured product
  */

  $.fn.featuredProducts = function(prodFeatured){
    
    let row = this;

    // Seperate row to hold link elements in order to maintain column heights on larger screens
    let newRow = $(row).parent().append('<div class="row" id="featured-products-links"></div>') 

    // Loop through each product in the data set
    for(let i in prodFeatured){
      
      // Create a new jQuery element from the product data
      let element = $(
        '<div id="featured-'+prodFeatured[i].id+'" class="featured-widget col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">'+
        '<div class="widget-container">'+
        '<div class="ovr"><span>View Full<br> Product<br> Details<br><i class="fa fa-2x fa-arrow-circle-right"></i></span></div>'+
        '<img class="img-responsive lazyload" data-src="img/products/'+prodFeatured[i].img[0]+'" src="img/products/'+prodFeatured[i].img[1]+'" alt="'+prodFeatured[i].name+'">'+
        '</div>'+
        '<p>'+prodFeatured[i].name+'</p>'+
        '<a href="#" class="visible-xs">Add to Cart</a>'+
        '</div>'
      );

      // Append the new element 
      $(row).append(element);

      // Create element for the link that is appended to a seperate row for larger screens
      let linkElement = $(
        '<div id="featured-'+prodFeatured[i].id+'-link" class="featured-widget-link col-sm-4 hidden-xs">'+
        '<a href="#">Add to Cart</a>'+
        '</div>'
      );
      
      $(newRow).append(linkElement);

    }

  } 

  /**
  * catHeights()
  *
  * @desc Resizes the heights of the catalog product widgets so that they remain the same height regardless
  * of text content/size
  *
  * @param none
  */

  $.fn.catHeights = function(){

    let catalog = this;
    let maxheight = 0;
 
    // Reset the height of the p element before calculating new sizes
    $(catalog).find('p').css('min-height', 'auto');

    // loop through each element and find the largest height of the group
    $(catalog).children('.container').children('.row').each(function() {
        if($(this).find('p').innerHeight() > maxheight){
          maxheight = $(this).find('p').innerHeight();
        }
    });

    // assign the max height to a css property
    $(catalog).find('p').css('min-height',maxheight);

  }

  /**
  * catProducts()
  *
  * @desc Creates HTML Widgets Based on a JSON Data Set for reamining products in the catalog
  * @param array $prodCat - the array of objects that contain data for each product
  */


  $.fn.catProducts = function(prodCat){
    
    let catalog = this;
    let cnt = 1;
    let total = 1;
    let prodRow = '';
    
    // Loop through each product in the data set
    for(let i in prodCat){
      
      // Keep track of number of products so that only 4 appear per row of products in the catalog listing
      if(cnt == 1){
        $(catalog).children('.container').append('<div class="row" id="cat-products-'+total+'"></div>');
        prodRow = $('#cat-products-'+total);
      }

      // Create a new jQuery element from the product data
      let element = $(
          '<div id="cat-'+prodCat[i].id+'" class="catalog-widget col-md-3 col-md-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">'+
          '<div class="ovr col-md-12"><span>View Full<br> Product<br> Details<br><i class="fa fa-2x fa-arrow-circle-right"></i></span></div>'+
          '<div class="bg col-md-12">'+
          '<div class="widget-container">'+
          '<img class="img-responsive lazyload"  data-src="img/products/'+prodCat[i].img[0]+'" src="img/products/'+prodCat[i].img[1]+'" alt="'+prodCat[i].name+'">'+
          '</div>'+
          '<p>'+prodCat[i].name+'</p>'+
          '<span class="price">$'+prodCat[i].price+'</span>'+
          '</div>'+
          '</div>'
      );

      // Append the new element 
      $(prodRow).append(element);     

      if(cnt == 4){
        cnt = 1;
        total++;
      }else{
        cnt++;
      }
    
    }

  } 

  $(document).ready(function(){

    // Load the Featured Products
    $('#featured-products').featuredProducts(prodFeatured);

    // Load the product catalog items
    $('#catalog').catProducts(prodCat);

    // Assign the mouseover action to the Featured Product Items
    $('#featured-products .widget-container').mouseover(function(){
      $(this).children('.ovr').addClass('active');
    });

    $('#featured-products .widget-container').mouseleave(function(){
      $(this).children('.ovr').removeClass('active');
    });

    // Assign the mouseover action to the Product Catalog Items
    $('#catalog').find('.catalog-widget').mouseover(function(){
      $(this).find('.bg').addClass('active');
      $(this).find('.ovr').addClass('active');
      $(this).find('.ovr').innerWidth($(this).find('.bg').innerWidth());
    });

    $('#catalog').find('.catalog-widget').mouseleave(function(){
      $(this).find('.bg').removeClass('active');
      $(this).find('.ovr').removeClass('active');
    });
    
  }).resize(); // Note resize is triggered when document is loaded.

  $(window).resize(function(){

    // Resize the product catalog items so that the columns are of equal height
    // (Alternatively, Flexbox CSS could be used but specs weren't provided for project)
    $('#catalog').catHeights();

  });

})(jQuery); 


