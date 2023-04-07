<template>
  <div class="auth">
    <form class="auth__form" @submit.prevent="sendForm">
      <input
        v-model="login"
        class="form-input"
        type="text"
        placeholder="Login"
      />
      <input
        v-model="password"
        class="form-input"
        type="password"
        placeholder="Password"
        autocomplete="off"
      />
      <button class="btn">send</button>
      <div v-if="error">Введены неверные учетные данные</div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AuthView",
  data() {
    return {
      login: "",
      password: "",
      error: false,
    };
  },
  methods: {
    ...mapMutations({
      setAuth: "setAuth",
    }),

    sendForm() {
      if (this.login !== "test_user" && this.password !== "Q1w2e3r4") {
        this.error = true;
        return;
      }

      localStorage.setItem("isAuth", true);
      this.setAuth(true);
      this.$router.push("/");
    },
  },
  watch: {
    login() {
      this.error = false;
    },
    password() {
      this.error = false;
    },
  },
};
</script>

<style scoped>
.auth__form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
}

.form-input {
  margin-bottom: 20px;
  height: 40px;
  padding: 5px;
}

.btn {
  height: 40px;
  cursor: pointer;
}
</style>
