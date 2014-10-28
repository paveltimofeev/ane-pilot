angular.module('dmpDB').service('client', function (esFactory) {
    return esFactory({
    host: 'http://localhost:19821/',
  });
});


angular.module('dmpDB').controller('databaseController', 
            ['$scope', 'client', '$q', '$interval', 
            function databaseController($scope, client, $q, $interval){
                    
                    var continousUpdate;
                    
                    function ResetAll() {
                        $scope.success = "";
                        $scope.info = "";
                        $scope.warning = "";
                        $scope.danger = "";
                        
                        $scope.data = [];
                        
                        $scope.updateCounter = 0;
                        $scope.updateTimeout = 1000;
                        $scope.updateIsPaused = false;
                        
                        $interval.cancel(continousUpdate);
                    }
                    
                    ResetAll();
                    
                    $scope.CheckAction = function() {
                        
                        ResetAll();
                        $scope.info = "Test Ok at " + new Date();
                    };
                    
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
                        
                    };
                    
                    $scope.GetData = function() {
                        ResetAll();
                        $scope.info = "GetData";
                    };
                    
                    $scope.UpdateData = function() {
                        ResetAll();
                        $scope.warning = "UpdateData";
                    };
                    
                    $scope.DeleteData = function() {
                        ResetAll();
                        $scope.danger = "DeleteData";
                    };
                    
                    $scope.ContinousUpdateView = function() {
                        
                        ResetAll();
                        
                        $scope.success = "Waiting ...";
                        continousUpdate = $interval(RequestData, $scope.updateTimeout, 0);
                    };
                    
                    $scope.PauseUpdateView = function() {
                        $scope.updateIsPaused = !$scope.updateIsPaused;
                    };
                    
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
                    
                    function RequestData() {
                        
                        if(!$scope.updateIsPaused)
                        {
                            $scope.updateCounter++; 
                            $scope.success = 'Response № ' + $scope.updateCounter;
                            
                            var index = Math.floor(Math.random() * 10);
                            
                            var value = Math.floor(Math.random() * $scope.updateCounter);
                            
                            var item = { 
                                'Column0' : 'value' + index,
                                'Column1' : 'value' + value,
                                'Column2' : 'value' + value,
                                'Column3' : 'value' + value,
                                'Column4' : 'value' + value
                            };

                            if($scope.updateCounter > 10)                            
                                $scope.data.splice(index, 1, item);
                            else
                                $scope.data.push(item);
                        }
                    }

            }
]);