package by.bulgak.playground.bean

enum class Having(val value: String) {
    LESS("<"),
    MORE(">"),
    EQUAL("="),
    LESS_OR_EQUAL("<="),
    MORE_OR_EQUAL(">="),
    NOT_EQUAL("!=");

    override fun toString(): String {
        return value
    }
}