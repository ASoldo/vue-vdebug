# vue-vdebug

<p align="center">
    <img src="https://i.imgur.com/yOVvbrS.png">
    
</p>

<p align="center">
    Vue-V-Debug
    
</p>



![alt text](https://i.imgur.com/9mldyfF.png)

Vue V-Debug plugin for previewing HTML elements

How to use?

In main.js 

```
import vdebug from 'vue-vdebug'
Vue.use(vdebug)
```


Templates:

```
<p v-debug:color="'red'">Red</p> ,
<p v-debug:bgcolor="'blue'">Blue</p> , 
<p v-debug:color="'red'" v-debug:bgcolor="'blue'">Mix</p>

<Component v-debug:color="'red'" /> , 
<Component v-debug:bgcolor="'blue'" /> , 
<Component v-debug:color="'red'" v-debug:bgcolor="'blue'" />
```

Anywhere in your template you can put v-debug:color="'red'" and v-debug:bgcolor="'blue'" and preview bordered element for debuging purposes.

