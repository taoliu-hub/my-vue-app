<template>
    <h1>This is an life-cycle page</h1>
</template>

<script>
export default {
    beforeCreate() {
        console.log('life-cycle ==>', `the component is now beforeCreate.`)
    },
    created() {
        console.log('life-cycle ==>', `the component is now created.`)
    },
    beforeMount() {
        console.log('life-cycle ==>', `the component is now beforeMount.`)
    },
    mounted() {
        console.log('life-cycle ==>', `the component is now mounted.`)
    },
    beforeUpdate() {
        console.log('life-cycle ==>', `the component is now beforeUpdate.`)
    },
    updated() {
        console.log('life-cycle ==>', `the component is now updated.`)
    },
    beforeUnmount() {
        console.log('life-cycle ==>', `the component is now beforeUnmount.`)
    },
    unmounted() {
        console.log('life-cycle ==>', `the component is now unmounted.`)
    },


    
    errorCaptured() {
        console.log('life-cycle ==>', `the component is now errorCaptured.`)
    },
    renderTracked() {
        console.log('life-cycle ==>', `the component is now renderTracked.`)
    },
    renderTriggered() {
        console.log('life-cycle ==>', `the component is now renderTriggered.`)
    },
    activated() {
        console.log('life-cycle ==>', `the component is now activated.`)
    },
    deactivated() {
        console.log('life-cycle ==>', `the component is now deactivated.`)
    },
    serverPrefetch() {
        console.log('life-cycle ==>', `the component is now serverPrefetch.`)
    }
}
</script>