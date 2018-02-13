'use strict';

function f1(x,y=7,z=42){

}
function f2(x,y,z){
    if(y===undefined){
        y=7;
    }if(z===undefined){
        z=42;
    }
}
exports.compare = {
    'default-params': function () {
        f1()
    },
    'classic': function () {
       f2()

    }
};

require('bench').runMain();
