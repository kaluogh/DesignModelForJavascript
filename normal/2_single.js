//单例设计模式
//只能拿到一个实列

class UserInfo{
    static getInstance(name){
       if(!this.instance){
           this.instance = new UserInfo(name)
       }
       return this.instance
    }

    constructor(name){
        this.name = name
        this.instance = null
    }

    toString(){
        return 'This is a connection of ' + this.name
    }
}

let tempUserInfo1 = UserInfo.getInstance('bokepei')
console.log(tempUserInfo1.toString())
let tempUserInfo2 = UserInfo.getInstance('jimfy')
console.log(tempUserInfo1.toString())
console.log(tempUserInfo1 == tempUserInfo2)