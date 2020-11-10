//享元设计模式
//是一种用来优化系统的设计模式，对于存在大量对象的系统，使用该设计模式可以显著减轻内存负担
//比如很多个对象有着明显的数据特征是，他们有几个字段信息经常的是重复的，那么就可以提取共同的部分作为一个新的对象
//虽然之前的数据结构逻辑上是正确的，修改后有点怪怪的，但是可以起到压缩空间的作用