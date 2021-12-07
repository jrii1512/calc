import { listenAndServe } from 'https://deno.land/std@0.113.0/http/server.ts';

const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
    let ret = 0;
    const oper = params.get('operation');
    //console.log(oper);
    const number1 = Number(params.get('number1'));
    const number2 = Number(params.get('number2'));

    if (oper === 'sum') {
        console.log('sum');
        ret = number1 + number2;
        console.log(ret);
    } else if (oper === 'product') {
        console.log('product branch');
        ret = number1 * number2;
    } else if (oper === 'difference') {
        ret = number1 - number2;
    } else if (oper === 'quotient') {
        ret = number1 / number2;
    } else {
        ret = 'Invalid parameters';
    }
    return new Response(`${ret}`);
};

listenAndServe(`:${port}`, handleRequest);
