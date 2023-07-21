import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DMX Interface

One-channel DMX512 interface extention

### 💎 Possibilities
- Integration any DMX512 devices up to 64 per block
- Isolated DMX512 interface

![DMX](/img/blocks_photo/DMX_L.jpg)

## ❓ Description
DMX interface block intended for integration third-party DMX devices in automated control systems in the fields of industry, housing and communal services and household services.

### 🔧 Technical data
| General |
|-|-|
| Design | Universal housing for mounting on a DIN rail (width 2 din) |
| Degree of protection housing | IP20|
| Supply voltage | 10…25 VDC (12 or 24 V nominal)|
| Power consumption, no more | 2.5 W |
| Number of DMX512 interfaces | 1 |
| Isolated interface | Yes |
| Max number of DMX devices | 64 |

| Interfaces | |
|-|-|
|USB | Service connection|
|RS485** | YoctoBUS protocol |
|Isolated DMX | DMX512 protocol |
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

The block is controlled by next APIs:

---

<Tabs
  values={[
    {label: 'RS485 YoctoBUS', value: 'rs485_yocto'},
    {label: 'LAN', value: 'lan'},
  ]}>

<TabItem value="rs485_yocto">

:::note
It is recommended to configure the RS485 parameters using the CONNECT Configurator software
:::

**YoctoBUS mode**

:::info
`YoctoBUS` protocol commands are in text form.

- Setting new value to DMX address:
```
I_aaa_setDMX_1_ddd_vvv
``` 

- Read value from the DMX address:
```
I_aaa_stateDMX_1_ddd
``` 

**aaa** - bus block address

**ddd** - DMX controlled device address

**vvv** - value (brightness) from 0 to 255
:::

</TabItem>
  
<TabItem value="lan">
    
Soon...

</TabItem>
</Tabs>
