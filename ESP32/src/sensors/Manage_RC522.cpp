#include "Manage_RC522.h"

#include <MFRC522v2.h>
#include <MFRC522DriverSPI.h>
#include <MFRC522DriverPinSimple.h>
#include <MFRC522Debug.h>

// Circuit definitions
const int pin_ss = 5;

// Initialize library
MFRC522DriverPinSimple ss_pin(pin_ss);
MFRC522DriverSPI driver{ss_pin};
MFRC522 mfrc522{driver}; 

void RC522_BeginSensor(){
    static char result[25];
    mfrc522.PCD_Init(); 
    MFRC522Debug::PCD_DumpVersionToSerial(mfrc522, Serial);
} 


std::array<String,1> RC522_ReadUUID(){
    std::array<String,1> data = {"XD "};
    String uidString = "";

    if (!mfrc522.PICC_IsNewCardPresent()) {
        data[0]="";
        return data;
	}

	// Select one of the cards.
	if (!mfrc522.PICC_ReadCardSerial()) {
		data[0]="";
        return data;
	}

    for (byte i = 0; i < mfrc522.uid.size; i++) {
        if (mfrc522.uid.uidByte[i] < 0x10) {
            uidString += "0"; 
        }
        uidString += String(mfrc522.uid.uidByte[i], HEX);
    }
    data[0]=uidString;
    return data;
}

