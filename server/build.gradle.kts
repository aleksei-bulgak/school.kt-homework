plugins {
    kotlin("jvm")
    application
}

dependencies {
    val ktor_version = "1.1.3"

    compile("io.ktor:ktor-server-netty:$ktor_version")
    compile("io.ktor:ktor-server-core:$ktor_version")
    compile("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}

application {
    mainClassName = "by.bulgak.server.App"
}