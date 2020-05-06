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

