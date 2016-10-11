# Jenkins2Lamp-
JenkinsRestAPi to Lamp Bridge


howto XFD on RPi

https://www.raspberrypi.org/wp-content/uploads/2012/04/quick-start-guide-v2_1.pdf
Page3

get NOOBS

install Raspbian

http://weworkweplay.com/play/raspberry-pi-nodejs/

for remote access us 
ssh pi@192.168.247.76
username: pi
password: raspberry (unless you changed it in the Raspberry Pi Configuration program earlier in the tutorial.)

http://www.forum-raspberrypi.de/Thread-tutorial-xrdp-remote-desktop-verbindung-windows-android-ios-linux-mac-osx


ZigBee
sudo apt-get install qt4-default 
https://github.com/dresden-elektronik/deconz-rest-plugin


pi@XFD:~ $ export DISPLAY=:0
pi@XFD:~ $ cd /usr/bin/
pi@XFD:/usr/bin $ /usr/bin/deCONZ-run.sh

http://192.168.247.76:8080/index.html
delight / delight


http://dresden-elektronik.github.io/deconz-rest-doc/
http://dresden-elektronik.github.io/deconz-rest-doc/configuration/index.html
http://dresden-elektronik.github.io/deconz-rest-doc/lights/index.html

POST http://192.168.247.76:8080/api
{
    "username": "adfsjkladfsjl",
    "devicetype": "client"
}
Etag: "f95bab93da0a1841116266d2c7163f33"

get http://192.168.247.76:8080/api/f95bab93da0a1841116266d2c7163f33/config


PUT
http://192.168.247.76:8080/api/f95bab93da0a1841116266d2c7163f33/lights/1/state
{
  "on": true,
  "bri": 180,
  "hue": 43680,
  "sat": 255,
  "transitiontime": 10
}

{
  "on": true,
  "bri": 55,
  "hue": 44235,
  "sat": 155,
  "transitiontime": 1
}

{
  "on": true,
  "bri": 255,
  "hue": 44235,
  "sat": 155,
  "transitiontime": 2
}

OFF
{
  "on": false,
}

GREEN:
{
  "on": true,
  "bri": 200,
  "hue": 21845,
  "sat": 255,
  "transitiontime": 2
}

Yellow:
{
  "on": true,
  "bri": 200,
  "hue": 9703,
  "sat": 255,
  "transitiontime": 2
}

RED:
{
  "on": true,
  "bri": 200,
  "hue": 0,
  "sat": 255,
  "transitiontime": 2
}
commit note:
git commit -a  --author="fml <email>" -m "readme"




