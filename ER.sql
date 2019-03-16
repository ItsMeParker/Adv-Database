CREATE TABLE `Customer` (
  `Customer_ID : INTEGER` <type>,
  `Field` <type>,
  `Field` <type>
);

CREATE TABLE `Performance` (
  `Performance_ID : INTEGER` <type>,
  `Performace_Date : TIMESTAMP` <type>,
  `Name : VARCHAR(TBD)` <type>
);

CREATE TABLE `Seat Booking` (
  `Booking_ID : INTEGER` <type>,
  `Performace_ID : INTEGER` <type>,
  `Seats_Booked : VARCHAR(100)` <type>,
  `Category_ID : INTEGER` <type>
);

CREATE TABLE `Ticket Categories` (
  `Category_ID : INTEGER` <type>,
  `Price : DECIMAL` <type>
);

CREATE TABLE `Payment` (
  `Payment_ID : INTEGER` <type>,
  `Booking_ID : INTEGER` <type>,
  `Card_Number : VARCAHR(TBD)` <type>,
  `Card_Type : VARCHAR(TBD)` <type>,
  `Amount_Payed : DECIMAL` <type>,
  `Field` <type>
);

CREATE TABLE `Booking` (
  `Booking_ID : INTEGER` <type>,
  `Booking_Date : TIMESTAMP` <type>,
  `Payment_ID : INTEGER` <type>,
  `Per_or_Tel : BOOLEAN` <type>,
  `Authorisatio
