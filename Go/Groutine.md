

# 常见案例

## 只执行一次

```go
type Singleton struct{}

var singleInstance *Singleton
var once sync.Once

func GetInstance() *Singleton {
	once.Do(func() {
		singleInstance = new(Singleton) // 只会执行一次
	})
	return singleInstance
}
```

## 仅需任意任务完成

```go
func runTask(id int) string {
	time.Sleep(10 * time.Millisecond)
	return fmt.Sprintf("The result is from %d", id)
}

func firstResponse() string {
	numberOfRunner := 10
	ch := make(chan string, numberOfRunner)
	for i := 0; i < numberOfRunner; i++ {
		go func(id int) {
			ret := runTask(id)
			ch <- ret
		}(i) // 这里 i 必须以参数的形式传递
	}
	return <-ch
}

func main() {
	fmt.Println(firstResponse())
}
```

## 所有任务完成

```go
// 方法一
func allResponse() string {
	numberOfRunner := 10
	ch := make(chan string, numberOfRunner)
	for i := 0; i < numberOfRunner; i++ {
		go func(id int) {
			ch <- runTask(id)
		}(i)
	}

	result := ""
	for j := 0; j < numberOfRunner; j++ {
		result += <-ch + "\n"
	}
	return result
}
```

```go
// 方法二
func allResponse() {
	wg := sync.WaitGroup
	numberOfRunner := 10
	ch := make(chan string, numberOfRunner)
	for i := 0; i < numberOfRunner; i++ {
		wg.Add(1)
		go func(id int) {
			ch <- runTask(id)
			wg.Done()
		}(i)
	}
	wg.Wait()
}
```

