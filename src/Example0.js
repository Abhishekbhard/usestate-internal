function useState(initialValue) {
  var _val = initialValue; // _val is a locat variable create by useState();
  function state() {
    //state is a inner function a closer.
    return _val; // state uses _val declare by parent function
  }
  function setState(newVal) {
    _val = newVal; // setting _val without exposing _val
  }
  return [state, setState]; // exposing function for internal use.
}
var [foo, setFoo] = useState(0);
console.log(foo());
