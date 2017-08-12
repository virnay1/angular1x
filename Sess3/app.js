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

    $scope.addProduct = function(){
      //Add a new Product to the List
      var newProduct = {

      };
      $scope.products.push(newProduct);
    };
  });