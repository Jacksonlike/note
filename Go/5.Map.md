# Map

## 基本用法

### 声明

```go
m1 := map[int]int{1: 1, 2: 2, 3: 3}
fmt.Println(m1, len(m1)) // map[1:1 2:2 3:3] 3

m2 := map[string]int{}
m2["test"] = 100
fmt.Println(m2, len(m2)) // map[test:100] 1

m3 := make(map[string]int, 10 /* Initial Capacity */)
fmt.Println(m3, len(m3)) // map[] 0
```

### 取值

```go
m := map[string]int{}
m["test"] = 0
fmt.Println(m["test2"], m["test"]) // 0 0

if v, ok := m["test2"]; ok {
	fmt.Println("value: ", v)
} else {
	fmt.Println("no value") 
}
```

当访问的 key 值不存在时，仍然会返回零值，不能通过判断 `nil` 来判断元素是否存在。

### 遍历

```go
for key, value := range m {
	// ...
}
```

## 实现 Set

使用 `map[int]bool` 进行实现。

## 工厂模式

可以把 `map` 中的 `value` 设置为函数。



