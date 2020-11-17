// 备忘录设计模式
// 备忘录设计模式也可以理解为一种备份设计模式， 用来进行对象内部状态的备份。 当然，备份的可能并不是完整的对象， 我们在使用文本编辑器时可以撤销， 浏览网页时可以返回， 都是备忘录模式的实际应用。

class AmemontoState{
    constructor(){
        this._stateArray = []
    }

    revokeState() {
        return this._stateArray.pop()
    }

    saveState(state){
        this._stateArray.push(state)
    }

    refreshState(){
        throw 'must be implementation'
    }

    getState(){
        return this._stateArray.length > 0 ? this._stateArray[this._stateArray.length - 1] : null
    }
}

class Test extends AmemontoState{
    constructor(name, value){
        super()
        this.name = name
        this.value = value
    }

    refreshState(){
        let tempState = this.getState()
        if(tempState){
            this.name = tempState.name
            this.value = tempState.value
        }
    }

    show(){
        console.log(`${this.name} - ${this.value}`)
    }

    saveCurrent(){
        this.saveState({
            name: this.name,
            value: this.value
        })
    }

}

let tempTest = new Test('test', 1)
tempTest.saveCurrent()
tempTest.show()
tempTest.value = 2
tempTest.saveCurrent()
tempTest.show()
tempTest.value = 3
tempTest.show()

tempTest.refreshState()
tempTest.show()
tempTest.revokeState()
tempTest.refreshState()
tempTest.show()
tempTest.revokeState()
tempTest.refreshState()
tempTest.show()