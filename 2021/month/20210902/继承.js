function Parent() {}
function Child() {
	Parent.call(this)
}
// Object.create()方法创建一个新对象,使用现有的对象来提供新创建的对象的__proto__
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
