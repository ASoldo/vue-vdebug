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
<p v-debug:color="'red'">Red</p> ,
<p v-debug:bgcolor="'#0000ff'">Blue</p> , 
<p v-debug:color="'red'" v-debug:bgcolor="'blue'">Mix</p>

<Component v-debug:color="'red'" /> , 
<Component v-debug:bgcolor="'#0000ff'" /> , 
<Component v-debug:color="'red'" v-debug:bgcolor="'blue'" />
```

Anywhere in your templates you can put v-debug:color="'red'" and/or v-debug:bgcolor="'#000ff'" and preview wireframed element for debuging purposes.

# Use case:

* -Wireframing
* -Responsivness preview
* -Grid/layout preview
