#ifndef MANAGE_RC522
#define MANAGE_RC522

#include <MFRC522v2.h>
#include <MFRC522DriverSPI.h>
#include <MFRC522DriverPinSimple.h>
#include <MFRC522Debug.h>

void RC522_BeginSensor();
std::array<String,1> RC522_ReadUUID();


#endif