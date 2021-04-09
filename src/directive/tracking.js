let clickEvent;
export default {
    //挂载到父组件的时候调用
    mounted(el,binding){
        console.log(el, binding.value);
        for(let key in binding.value){
            el.style[key] = binding.value[key];
        }
        clickEvent = function(){
          console.log('xxxx');
          binding.value.value = str.value;
          console.log(binding.value);
          binding.value.callback && binding.value.callback(str);
        };
        let str = {value:'20'};
        el.addEventListener('click',clickEvent);
    },
    unmounted(el){
        console.log('unmount')
        el.removeEventListener('click',clickEvent);
    }
}
