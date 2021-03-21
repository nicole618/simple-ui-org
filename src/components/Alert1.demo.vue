<demo>
基础用法
</demo>
<template>
  <Button @click="showAlert" type="info"> 信息提示框 </Button>
  <Button @click="showAlert2" type="warning">警告提示框</Button>
  <Button @click="showAlert3" type="success">成功提示框</Button>
  <Button @click="showAlert4" type="error">错误提示框</Button>
</template>
<script lang="ts">
import Alert from "../lib/Alert.vue";
import Button from "../lib/Button.vue";
import { openAlert } from "../lib/openAlert";
export default {
  components: {
    Alert,
    Button,
  },
  setup() {
    const showAlert = () => {
      openAlert({
        message: "这是一条信息提示",
      });
    };
    const showAlert2 = () => {
      openAlert({
        message: "这是一条警告提示",
        type: "warning",
      });
    };
    const showAlert3 = () => {
      openAlert({
        message: "这是一条成功提示",
        type: "success",
      });
    };
    const showAlert4 = () => {
      openAlert({
        message: "这是一条错误提示",
        type: "error",
      });
    };
    return {
      showAlert,
      showAlert2,
      showAlert3,
      showAlert4,
    };
  },
};
</script>