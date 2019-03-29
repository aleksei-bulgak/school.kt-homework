package by.bulgak.playground.validator

import by.bulgak.playground.bean.Query;
import by.bulgak.playground.bean.Having;
import by.bulgak.playground.bean.Condition;

fun Query.validate() {
    if (columns.isEmpty() || columns.any { it.isBlank() }) {
        throw Exception("List of columns for return can not be empty or has blank lines")
    }
    if (from.isBlank()) {
        throw Exception("From element can not be nul or empty")
    }
    if (orderBy.isNotBlank() && columns.none { it.equals(orderBy) }) {
        throw Exception("Specified value for ordering $orderBy is not resented in result columns $columns")
    }
    if (limit != null && limit!! < 0) {
        throw Exception("Limit $limit should be positive integer value")
    }
    having?.validate()
}

fun Condition<Having>.validate() {
    if (left.isBlank()) {
        throw Exception("Having block must have non empty field")
    }
    if (condition == null) {
        throw Exception("Having block must have valid condition field")
    }
    if (right.isBlank()) {
        throw Exception("Having block must have non empty value")
    }
}