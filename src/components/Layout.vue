<template>
  <div :title="title" @click="addCount">{{counter}}</div>
  <input type="text" v-model="message">
</template>

<script>
    export default {
        name: "Layout",
        data(){
            return {
                counter:0, //使用模板语法将数据渲染进DOM 插值
                title:'You loaded this page on ' + new Date().toLocaleString(),//绑定props
                message:"hello vue" //实现双向数据绑定
            }
        },
        methods:{
            //添加事件监听器（绑定事件）
            addCount(){
                this.counter++;
            }
        }
    }
</script>

<style scoped>

</style>
