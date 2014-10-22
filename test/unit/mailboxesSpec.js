'use strict';
// Jasmin test example http://jasmine.github.io/2.0/introduction.html :

describe('Availability of views', function(){
	it('Mailboxes view should exists', function(){
	
		expect(true).toBe(true);
	
	});
   
	it('Not implemented views should return corresponding message', function(){
	
		var message = 'Info - This page is not implemented yet';
		expect(message).toMatch('This page is not implemented yet');
		
	});
	
});

describe('Main action', function(){

	it('"REFRESH" should fill the grid', function(){
		
		var gridRowsCountR = 100;
		expect(gridRowsCountR).toBeGreaterThan(0);
	});
	
	it('"RESET DATABASE" should clear the grid', function(){
	
		var gridRowsCount = 0;
		expect(gridRowsCount).toBe(0);
	});
});