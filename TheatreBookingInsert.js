 // load("TheatreBookingInsert.js")
 // db.Theatre.find().pretty()
 // use Theatre
 // db.dropDatabase()
 // cd("H:/Adv-Database")

db.Theatre.insert(
[
	{
		"Booking_Collection" : 
		[

			{
				"Theatre_Booking_ID" : 5,
				"Customer_Name" : "Nott Abbot",
				"Amount_Paid" : 240,
				"Date_Paid" : "2019-11-27",
				"Card_Type" : "MASTERCARD",
				"Card_Number" : "84108529",
				"Authorisation" : "",
				"Phone_Number" : "",
			
				"Performances" : 
				[
					{
						"_id" : "2019-12-12 05:00:00",
						"Seats" : "A1,A2"
					},
				
					{
						"_id" : "2019-12-13 18:00:00", 
						"Seats" : "C2-C5"
					}
				]
			}

		],

		"Performace_Collection" : 
		[
			{
				"Performance_ID" : "2019-12-12 11:00:00",
				"Free_Seats" : "A3-Z50",
				"Name" : "Wet Dog",
				"Description" : "A dog gets wet",
				"Mat_Eve" : "Mat"
			},
			{
				"Performance_ID" : "2019-12-13 18:00:00",
				"Free_Seats" : "A1-B30,C1,C6-Z50",
				"Name" : "Late Night",
				"Description" : "A person stays up late",
				"Mat_Eve" : "Eve"
			},
			{
				"Performance_ID" : "2019-12-13 18:00:00",
				"Free_Seats" : "A1-B30,C1,C6-Z50",
				"Name" : "Late Night",
				"Description" : "A person stays up late",
				"Mat_Eve" : "Eve"
			}
		],

		"Price_Bands" : 
		{
			"A-K" : {"Price" : "40", "Number_In_Row" : "30"},
			"L-S" : {"Price" : "30", "Number_In_Row" : "40"},
			"T-Z" : {"Price" : "25", "Number_In_Row" : "50"} 
		},


		"Customer_Collection" : 
		[
			{
				"Customer_ID" : 1,
				"Name" : "Nott",
				"Address" : "Abbot"
			},
			{
				"Customer_ID" : 2,
				"Name" : "Carne",
				"Address" : "Age"
			},
			{
				"Customer_ID" : 3,
				"Name" : "Linton",
				"Address" : "Lash"
			}
		]
	}
])