package by.bulgak.playground.bean

import by.bulgak.playground.ConnectionDslMarker
import by.bulgak.playground.bean.ConnectionType.INNER

@ConnectionDslMarker
class Connection {
    var type: ConnectionType = INNER;
    var leftTable = ""
    var rightTable = ""
    var condition: Condition<Join> = Condition()

    override fun toString(): String {
        return "$rightTable ON ${leftTable}.${condition.left} ${condition.condition?.value} ${rightTable}.${condition.right}"
    }
}

enum class Join(val value: String) {
    EQUAL("=")
}

enum class ConnectionType(val value: String) {
    INNER("JOIN"),
    LEFT_INNER("LEFT JOIN"),
    RIGHT_INNER("RIGHT JOIN"),
    CROSS_JOIN("CROSS JOIN"),
    LEFT_OUTER("LEFT OUTER JOIN"),
    RIGHT_OUTER("RIGHT OUTER JOIN");
}