# Smart Home - Window Control

The aim of this project is a cost-effective, environmentally friendly, modern and accessible concept of indoor air conditioning of a household.

The master thesis describes the development and implementation of the autonomous prototype, a Smart Home system, for passive air conditioning of a room, maintaining optimal air quality, humidity control, as well as protection from the precipitation damage that can occur when the window is left open.

The prototype is equipped with an Internet connection, a wireless indoor air sensor and a window chain motor, which is connected to a wireless switch. 
All components of the system are part of a wireless ZigBee network. The MQTT protocol is used to communicate and exchange information between the individual components. 
The system is autonomous and can work independently after user configuration. 
The user has the possibility to monitor the indoor and outdoor climatic condition on a web-based graphical user interface and to control the system manually when needed.
The solution is modular and can be expanded with more sensors and actuators as needed. All possible states and the corresponding system actions are recorded in a text file and can be easily adapted or transferred to other similar systems without special knowledge.

This Project uses Raspberry Pi, Node-Red and zigbee2mqtt technology.



Instalation Steps:
----------------------------------------------
1. Install MQTT Server like "Mosquitto": https://mosquitto.org/download/
2. Install ZigBee2MQTT Application: https://www.zigbee2mqtt.io/
3. Install Node-RED programming tool: https://nodered.org/docs/getting-started/
4. Download and copy this Repository in your Node-RED Folder
5. Start all services
6. Call Website:
- to view and edit the Flows go to "localhost:1880/"
- to use the Dashboard you need to go "localhost:1880/ui/" 

Requirments: ZigBee capable antenna

Devices used for this prototype:
----------------------------------------------

- Raspberry Pi 3 Model B+ mit
- with Texas Instruments CC2531 Antenne
- ZigBee Curtain Module QS-Zigbee-C01
- Apricolor Varia Chainmotor
- Tuya TS0601 Airsensor
