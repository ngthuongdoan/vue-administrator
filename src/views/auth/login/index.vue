<template>
  <div
    class="
      bg-gradient-radial-to-bl
      from-gray-500
      to-gray-600
      w-full
      h-screen
      flex flex-col
      justify-center
      items-center
    "
  >
    <h1 class="text-2xl text-white font-bold">Vue Administrator</h1>
    <div class="w-96 my-10">
      <a-input
        ref="inputField"
        size="large"
        v-model="user.email"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="user" class="text-base" />
      </a-input>
      <br />
      <br />
      <a-input
        ref="inputField"
        size="large"
        v-model="user.password"
        :type="passwordType"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="key" class="text-base" />
        <a-icon
          slot="suffix"
          class="text-base cursor-pointer"
          style="color: rgba(0, 0, 0, 0.45)"
          :type="seePassword ? 'eye' : 'eye-invisible'"
          @click="seePassword = !seePassword"
        />
      </a-input>
      <br />
      <br />
      <a-button type="primary" size="large" icon="login¨¨" block @click="login">
        Login
      </a-button>
      <a-button-group class="w-full flex justify-center items-start mt-5" block>
        <a-button type="link">Forgot password</a-button>
        <a-button type="link">Sign up</a-button>
      </a-button-group>
    </div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { login as authLogin, logout as authLogout } from '@/api/auth';
import { Modal } from 'ant-design-vue';

export default {
  setup(props, { root }) {
    authLogout();
    root.$store.dispatch('User/clear');
    let user = ref({ email: '', password: '' });

    let seePassword = ref(false);
    let passwordType = ref('password');
    watch(seePassword, (value) => {
      passwordType.value = value ? '' : 'password';
    });

    const login = async () => {
      try {
        const response = await authLogin(user.value);
        root.$store.commit('User/setData', { ...response.user });
        root.$router.push('/');
      } catch (e) {
        Modal.error({
          title: 'Something went wrong',
        });
      }
    };
    return {
      user,
      seePassword,
      passwordType,
      login,
    };
  },
};
</script>

<style></style>
