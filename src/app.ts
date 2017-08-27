import { addToPI, sayHello } from "./my-lib.js";
import { compile } from './support.js';

const fivePlusPI = addToPI(5);

console.log(fivePlusPI);

(async () => await fetch('./template.html')
    .then(resp => resp.text())
    .then(source => {
        console.log(source);
        
        const template = compile(source);
        const html = template({ title: sayHello('Bob'), body: 'How are you?' });

        console.log(html);

        const body = document.querySelector('body');

        if (!body) {
            return;
        }

        body.insertAdjacentHTML('afterbegin', html);
    }))();
