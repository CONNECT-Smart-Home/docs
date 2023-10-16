---
title: FAQ
---

# Frequently asked questions

## The indicator on the block does not light up
Check the supply voltage at the terminals of the block with a multimeter, it may not be there :)

The voltage must correspond to the operating range (nominal value +24VDC).

If the block is powered via PoE, check that your switch has PoE mode enabled and the LAN cable is not damaged. Try connecting another PoE device with the same LAN cable.

## There is no connection with block via LAN
Check the LAN settings of the block. If you have enabled DHCP mode, then the block may have received a new IP address from your router. Scan your local network (for example, using [this LAN scanner](https://www.advanced-ip-scanner.com/)).

## There is no connection with the block via RS485
- Check that terminals A and B of the RS485 bus are connected correctly.
- Make sure the tire length does not exceed 300m.
- Check the RS485 bus settings in the block and on the receiving side - the block address and baud rate must match.
- Make sure the communication protocol (YoctoBUS or ModBus RTU) is configured correctly.
- Make sure that the data expected/transmitted from/to the block is correct, in accordance with the API for the selected protocol.
