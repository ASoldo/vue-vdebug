<p align="center">
    <img src="https://i.imgur.com/u4oBt0J.png">
</p>

<p align="center">
    V-Debug
</p>

<p align="center">
    <img src="https://img.shields.io/badge/npm%20i-vue--vdebug-green">
    <img src="https://img.shields.io/npm/l/vue-vdebug">
    <img src="https://img.shields.io/twitter/follow/RootsterAnon?style=social">
</p>

<p align="center">
    <img src="https://i.imgur.com/9mldyfF.png">
</p>

Vue V-Debug plugin for wireframing HTML elements.

# How to use?

In main.js 

```javascript
import vdebug from 'vue-vdebug'
Vue.use(vdebug)
```

# Templates:

```html
<p v-debug:wire>Default border 1px dotted limegreen</p> 
<!-- Configuration options for wireframe -->
  <p v-debug:wire v-debug:color="'red'">Red border color</p> , 
  <p v-debug:wire v-debug:style="'dotted'">Dotted Border</p> , 
  <p v-debug:wire v-debug:size="'1px 1px'">Size 1px 1px</p>
<!-- -->

<!-- Set background color -->
<p v-debug:bgcolor="'#0000ff'">Blue background color</p>
<!--  -->

<Component v-debug:wire /> 
<!-- Configuration options for wireframe -->
  <Component v-debug:wire v-debug:color="'red'" /> 
  <Component v-debug:wire v-debug:style="'dotted'" /> 
  <Component v-debug:wire v-debug:size="'1px 1px'" /> 
<!--  -->

<!-- Set background color -->
<Component v-debug:bgcolor="'#000ff'" /> 
<!--  -->
```

Anywhere in your templates you can put v-debug:wire and preview wireframed element for debuging purposes.
Add color, style, size to wireframe for desired effects and needs.
Set background color for element alone or combine it with wireframe.

# Use case:

* Wireframing
* Responsivness preview
* Grid/layout preview


# Visual Studio Code Extension Beta

You can downlaod 'vsc-vdebug' from Extensions Tab and quickly remove all v-debug directives.
Just press 'CTRL/CMD' + P and type '>VSC VDebug Clean' or '>VDebug Clean' or '>Clean'

Note: this is a demo for now. Manual formatting may be required (prettier, format document...).

# Contributors are welcome ❤️❤️❤️! 
git -> https://github.com/ASoldo/vsc-vdebug