<template>
    <div class="alert-notification">
        <v-alert
          :text="AlertStore.text"
          :type="AlertStore.type"
          closable
          class="animate__animated animate__rubberBand"
        ></v-alert>
    </div>
</template>

<script setup>
    import 'animate.css'

    import { useAlertStore } from '@/store/alert'

    const AlertStore = useAlertStore();

</script>


<style scoped>
.alert-notification{
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 30% 0 30%;
}

</style>