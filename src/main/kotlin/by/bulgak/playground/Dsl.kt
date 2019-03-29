package by.bulgak.playground

import by.bulgak.playground.bean.*
import by.bulgak.playground.validator.validate

fun Query.having(@QueryDslMarker request: Condition<Having>.() -> Unit) {
    this.having = Condition<Having>().apply(request)
}

fun join(@ConnectionDslMarker request: Connection.() -> Unit): Connection {
    return Connection().apply(request)
}

fun Connection.condition(@QueryDslMarker request: Condition<Join>.() -> Unit) {
    this.condition = Condition<Join>().apply(request)
}

fun query(@QueryDslMarker request: Query.() -> Unit): String {
    val query = Query().apply(request)
    query.validate()
    return query.toString()
}