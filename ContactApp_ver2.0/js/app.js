var app = angular.module('contactApp', ['ngStorage']);
				app.controller('ContactsController',['$scope','$localStorage', function ($scope,$localStorage) {
					
                    if($localStorage.contact == null)
                        $scope.listContacts = [
                            {id: 001, name: 'Busola Okeowo', email: 'busolaokemoney@gmail.com', phone: 8026910113},
                            {id: 002, name: 'Obalolu Okeowo', email: 'obaokemoney@gmail.com', phone: 8026910113},
                            {id: 003, name: 'Pelumi Okeowo', email: 'obapelucreations@gmail.com', phone: 8026910113},
                        ];
                    else
					   $scope.listContacts = $localStorage.contact;
                    
					$scope.add = function() {
                        if($scope.name === undefined){
                            alert('Please Input Contact Name')
                        }
                        else if ($scope.email === undefined){
                            alert('Please Input Correct Email')
                        }
                        else if ($scope.phone === undefined){
                            alert('Please Input Phone Number')
                        }
                        else {
                            $scope.listContacts.push(
                                {id: $scope.id, name: $scope.name, email: $scope.email, phone: $scope.phone}
                            );
                            $scope.id = '';
                            $scope.name = '';
                            $scope.email = '';
                            $scope.phone = '';
                            $localStorage.contact = $scope.listContacts;
                        }
                    };
					
					$scope.edit = function(){
						var index = getSelectedIndex($scope.id);
						$scope.listContacts[index].name = $scope.name;
						$scope.listContacts[index].email = $scope.email;
						$scope.listContacts[index].phone = $scope.phone;
					};
					
					$scope.selectEdit = function(id) {
						var index = getSelectedIndex(id);
						var contact = $scope.listContacts[index];
						$scope.id = contact.id;
						$scope.name = contact.name;
						$scope.email = contact.email;
						$scope.phone = contact.phone;
					};
					
					$scope.del = function(id) {
						var result = confirm ('Are you sure?');
							if(result===true){
								var index = getSelectedIndex(id);
								$scope.listContacts.splice(index, 1);
							};
                         $scope.listContacts = $localStorage.contact;
					};
					
                    
					function getSelectedIndex(id) {
						for(var i=0; i<$scope.listContacts.length; i++)
							if($scope.listContacts[i].id==id)
								return i;
						return -i;
					};
				}]);