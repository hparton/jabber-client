<template>
  <div class="chat">
    <messages
      :messages="messages.data"
      :user="user" />
    <compose
      :createMessage="createMessage" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import Messages from '../components/Messages.vue'
import Compose from '../components/Compose.vue'

export default {
  name: 'chat',
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('messages', {
      findMessagesInStore: 'find'
    }),
    ...mapGetters('users', {
      users: 'list'
    }),
    messages () {
      return this.findMessagesInStore({query: { $sort: {createdAt: 1} }})
    }
  },
  methods: {
    ...mapActions('messages', {
      findMessages: 'find',
      createMessage: 'create'
    }),
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({name: 'Login'})
    }
    // Query users from Feathers
    this.findUsers({
      query: {
        $sort: {email: 1},
        $limit: 25
      }
    })
    // Query messages from Feathers
    this.findMessages({
      query: {
        $sort: {createdAt: -1},
        $limit: 25
      }
    })
  },
  components: {
    Messages,
    Compose
  }
}
</script>
