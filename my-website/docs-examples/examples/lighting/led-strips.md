---
sidebar_position: 2
tags:
  - LED
  - RGB
  - RGBW
  - WW (warm/cold)
---

import PrintImg from '@site/src/components/print_img_button';
import PrintPage from '@site/src/components/print_page_button';

# LED strips

LED strips connection to the LED driver blocks

<a class="button button--secondary" href="#-fast-import-to-your-project"> <Translate>Go to Fast import</Translate>⬇️</a>

## 📜 Supported devices

- [W4](/docs/blocks/w4) LED driver block
![W4](/img/blocks_photo/W4_L.jpg)

## 🖇️ How to connect

![W4](/img/blocks_schemes/W4_1.png)
<PrintImg path="/img/blocks_schemes/W4_1.png" > </PrintImg>

## 💻 How to control

Any device is controlled via `nodes`.

:::tip
For more info visit our Node-RED [`CONNECT nodes page`](https://flows.nodered.org/node/connect-nodes)
:::

For control of the LED stripe you should to use the `CONNECT dimmer` node:

![LED strips nodes](/img/examples/led_strips/led-strips_2.png)

1. Select `CONNECT dimmer` node
![LED strips nodes](/img/examples/led_strips/1.png)

2. Double click. Choose or add your W4 block
![LED strips nodes](/img/examples/led_strips/2.png)

3. Choose needed output channel
![LED strips nodes](/img/examples/led_strips/3.png)

4. Add `inject` node and in its settings choose `number` type
![LED strips nodes](/img/examples/led_strips/4.png)

5. Set the value `0` for led strip turning off
![LED strips nodes](/img/examples/led_strips/5.png)

6. Coppy the `inject` and set them `50` and `100` values for half-bright and full-bright of your LED stripe. Connect the `inject` nodes and `dimmer` node.
Push `Deploy` and try to push buttons on your `inject` nodes. The strip should be changing its brightness.
![LED strips nodes](/img/examples/led_strips/6.png)

7. Let's setting up next three channels. Copy all nodes and paste it three more times
![LED strips nodes](/img/examples/led_strips/7.png)

8. Change numbers of W4 output channels. Push `Deploy` and try to push buttons on your `inject` nodes again.
![LED strips nodes](/img/examples/led_strips/8.png)


## 📲 How to visualise

For visualisation your LED (Single-color, WW, RGB, RGBW) loads you should to use one of the `UI nodes` below (depends on type of your LED load):

![LED strips UI nodes](/img/examples/led_strips/led-strips_1.png)

1. Select the `CONNECT UI rgbw` node and fill that settings
![LED strips nodes](/img/examples/led_strips/9.png)

2. Add four `CONNECT dimmer` nodes, one per W4 output channel
![LED strips nodes](/img/examples/led_strips/10.png)

3. Connect nodes together - Red, Green, Blue and White channels. Push `Deploy`
![LED strips nodes](/img/examples/led_strips/11.png)

4. Check your **CONNECT** UI: `WEB UI` or `App`
![LED strips nodes](/img/examples/led_strips/12.png)

5. It's possible to use not only `RGBW` control but also `single-colour LED`, `RGB`, `WW - warm/cold`
![LED strips nodes](/img/examples/led_strips/13.png)

6. `Deploy` changes and check your  **CONNECT** UI: `WEB UI` or `App`
![LED strips nodes](/img/examples/led_strips/14.png)


## 📡 Fast import to your project

[More about fast import](/docs-examples/fast-import)

``` jsx title="LED strips control"

[{"id":"9e56bfec50f6d141","type":"tab","label":"LED strips","disabled":false,"info":"","env":[]},{"id":"3b1c6186e7bf7f70","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":1,"minValue":0,"maxValue":100,"x":420,"y":100,"wires":[]},{"id":"63763abbfcacb69f","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"0","payloadType":"num","x":130,"y":100,"wires":[["3b1c6186e7bf7f70"]]},{"id":"dae63666cd056f05","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"50","payloadType":"num","x":130,"y":140,"wires":[["3b1c6186e7bf7f70"]]},{"id":"10be11c985465b7b","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"100","payloadType":"num","x":130,"y":180,"wires":[["3b1c6186e7bf7f70"]]},{"id":"9338d704d801cb70","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"2","minValue":0,"maxValue":100,"x":420,"y":240,"wires":[]},{"id":"720334e1d4ef5abf","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"0","payloadType":"num","x":130,"y":240,"wires":[["9338d704d801cb70"]]},{"id":"4c2e1863d840f53b","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"50","payloadType":"num","x":130,"y":280,"wires":[["9338d704d801cb70"]]},{"id":"564cc138497b143e","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"100","payloadType":"num","x":130,"y":320,"wires":[["9338d704d801cb70"]]},{"id":"77be774a4b97676b","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"3","minValue":0,"maxValue":100,"x":420,"y":380,"wires":[]},{"id":"4b3f2473fca1d2ca","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"0","payloadType":"num","x":130,"y":380,"wires":[["77be774a4b97676b"]]},{"id":"83ff723eb5ab68fc","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"50","payloadType":"num","x":130,"y":420,"wires":[["77be774a4b97676b"]]},{"id":"c1ea436ceec3cc1b","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"100","payloadType":"num","x":130,"y":460,"wires":[["77be774a4b97676b"]]},{"id":"503d93eec89f6b5e","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"4","minValue":0,"maxValue":100,"x":420,"y":520,"wires":[]},{"id":"15d0a55e6a66e852","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"0","payloadType":"num","x":130,"y":520,"wires":[["503d93eec89f6b5e"]]},{"id":"0ecd575dd0d4e638","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"50","payloadType":"num","x":130,"y":560,"wires":[["503d93eec89f6b5e"]]},{"id":"0675c0f07c7e2d63","type":"inject","z":"9e56bfec50f6d141","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"100","payloadType":"num","x":130,"y":600,"wires":[["503d93eec89f6b5e"]]},{"id":"5f157e67f2230761","type":"CONNECT UI rgbw","z":"9e56bfec50f6d141","name":"RGBW test","uiItemIconId":"1_1","displayName":"UI RGBW","roomConfig":"ff544d5657100234","categoryConfig":"ed03de577c63f7a2","rgbwMinValue":0,"rgbwMaxValue":100,"hueMinValue":0,"hueMaxValue":100,"satMinValue":0,"satMaxValue":100,"brightMinValue":0,"brightMaxValue":100,"hueSmoothIncrementPercent":"10","hueSmoothSpeedRate":"0.3","satSmoothIncrementPercent":"10","satSmoothSpeedRate":"0.3","brightSmoothIncrementPercent":"10","brightSmoothSpeedRate":"0.3","isHistorySave":false,"x":130,"y":840,"wires":[["5ff84017d5206830"],["34a8161f22443d8f"],["46d79b6e67407308"],["7f02aef4dad00c04"],[],[],[],[],[]]},{"id":"5ff84017d5206830","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":1,"minValue":0,"maxValue":100,"x":400,"y":780,"wires":[]},{"id":"34a8161f22443d8f","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"2","minValue":0,"maxValue":100,"x":400,"y":820,"wires":[]},{"id":"46d79b6e67407308","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"3","minValue":0,"maxValue":100,"x":400,"y":860,"wires":[]},{"id":"7f02aef4dad00c04","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"4","minValue":0,"maxValue":100,"x":400,"y":900,"wires":[]},{"id":"bd6667d5518eeb03","type":"CONNECT UI dimmer","z":"9e56bfec50f6d141","name":"LED Dimmer test","uiItemIconId":"1_1","displayName":"UI LED Dimmer","roomConfig":"ff544d5657100234","categoryConfig":"ed03de577c63f7a2","valuesRange":1,"minValue":0,"maxValue":100,"smoothIncrementPercent":"10","smoothSpeedRate":"0.3","isHistorySave":false,"x":150,"y":980,"wires":[["283dcac057e094b4"]]},{"id":"7bf73bdd833d6db3","type":"CONNECT UI warm cold","z":"9e56bfec50f6d141","name":"LED WW test","uiItemIconId":"1_1","displayName":"UI LED WW","roomConfig":"ff544d5657100234","categoryConfig":"ed03de577c63f7a2","wcMinValue":0,"wcMaxValue":100,"hueMinValue":0,"hueMaxValue":100,"brightMinValue":0,"brightMaxValue":100,"hueSmoothIncrementPercent":"10","hueSmoothSpeedRate":"0.3","brightSmoothIncrementPercent":"10","brightSmoothSpeedRate":"0.3","isHistorySave":false,"x":140,"y":1080,"wires":[["3dc23aa4bdf789ab"],["98239cfd6dc38d8d"],[],[],[],[]]},{"id":"764d7a51aa4eb45f","type":"CONNECT UI rgb","z":"9e56bfec50f6d141","name":"LED RGB test","uiItemIconId":"1_1","displayName":"UI LED RGB","roomConfig":"ff544d5657100234","categoryConfig":"ed03de577c63f7a2","rgbMinValue":0,"rgbMaxValue":100,"hueMinValue":0,"hueMaxValue":100,"satMinValue":0,"satMaxValue":100,"brightMinValue":0,"brightMaxValue":100,"hueSmoothIncrementPercent":"10","hueSmoothSpeedRate":"0.3","satSmoothIncrementPercent":"10","satSmoothSpeedRate":"0.3","brightSmoothIncrementPercent":"10","brightSmoothSpeedRate":"0.3","isHistorySave":false,"x":140,"y":1220,"wires":[["4bddcc5f6004b0a6"],["a3652d37b5a13c07"],["8205b4e3c44b13f6"],[],[],[],[],[]]},{"id":"283dcac057e094b4","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":1,"minValue":0,"maxValue":100,"x":400,"y":980,"wires":[]},{"id":"3dc23aa4bdf789ab","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":1,"minValue":0,"maxValue":100,"x":400,"y":1060,"wires":[]},{"id":"98239cfd6dc38d8d","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"2","minValue":0,"maxValue":100,"x":400,"y":1100,"wires":[]},{"id":"4bddcc5f6004b0a6","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":1,"minValue":0,"maxValue":100,"x":400,"y":1180,"wires":[]},{"id":"a3652d37b5a13c07","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"2","minValue":0,"maxValue":100,"x":400,"y":1220,"wires":[]},{"id":"8205b4e3c44b13f6","type":"CONNECT dimmer","z":"9e56bfec50f6d141","name":"","blockConfigId":"e8040429-e964","inputNumber":"3","minValue":0,"maxValue":100,"x":400,"y":1260,"wires":[]},{"id":"8d3433d152afbc04","type":"comment","z":"9e56bfec50f6d141","name":"How to control","info":"","x":90,"y":40,"wires":[]},{"id":"4d2546a39ac3dd00","type":"comment","z":"9e56bfec50f6d141","name":"How to visualise","info":"","x":100,"y":720,"wires":[]},{"id":"ff544d5657100234","type":"CONNECT UI room config","roomName":"Tutorial Room"},{"id":"ed03de577c63f7a2","type":"CONNECT UI category config","categoryName":"Tutorial Category"}]
```