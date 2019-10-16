<template>
    <div class="list">
         <wv-header title="List" :fixed="false" background-color="#2196f3"></wv-header>
        列表
    </div>
</template>
<script>
export default {
    data () {
        return {
            name:"list"
        }
    },
    activated () {
        console.log(this.$store.state)
    }
}
</script>
<style lang="scss" scoped>

</style>