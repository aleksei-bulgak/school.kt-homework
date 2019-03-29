package by.bulgak.playground.bean

import by.bulgak.playground.QueryDslMarker

@QueryDslMarker
class Condition<T> {
    var left: String = ""
    var right: String = ""
    var condition: T? = null
    override fun toString(): String {
        return " $left ${condition.toString()} $right "
    }
}