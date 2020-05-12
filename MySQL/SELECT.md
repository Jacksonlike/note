# SELECT 相关知识点

## 基础知识

![示例数据表](../img/8.png)

下面的 SQL 语句都是基于这个表的。

### 查询列

```sql
SELECT name FROM heros;
SELECT name, hp_max, mp_max, attack_max, defense_max FROM heros;
SELECT * FROM heros;
```

### 起别名

```sql
SELECT name AS n, hp_max AS hm FROM heros;
```

### 查询常数

```sql
SELECT '王者荣耀' as platform, name FROM heros;
```

![示例数据表](../img/9.png)

### 去除重复行

```sql
SELECT DISTINCT attack_range FROM heros;
SELECT DISTINCT attack_range, name FROM heros; 
# DISTINCT 必须放在所有列名前面
```

### 排序检索的数据

使用 `ORDER BY` 子句可以排序

- 排序的列名： `ORDER BY` 后可以有一个或者多个列名，并且第一列先排序，第一列相同的情况下，再按照第二列进行排序，一次类推。
- 排序的顺序： `ORDER BY` 可以指定顺序，`ASC` 代表递增排序（默认），`DESC` 代表递减排序。
- 非选择列排序：可以按照非选择列进行排序，所以即使在 SELECT 后面没有这个列名，同样可以放到 ORDER BY 后面进行排序
-  `ORDER BY` 位置：通常位于 SELECT 语句的最后一条子句，否则会报错

```sql
SELECT name, hp_max FROM heros ORDER BY hp_max DESC;
```

### 约束返回结果的数量

使用 `LIMIT` 关键字可以限制返回记录数

```sql
SELECT name, hp_max FROM heros ORDER BY hp_max DESC LIMIT 5;
```

### 统计记录数量

```sql
-- 查询所有记录的条数
SELECT COUNT(*) FROM access_log; -- CONUT(1) 和 CONUT(*) 可以认为等效

-- 查询websites 表中 alexa列中不为空的记录的条数
SELECT COUNT(alexa) FROM websites;

-- 查询websites表中 country列中不重复的记录条数
SELECT COUNT(DISTINCT country) FROM websites;
```



## SELECT  顺序

### 关键字顺序

```sql
SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ...
```

### 语句执行顺序

```sql
SELECT DISTINCT player_id, player_name, count(*) as num # 顺序 5
FROM player JOIN team ON player.team_id = team.team_id # 顺序 1
WHERE height > 1.80 # 顺序 2
GROUP BY player.team_id # 顺序 3
HAVING num > 2 # 顺序 4
ORDER BY num DESC # 顺序 6
LIMIT 2 # 顺序 7;

FROM > WHERE > GROUP BY > HAVING > SELECT 的字段 > DISTINCT > ORDER BY > LIMIT
```

## Where 子句

eg:

```sql
SELECT name, hp_max FROM heros WHERE hp_max > 6000;
SELECT name, hp_max FROM heros WHERE hp_max BETWEEN 5399 AND 6811;
SELECT name, hp_max FROM heros WHERE hp_max IS NULL;
SELECT name, hp_max, mp_max FROM heros WHERE hp_max > 6000 AND mp_max > 1700 ORDER BY (hp_max+mp_max) DESC;
```

