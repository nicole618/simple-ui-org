<demo>
可关闭提示框
</demo>
<template>
  <Button @click="showAlert" type="info"> 信息提示框 </Button>
  <Button @click="showAlert2" type="warning">警告提示框</Button>
  <Button @click="showAlert3" type="success">成功提示框</Button>
  <Button @click="showAlert4" type="error">错误提示框</Button>
</template>
<script lang="ts">
import { Alert, Button, openAlert } from "../lib/index";
export default {
  components: {
    Alert,
    Button,
  },
  setup() {
    const showAlert = () => {
      openAlert({
        message: "这是一条信息提示",
        isClose: true,
      });
    };
    const showAlert2 = () => {
      openAlert({
        message: "这是一条警告提示",
        type: "warning",
        isClose: true,
      });
    };
    const showAlert3 = () => {
      openAlert({
        message: "这是一条成功提示",
        type: "success",
        isClose: true,
      });
    };
    const showAlert4 = () => {
      openAlert({
        message: "这是一条错误提示",
        type: "error",
        isClose: true,
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