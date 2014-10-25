angular.module('dmpDB').service('client', function (esFactory) {
    return esFactory({
    host: 'http://localhost:19821/',
  });
});


angular.module('dmpDB').controller('databaseController', 
            ['$scope', 'client', 
            function databaseController($scope, client){
                    
                    function ResetAll() {
                        $scope.success = "";
                        $scope.info = "";
                        $scope.warning = "";
                        $scope.danger = "";
                        
                        $scope.data = null;
                    }
                    
                    ResetAll();
                    
                    $scope.CheckAction = function() {
                        
                        ResetAll();
                        $scope.info = "Test Ok at " + new Date();
                    }
                    
                    $scope.CreateData = function() {
                        ResetAll();
                        $scope.success = "CreateData";
                        
                        /*
                        $scope.data = [ { 
                            'Column0' : 'value0',
                            'Column1' : 'value1',
                            'Column2' : 'value2',
                            'Column3' : 'value3',
                            'Column4' : 'value4'
                        } ]
                        */
                        
                        client.create({
                                  index: 'my_dmp_index',
                                  type: 'mytype',
                                  id: '1',
                                  body: {
                                    Column0: 'value0',
                                    Column1: 'value1',
                                    Column2: 'value2',
                                    Column3: 'value3',
                                    Column4: 'value4'
                                  }
                                }, function (error, response) {
                                  
                                  $scope.success = response;
                                  $scope.danger = error.message;
                                  
                                });
                        
                    }
                    
                    $scope.GetData = function() {
                        ResetAll();
                        $scope.info = "GetData";
                    }
                    
                    $scope.UpdateData = function() {
                        ResetAll();
                        $scope.warning = "UpdateData";
                    }
                    
                    $scope.DeleteData = function() {
                        ResetAll();
                        $scope.danger = "DeleteData";
                    }
                    
                    $scope.ContinousUpdateView = function() {
                        ResetAll();
                        $scope.success = "ContinousUpdateView";
                    }
                    
                    $scope.GetCount = function() {
                    
                        ResetAll();
                        
                        $scope.info = 'Getting the number of documents for the index ...';
                        
                        try
                        {
                            client.count({ index: 'my_dmp_index'}, 
                                            function (error, response) {
                                                
                                                ResetAll();
                                                $scope.success = response.count;
                                                $scope.danger = error;
                                        });
                        }
                        catch(ex)
                        {
                            $scope.warning = ex;                        
                        }
                    }
            }
]);