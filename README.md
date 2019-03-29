## Kotlin DSL homework

#### Develop library for construct SQL queries with Kotlin DSL

##### Example:

Input
```sql
SELECT id, name, surname FROM Students
 ORDER BY surname LIMIT 100
```

Output
```Kotlin
query {
 columns = ("id", "name", "surname")
 from = "Students"
 orderBy = "surname"
 limit = 100
}
```
