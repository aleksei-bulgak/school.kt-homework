## Kotlin DSL homework

#### Develop library for construct SQL queries with Kotlin DSL

##### Example:

Input
```
SELECT id, name, surname FROM Students
 ORDER BY surname LIMIT 100
```

Output
```
query {
 columns = ("id", "name", "surname")
 from = "Students"
 orderBy = "surname"
 limit = 100
}
```