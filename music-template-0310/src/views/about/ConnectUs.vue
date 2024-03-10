<script lang="ts" name="ConnectUs">
import { ref } from 'vue';
export default {
  setup() {
    const titel = ref('');
    const message = ref('');
    const name = ref('');
    const number = ref('');
    const email = ref('');

    return { titel, message, name, number, email };
  },
};

</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <van-cell-group inset>
      <div class="pl-[12px] border-l-[3px] border-[color:var(--van-primary-color)] mb-[12px]">
        <h3 class="font-bold text-[18px] my-[4px]">帮助我们完善</h3>
      </div>
      <van-field v-model="titel" label="主题" placeholder="请输入主题" />
      <van-field v-model="message" rows="5" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言"
        show-word-limit />
      <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="number" type="tel" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" />
      <van-button id="ConnectUsSubmit" type="primary" block>提交</van-button>
    </van-cell-group>

  </div>


</template>

<style></style>