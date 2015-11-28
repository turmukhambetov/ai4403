/* This is a general layout of classes in Dragoman application */

var checkDuplicateReservation = function(bookingID){
	return false;
	//false if the bookingID record exists in reservations table//
}

var errHandle = function(errCode){
	console.log("Error # "+errCode);
	/* will diplay error code passed from other classes*/
}



var createReservation = function(bookingID){
	var logic = checkDuplicateReservation(bookingID);
	if (logic === true){
	console.log("get sessionID, userID from bookings table where bookingID matches "+bookingID);
	console.log("write a new record in the reservations table with bookingID, sessionID, userID");
	} 
	else {
	errHandle(1); 
	};
}

var createBooking=function(userID,sessionID){
//create a new booking for a session
var logic = checkDuplicateBooking(userID,sessionID);
if (logic===true){
	console.log("Here I create a new line in the booking DB");
	console.log("")
} else {
	errHandle(2);
}
	
}

createReservation(123);
console.log(checkDuplicateReservation(123));