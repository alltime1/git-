Function.prototype.call2=function(context){
  context.fn=this
  context.fn()
  delete context.fn
  
}
let obj={
  age:12
}
function getAge(){
  console.log(this.age)
}
getAge.call(obj)
