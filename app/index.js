import './main.less';
import generateText from './sub';
import $ from 'jquery';

let app = document.createElement('div');
app.setAttribute('class','abc');
const myPromise = Promise.resolve(42);
myPromise.then(
    (number) => {
        $('body').append('<p>'+number+'</p>')
    }
);

app.innerHTML = '<h1>Hello World it</h1>';
document.body.insertBefore(app,document.body.firstChild);
app.appendChild(generateText());