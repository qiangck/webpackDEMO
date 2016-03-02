//我们这里使用CommonJS的风格
export default function(){
    var elem = document.createElement('h2');
    elem.innerHTML = 'Hello World';
    return elem;
}