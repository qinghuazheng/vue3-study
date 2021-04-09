let scrollEvent;
export default {
    //挂载到父组件的时候调用
    mounted(el,binding){
        scrollEvent = function(){
          binding.value.callback && binding.value.callback(str);
        };
        let str = {value:'xxxx'};
        el.addEventListener('scroll',scrollEvent);
    },
    unmounted(el){
        el.removeEventListener('scroll',scrollEvent);
    }
}
