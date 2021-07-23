<p align="center">
    npm i vue-vdebug
</p>

<p align="center">
    <img src="https://i.imgur.com/yOVvbrS.png">
</p>

<p align="center">
    V-Debug
</p>

<p align="center">
    <img src="https://img.shields.io/npm/l/vue-vdebug">
</p>

Vue V-Debug plugin for wireframing HTML elements.

# How to use?

In main.js 

```
import vdebug from 'vue-vdebug'
Vue.use(vdebug)
```


# Templates:

```
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
