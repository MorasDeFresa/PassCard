#include "sensors/Manage_RC522.h"
#include "wifi/Wifi_Configuration.h"
#include "api/Api_Configuration.h"

String lastCardUUID="";
bool DetailsDebug=true;

void CreateAsistencia(std::array<String,1> data){
  lastCardUUID=data[0];
  Serial.println(data[0]);
  PostToBackend(data[0],DetailsDebug);
}

void setup(){
  Serial.begin(9600);
  std::array<IPAddress,1> IP_Esp32= WifiConnection();
  RC522_BeginSensor();
}

void loop(){
  std::array<String,1> data = RC522_ReadUUID();
  if(data[0]!= ""){
    if(data[0]!= lastCardUUID){
      CreateAsistencia(data);
    }
  }
}

