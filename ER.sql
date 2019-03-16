CREATE TABLE `Payment` (
  `Payment_ID : INTEGER` <type>,
  `* Booking_ID : INTEGER` <type>,
  `Card_Number : VARCHAR(TBD)` <type>,
  `Card_Type : VARCHAR(TBD)` <type>,
  `Amount_Payed : DECIMAL` <type>,
  `Field` <type>
);

CREATE TABLE `Booking` (
  `Booking_ID : INTEGER` <type>,
  `Booking_Date : TIMESTAMP` <type>,
  `Payment_ID : INTEGER` <type>,
  `Per_or_Tel : BOOLEAN` <type>,
  `Authorisation : INTEGER` <type>,
  `` <type>
);

CREATE TABLE `Performance` (
  `Performace_Date : DATETIME` <type>,
  `Name : VARCHAR(TBD)` <type>,
  `` <type>,
  `` <type>
);

CREATE TABLE `Booked Seat` (
  `Booking_ID : INTEGER` <type>,
  `Performace_Date : DATETIME` <type>,
  `* Seat_ID : VARCHAR(3)` <type>,
  `` <type>
);

CREATE TABLE `Ticket Category` (
  `Category_ID : INTEGER` <type>,
  `Price : DECIMAL` <type>,
  `` <type>
);

CREATE TABLE `All Seats` (
  `Seat_ID : VARCHAR(3)` <type>,
  `Performace_Date : DATETIME` <type>,
  `* Category_ID : INTEGER` <type>,
  `` <type>
);
