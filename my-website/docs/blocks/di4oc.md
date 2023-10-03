import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PrintImg from '@site/src/components/print_img_button';
import PrintPage from '@site/src/components/print_page_button';

# DI4 OC Open collector inputs

Four-channel digital open-collector / open-drain inputs block 

<PrintPage> </PrintPage>

### 💎 Possibilities
- Works with any open collector or open drain switches, sensors etc.
- Easy 2-wire connection
- Low delay - just 2 ms

![DI4 OC](/img/blocks_photo/DI4OC_L.jpg)

## ❓ Description
DI4 digital open collector or open drain inputs block intended for receiving signals from switches, sensors etc. in automated control systems in the fields of industry, housing and communal services and household services.

### 🔧 Technical data
| General |
|-|-|
| Design | Universal housing for mounting on a DIN rail (width 2 din) |
| Degree of protection housing | IP20|
| Supply voltage | 20…25 VDC (24 V nominal)|
| Power consumption, no more | 2.5 W |
| Number of digital inputs | 4 (for open collector or open drain connections)|

| Interfaces | |
|-|-|
|USB | Service connection|
|RS485** | YoctoBUS or Modbus RTU |
|Ethernet**| IEEE 802.3 10/100BASE-T (http, UDP)|
|WiFi**| IEEE 802.11 (http, UDP) |
** Depending on unit configuration.

:::tip
- For `YoctoBUS` blocks: the default exchange protocol type is `YoctoBUS`, initial configuration is not required.
- For `YoctoLAN` units: when connecting to the network via `Ethernet`, initial configuration is not required, when connected via WiFi, you must set the **SSID and Password** using the `CONNECT Configurator` software.
:::

:::note
To integrate the unit into third-party systems, the protocol and RS485 exchange rate, as well as network settings, are set through the free, cross-platform `CONNECT Configurator` software.
:::

## 👁‍🗨 How to connect

Soon...

## 🔌 API for integration into third-party systems

**General block control registers**

The block is controlled by setting and reading the values of the block registers.

| Register ID | Register description | Write | Read | Range of values |
|-|-|-|-|-|
| 1 | Channel 1 state | - | + | 0, 1 |
| 2 | Channel 2 state | - | + | 0, 1 |
| 3 | Channel 3 state | - | + | 0, 1 |
| 4 | Channel 4 state | - | + | 0, 1 |

---

<Tabs
  values={[
    {label: 'RS485 ModbusRTU', value: 'rs485_modbus'},
    {label: 'RS485 YoctoBUS', value: 'rs485_yocto'},
    {label: 'LAN', value: 'lan'},
  ]}>

<TabItem value="rs485_modbus">

RS485 setting registers.

| Register ID | Register description | Write | Read | Range of values |
|-|-|-|-|-|
| 203** | BaudRate RS485 | + | + | 3-9 |
| 206 | Id of the Modbus block | + | + | 1-247 |

** Correspondence of RS485 speed and value in register 203:

| Value | Speed, baud/s |
|-|-|
|3| 4800|
|4| 9600|
|5| 19200|
|6| 38400|
|7| 57600|
|8| 74880|
|9| 115200|

:::note
It is recommended to configure the RS485 parameters using the CONNECT Configurator software
:::

**ModbusRTU mode**

The unit supports standard exchange via the ModbusRTU protocol.

- **Reading** the state of the register is carried out by the command `3`.
- **Record** of value in the register is carried out by the command `6`.

:::tip
[More about the protocol ModbusRTU](https://wikipedia.org/wiki/Modbus)
:::

</TabItem>

<TabItem value="rs485_yocto">

:::note
It is recommended to configure the RS485 parameters using the CONNECT Configurator software
:::

**YoctoBUS mode**

:::info
`YoctoBUS` protocol commands are in text form.

- Writing a value to a register:
```
I_aaa_set_rrr_vvvvv
``` 
- Register value request:
```
I_aaa_state_rrr
```
- Block response to write value:
```
O_aaa_set_rrr_vvvvv
```
- Block response to a value request:
```
O_aaa_state_rrr_vvvvv
``` 

**aaa** - bus block address

**rrr** - register number

**vvvvv** - register value
:::

- **Read register value**

An example of requesting state 5 of a block register (block address is 15):

```
I_15_state_5
/or/
I_015_state_00005
```

An example of block response with value 1 in register 5:
```
O_015_state_005_00001
```

- **Receiving the changing value in the register**

An example of receiving message from block when in the 2th register value was changed  to 1 (block address is 11):
```
A_011_state_002_00001
```


</TabItem>
  
<TabItem value="lan">
    
Block outputs are controlled by sending an HTTP GET request.

:::note
The network parameters of the unit are configured using the CONNECT Configurator software
:::

- **Structure of HTTP `GET` requests for reading block register value**

|Header |Ip address of the block| Command | Separator |Register number |
|-|-|-|-|-|
|http:// |192.168.130.150| /state |_ |13|
In the example shown `http://192.168.130.150/state_13`, the block register value 13 is requested.

**The structure of the block response page to a `GET` request**

The body of the page (between the `<body>` tags) contains:
```
Control=″13″ Value=″1″
```
In the example shown, the block returned an HTML page with the text content `Control=″13″ Value=″1″`, which means that register 13 of the block is set to '1'.

- **Structure of UDP package transmitted by block when the value in the register is changing**

The text of the UDP package contains:
```
Control=″2″ Value=″1″
```
In the example shown, the block sent an UDP package with the text content `Control=″2″ Value=″1″`, which means that value in the register 2 was changed to '1'.


</TabItem>
</Tabs>


<PrintPage> </PrintPage>