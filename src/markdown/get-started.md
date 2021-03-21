# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import 'utter-simple-ui/package/lib/utter-simple-ui.css'
import {Button, Tabs, Switch, Dialog, Input, Alert} from "utter-simple-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "utter-simple-ui"
export default {
  components: {Button}
}
</script>
```

## 文档说明

文档中的示例使用的是相对引入组件，大家使用的使用只需绝对引入即可

```
//文档中的相对引入
import { Switch } from "../lib/index";
//绝对引入
import {Button} from "utter-simple-ui"
```