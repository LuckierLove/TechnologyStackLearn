# Redis特点
存储的是Key-Value数据结构
其中Key是字符串类型

# Redis中五种常用数据类型
- 字符串String
- 哈希Hash
- 列表List
- 集合Set
- 有序集合Sorted Set/ZSet

# Redis常用命令
## 字符串操作命令
SET key value 设置指定key的值

GET key 获取指定key的值

SETEX key seconds value 设置指定key的值，并将key的过期时间设置为seconds秒

SETNX key value 只有key不存在时设置key的值
## 哈希操作命令
HSET key field value 将哈希表key中的字段的值设置为value

HGET key field 获取存储在哈希表中指定字段的值

HDEL key field 删除哈希表中指定字段

HKEYS key 获取哈希表中所有字段

HVALS key 获取哈希表中所有值
## 列表操作命令
LPUSH key value1 [value2] 将一个或多个值插入到列表头部

LRANGE key start stop 获取列表指定范围的元素

RPOP key 移除并获取列表最后一个元素

LLEN key 获取列表长度
## 集合操作命令
SADD key member1 [member2] 向集合添加一个或多个成员

SMEMBERS key 返回集合中的所有成员

SCARD key 获取集合的成员数

SINTER key1 [key2] 返回给定所有集合的交集

SUNION key1 [key2] 返回给定所有集合的并集

SREM key member1 [member2] 删除集合中一个或多个成员
## 有序集合操作命令
ZADD key score1 member1 [score2 member2] 向有序集合添加一个或多个成员

ZRANGE key start stop [WITHSCORES] 通过索引区间返回有序集合中指定区间内的成员

ZINCRBY key increment member 有序集合中对成员的分数加上增量increment

ZREM key member [member] 移除有序集合中的一个或多个成员
## 通用命令
KEYS pattern 查找所有符合给定模式（pattern）的key

EXISTS key 检查给定key是否存在

TYPE key 返回key所存储的值的类型

DEL key 该命令用于在key存在时删除key