<template>
  <main class="home container">
    <div class="row">
      <div class="col-12 push-4-tablet col-4-tablet">
        <div class="row">
          <div class="col-12">
            <router-link as="a" :to="{name: 'Login'}" class="button button-primary block login">Login</router-link>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <router-link as="a" :to="{name: 'Signup'}" class="button button-primary block signup">Signup</router-link>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'home'
}
</script>
