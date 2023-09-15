const object1 = {
    name : 'Yogesh',
    city : 'Ambala',
    getIntro : function(){
        console.log(this.name + " from " + this.city)
    }
}

const object2 = {
    name : 'Yogi'
}

//Never do this, but only for demonstration
object2.__proto__ = object1;

// object1.getIntro()
// prototype_PrototypalInheritance.js:5 Yogesh from Ambala
// undefined
// object2.getIntro()
// prototype_PrototypalInheritance.js:5 Yogi from Ambala
// undefined
// object2.__proto__.getIntro()
// prototype_PrototypalInheritance.js:5 Yogesh from Ambala
// undefined