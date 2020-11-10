//外观设计模式
//对外描述一个普通的过程，实际内部包含复杂的处理过程， 强调的是封装组合处理过程
//将复杂的子系统按逻辑进行组合，封装到一个系统里，对外提供统一的访问结果

function StepA1 (value) {
    console.log('Step A1 Over.')
    //to do logic by value
    return value
}

function StepA2 (value) {
    console.log('Step A2 Over.')
    //to do logic by value
    return value
}
function StepB (value1, value2) {
    console.log('Step B Over.')
    //to do logic by value
    return value1 + ' ' + value2
}

function facadeStep (value1, value2) {
    let resultA1 = StepA1(value1)
    let resultA2 = StepA1(value2)
    return StepB(resultA1, resultA2)
}

facadeStep(1,2)
