class Iobserver{
    update (value){
        throw 'must be implementation'
    }
}

class ObA extends Iobserver{
    constructor(){
        super()
        this.message = '';
    }

    update (value) {
        this.message = value
        console.log(`This is ObA, I get new message: ${value}, Thanks.`)
    }
}

class ObB extends Iobserver{
    constructor(){
        super()
        this.message = '';
    }

    update (value) {
        this.message = value
        console.log(`This is ObB, I get new message: ${value}, Thanks.`)
    }
}

class ObC extends Iobserver{
    constructor(){
        super()
        this.message = '';
    }

    update (value) {
        this.message = value
        console.log(`This is ObC, I get new message: ${value}, Thanks.`)
    }
}

class IobserverAble{
    constructor(){
        this.ableArray = []
    }

    addMember(member){
        throw 'must be implementation'
    }

    removeMember(member){
        throw 'must be implementation'
    }

    broadcastMember(message){
        throw 'must be implementation'
    }
}

class MessageCenter extends IobserverAble{
    constructor(){
        super()
        this.message = ''
    }

    addMember(member){
        this.ableArray.push(member)
    }

    removeMember(index){
        this.ableArray.splice(index, 1)
    }

    broadcastMember(){
        this.ableArray.forEach(item => {
            item.update(this.message)
        })
    }

    setMessage(message){
        this.message = message
        this.broadcastMember()
    }
}

let mc = new MessageCenter()
let obA = new ObA()
let obB = new ObB()
let obC = new ObC()

mc.addMember(obA)
mc.addMember(obB)
mc.addMember(obC)

mc.setMessage('hello')
mc.removeMember(1)
mc.setMessage('world')

console.log(obB.message)