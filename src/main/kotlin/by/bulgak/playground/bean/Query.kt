package by.bulgak.playground.bean

import by.bulgak.playground.QueryDslMarker

@QueryDslMarker
class Query {
    var columns: List<String> = listOf("*")
    var from: String = ""
    var connections: List<Connection>? = null
    var orderBy: String = ""
    var having: Condition<Having>? = null
    var limit: Int? = null

    override fun toString(): String {
        var query = columns.joinToString(prefix = "SELECT ", postfix = " ") { it }
                .plus("FROM").plus(" ").plus(from)
        if(connections != null) {
            query += connections?.map { " ${it.type.value} $it" }?.joinToString { it }
        }
        if (orderBy.isNotBlank()) query += " ORDER BY ".plus(orderBy)
        limit?.takeIf { it > 0 }?.apply { query += " LIMIT ".plus(this) }
        having?.apply { query = query.plus(" ").plus("HAVING").plus(this.toString()) }
        return query
    }
}