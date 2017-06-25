<template>
  <div class="new-message p1 mt2 rounded">
    <textarea class="textarea mb0 new-message__input" placeholder="Enter message" v-model="newMessage" @keyup.enter="addMessage"></textarea>
    <div class="new-message__inputs mt2">
      <button class="new-message__submit rounded py1 px2" type="submit" @click="addMessage">Send</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      createMessage: Function
    },
    data() {
      return {
        newMessage: ''
      }
    },
    methods: {
      addMessage () {
        if (this.newMessage.trim()) {
          // Persist a new message to the db
          this.createMessage({text: this.newMessage}).then(this.clearMessage)
        }
      },
      clearMessage() {
        this.newMessage = ''
      }
    }
  }
</script>
