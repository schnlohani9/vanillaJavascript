let w = 'Hello';
function a() { return w;}
function b() { return function a() {return w} }
function c() { return function b() { return function a() {return w} } }