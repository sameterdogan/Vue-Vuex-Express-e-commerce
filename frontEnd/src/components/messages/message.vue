<template>
      <transition name="fadeAway">
            <div class="card message-card error-background-card"
                 v-if="message.color==='danger'"
            >
                  <h2 class="card-title error-background-card-title">
                        Error
                        <span
                              class="dismiss"
                              @click.prevent="dismiss"
                        >
                             &times;
                        </span>
                  </h2>
                  <p class='p-3'>
                        {{message.message}}
                  </p>


            </div>
            <div class="card message-card success-background-card"
                 v-if="message.color==='success'"
            >
                  <h2 class="card-title success-background-card-title">
                        Success
                        <span
                              class="dismiss"
                              @click.prevent="dismiss"
                        >
                              x
                        </span>
                  </h2>

                  <p class="p-3">
                        {{ message.message }}
                  </p>

            </div>
      </transition>

</template>

<script>
export default {
      name: 'message',
      props:["message"],
      methods: {
            dismiss() {
                  this.$store.commit("DELETE_MESSAGE",this.message.id) ;
            }
      },

}
</script>

<style scoped>
.card {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 7px;
      padding: 0 0 5px;
      z-index: 5000;

}

.card-title {
      text-align: left;
      margin: 0;
      border-radius: 7px 7px 0 0;
      color: #f3f3f3;
      padding: 5px 10px;
      font-size: 1.17em;
}
.dismiss{
      cursor: pointer;
      float: right;
}
.message-card {
    position: relative;
      max-width: 400px;
      min-width: 200px;
}
.error-background-card{
      background: hsl(0, 80%, 95%);
}
.error-background-card-title{
      background: hsl(0, 80%, 70%);

}
.success-background-card{

}
.success-background-card-title{
      background: #28a745;
      color: white;
}

.fadeAway-enter-active {
      transition: all 0.3s ease;
}

.fadeAway-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fadeAway-leave-to,
.fadeAway-enter {
      opacity: 0;
      transform: translateX(100px);
}


</style>
