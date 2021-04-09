<template>
  <div :title="title" @click="addCount">{{counter}}</div>
  <div v-tracking = "trackingDate" :style="{margin:trackingDate.value+'px'}">埋点</div>
  <input type="text" v-model="message">
  <div v-lazy="{callback:lazy}" class="page">
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>

</template>

<script>
    export default {
        name: "Layout",
        data(){
            return {
                counter:0, //使用模板语法将数据渲染进DOM 插值
                title:'You loaded this page on ' + new Date().toLocaleString(),//绑定props
                message:"hello vue", //实现双向数据绑定
                trackingDate:{
                    color:'red',
                    value:'',
                    callback:this.sendData
                }
            }
        },
        methods:{
            //添加事件监听器（绑定事件）
            addCount(){
                this.counter++;
            },
            sendData(params){
                console.log(params);
            },
            lazy(params){
                console.log(params);
            }
        }
    }
</script>

<style scoped>
  .page{
    height: 200px;
    background: grey;
    overflow: auto;
  }
</style>
