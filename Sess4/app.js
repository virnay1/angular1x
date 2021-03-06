angular.module("app1",[])
  .controller("HomeController", function HomeController($scope){
    //Declare a list of Products
    $scope.products = [
      {
         id:1,
         name:"abc",
         price:38.43
      },
      {
        id:2,
        name:"pqr",
        price:43.23
      }      
    ];

    function checkProduct(id){
      //See if a product already exists
      for(i = 0;i < $scope.products.length;i++){
        if($scope.products[i].id == id){
           //Product is already present
           return true;
        }          
      }
      //Product is not already present
      return false;
    };

    $scope.addProduct = function(){      
      //Add a new Product to the List
      var newProduct = {
        id: $scope.productID,
        name:$scope.productName,
        price:$scope.productPrice
      };
      if(!checkProduct(newProduct.id)){
        //Save the new Item
         $scope.products.push(newProduct);
      }
      else{
        alert("Product already exists...");
      }
      
    };
  });