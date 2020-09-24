const { template } = require("babel-core");

tpl = `
    <div class='root'>
        <div>{a.b}</div>
        <div>{a.c.d}</div>
    </div>
`;
data = {
    a: {
        b: 'I \'am b',
        c: {
            d: 'it is d'
        }
    }
}

function getTplStr(tpl, data) {
    let str = tpl;
    return tpl.replace(/\{\S*\}/g, str => {
        const s = str.replace(/[\{|\}]/g, "");
        console.log("s", s);
        const arr = s.split(".");
        console.log("arr", arr);
        let r = null;
        for(i of arr){
            !r ? r = data[i] : r = r[i];
            console.log("r", r, 'i', i);
        }
        return r;
    }).replace(/[\{|\}]/g, "");

}

getTplStr(tpl, data);


getTplStr = (tpl, data) =>
 new Function('data', 'return' +  '`' + tpl.replace(/{/g, '${data.') + '`')(data);