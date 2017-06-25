<template>
  <div class="messages-container site-container--narrow p2">
    <ul class="messages mxn1">
      <li class="message m1 flex" v-bind:class="[sentBy(message.userId) ? '-personal' : '-other']" v-for="(message, index) in messages">
        <span class="message__text p2 table rounded">{{ message.text }}</span>
        <img class="message__avatar circle ml2" v-if="!sentBy(message.userId)" src="https://placeimg.com/54/54/any" alt="">
        <a class="message__remove" @click="deleteMessage(index)">x</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      messages: Array,
      user: Object,
      findMessages: Function
    },
    watch: {
      messages () {
        this.messages.length && this.scrollToBottom()
      }
    },
    methods: {
      sentBy (id) {
        return id === this.user._id
      },
      scrollToBottom () {
        this.$nextTick(() => {
          const node = this.$el.getElementsByClassName('messages')[0]
          node.scrollTop = node.scrollHeight
        })
      }
    }
  }
</script>
