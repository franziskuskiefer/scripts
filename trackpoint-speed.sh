#!/bin/bash
# change thinkpad trackpoint speed
sudo sh -c "echo -n 250 > /sys/devices/platform/i8042/serio1/serio2/sensitivity"
sudo sh -c "echo -n 160 > /sys/devices/platform/i8042/serio1/serio2/speed"
