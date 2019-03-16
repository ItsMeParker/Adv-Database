CREATE TABLE `Booking` (
  `Booking_ID : INTEGER` <type>,
  `Per_or_Tel : BOOLEAN` <type>,
  `Authorisation : INTEGER` <type>
);

CREATE TABLE `Payment` (
  `Payment_ID : INTEGER` <type>,
  `* Booking_ID : INTEGER` <type>,
  `Card_Number : VARCHAR(8)` <type>,
  `Card_Type : VARCHAR(30)` <type>,
  `Amount_Paid : DECIMAL` <type>
);

CREATE TABLE `Ticket Category` (
  `Category_ID : INTEGER` <type>,
  `Price : DECIMAL` <type>
);

CREATE TABLE `Seat` (
  `Performace_Date : DATETIME` <type>,
  `Seat_ID : VARCHAR(3)` <type>,
  `* Booking_ID : INTEGER` <type>,
  `* Category_ID : INTEGER` <type>
);

CREATE TABLE `Seat Booking` (
  `Booking_ID : INTEGER` <type>,
  `Performace_Date : DATETIME` <type>
);

CREATE TABLE `Performance` (
  `Performace_Date : DATETIME` <type>,
  `Name : VARCHAR(100)` <type>
);
