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

Sound output:
/usr/bin $ sudo raspi-config
numid=3,iface=MIXER,name='PCM Playback Route'
  ; type=INTEGER,access=rw------,values=1,min=0,max=2,step=0
  : values=1

http://www.forum-raspberrypi.de/Thread-tutorial-xrdp-remote-desktop-verbindung-windows-android-ios-linux-mac-osx

ZigBee
sudo apt-get install qt4-default 
https://github.com/dresden-elektronik/deconz-rest-plugin


edit /usr/bin/deCONZ-run.sh
+cd /usr/bin/
+export DISPLAY=:0


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

http://www.youtube-mp3.org/de

commit note:
git commit -a  --author="bs <email>" -m "readme"


autorun:
https://wiki.ubuntuusers.de/systemd/Service_Units/
sudo cp DeConz.service /etc/systemd/system
systemctl list-unit-files --type=service
systemctl -t service -a
sudo systemctl status DeCONZ.service
sudo systemctl enable DeCONZ.service
sudo systemctl start DeCONZ.service
