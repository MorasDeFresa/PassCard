#include "sensors/Manage_RC522.H"

void setup(){
  Serial.begin(9600);
  RC522_BeginSensor();
}

void loop(){
  std::array<String,1> data = RC522_ReadUUID();
  if(data[0]!= ""){
    Serial.println(data[0]);
  }
}