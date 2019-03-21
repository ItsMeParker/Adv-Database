

db.Booking_Collection.insert(
{
	_id: 4,
	"Customer" : 4,
	"Amount_Paid" : 400,
	"Date_Paid" : "TBD",
	"Card_Type" : "TBD",
	"Card_Number" : "TBD",
	"Authorisation" : "TBD",
	"Phone_Number" : "TBD",
	
	"Performances_Booked" : 
	[
		{
			"id" : 2,
			"Seats" : "A1,A2,C3-C5"
		}
	]
})


db.Customer_Collection.insert(
{ 
	_id: 4,
	"First_Name" : "Clinton",
	"Last_Name" : "East",
	"Address" : "West"
})
