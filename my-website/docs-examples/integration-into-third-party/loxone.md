---
sidebar_position: 1
---

# Loxone

## 🔌Integration via RS485 interface

To integrate any **CONNECT** smart blocks into Loxone system via RS485 interface:

1. Plug in USB between your PC and the **CONNECT** smart block
![CONNECT to Loxone](/img/examples/loxone-connect/1.jpg)

2. Launch `CONNECT Configurator` app on your PC

:::tip
You can download last version of  `CONNECT Configurator` by [this link](https://yoctoconnect.com/pages/iglass-smart-home-free-software-downloads)
:::

3. Select your **CONNECT** smart device in the list of found devices
![CONNECT to Loxone](/img/examples/loxone-connect/3.png)

4. Set the `YoctoBUS` setting to `Off`
![CONNECT to Loxone](/img/examples/loxone-connect/4.png)

5. Set needed `Bus address` and `Bus speed`
![CONNECT to Loxone](/img/examples/loxone-connect/5.png)

:::note
Address should be the unique for each RS485 device on the bus. However the Bus speed should be the same.
:::

6. Set `Baudrate` the same like in your RS485 settings of Loxone RS485 Extention
![CONNECT to Loxone](/img/examples/loxone-connect/6.png)

7. Disconnect USB and connect Loxone RS485 Extension with **CONNECT** smart block via RS485

8. In the `Loxone Config` add new `sensor` or `actuator` (depends of type of the **CONNECT** block you integrating) in RS485 Extention section
![CONNECT to Loxone](/img/examples/loxone-connect/8_1.png)
![CONNECT to Loxone](/img/examples/loxone-connect/8_2.png)
![CONNECT to Loxone](/img/examples/loxone-connect/8_3.png)
![CONNECT to Loxone](/img/examples/loxone-connect/8_4.png)

9. Write `ON` and `OFF` comands in your Loxone project for each channel of **CONNECT** block

:::tip
Full API and RS485 comands are represented in `API` sections for every [**CONNECT** smart block](/docs/intro/)
:::

10. That's all. Set any automation logic in your Loxone project using added **CONNECT** RS485 devices

## 💻 Integration via LAN

Soon...