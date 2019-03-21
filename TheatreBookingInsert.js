 // load("TheatreBookingInsert.js")
 // db.Theatre.find().pretty()
 // use Theatre
 // db.dropDatabase()
 // cd("H:/Adv-Database")


db.Booking_Collection.insert(
{
	_id: 1,
	"Customer" : 1,
	"Amount_Paid" : 240,
	"Date_Paid" : "2019-11-27",
	"Card_Type" : "MASTERCARD",
	"Card_Number" : "84108529",
	"Authorisation" : "",
	"Phone_Number" : "",

	"Performances_Booked" : 
	[
		{
			"id" : 1,
			"Seats" : "A1,A2"
		},
	
		{
			"id" : 2, 
			"Seats" : "C2-C5"
		}
	]
})

db.Performance_Collection.insert(
[
	{
		_id: 1,
		"Date" : "2019-12-12 11:00:00",
		"Free_Seats" : "A3-Z50",
		"Name" : "Wet Dog",
		"Description" : "A dog gets wet",
		"Mat_Eve" : "Mat"
	},
	{
		_id: 2,
		"Date" : "2019-12-13 18:00:00",
		"Free_Seats" : "A1-B30,C1,C6-Z50",
		"Name" : "Late Night",
		"Description" : "A person stays up late",
		"Mat_Eve" : "Eve"
	},
	{
		_id: 3,
		"Date" : "2019-12-14 12:00:00",
		"Free_Seats" : "A1-Z50",
		"Name" : "Early Morning",
		"Description" : "A person wakes up early",
		"Mat_Eve" : "Mat"
	}
])

db.Categories_Collection.insert(
[
	{
		_id: 1,
		"Begins" : "A",
		"Ends" : "K",
		"Price" : "40", 
		"Number_In_Row" : "30"
	},
	{
		_id: 2,
		"Begins" : "L",
		"Ends" : "S",
		"Price" : "30", 
		"Number_In_Row" : "40"
	},
	{
		_id: 3,
		"Begins" : "T",
		"Ends" : "Z",	
		"Price" : "25", 
		"Number_In_Row" : "50"
	} 	
])

db.Customer_Collection.insert(
[
	{
		_id: 1,
		"First_Name" : "Nott",
		"Last_Name" : "Abbot",
		"Address" : "23 not a street"

	},
	{
		_id: 2,
		"First_Name" : "Carne",
		"Last_Name" : "Age",
		"Address" : "n/a"
	},
	{
		_id: 3,
		"First_Name" : "Linton",
		"Last_Name" : "Lash",
		"Address" : "123 Street"
	}
])

