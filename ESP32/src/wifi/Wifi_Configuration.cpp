#include "Wifi_Configuration.h"
#include "Wifi_Credentials.h"
#include "WiFi.h"
#include <WiFiClient.h>

std::array<IPAddress,1> WifiConnection(){
    std::array<IPAddress,1> ip;
    WiFi.begin(WIFI_SSID,WIFI_PASSWORD);
    Serial.print("Connecting to ");
    Serial.print(WIFI_SSID);
    Serial.print(" ");
    while(WiFi.status()!= WL_CONNECTED){
        delay(500);
        Serial.print('.');
    }
    Serial.println('.');
    ip[0]=WiFi.localIP();
    Serial.println("----------------------------------");
    Serial.println("Successful connection");
    Serial.print("IP ESP32: ");
    Serial.println(ip[0]);
    Serial.println("----------------------------------");
    return ip;
}