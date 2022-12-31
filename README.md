# Hash-BenchMark-Test
Testing speed and collisions of various hash algorithms with Nodejs

```console
Test Result Example

[Examples]
------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  key | djb2a        | sdbm         | fnv1a        | murmur3      | crc32        | hashsum      | fnv1a52      | farmhash     | xxhash       | farmhash64   | xxhash64     | spark-md5   
------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    0 | KbP          | M            | Yeroz        | 3QWkBF       | 4u0Xwl       | 8daa1a0c     | 4JTd77pgZ    | iYIsp        | 1k3wWu       | fmsQY2zzEWG  | 7K9EEghXNGM= | cfcd208495d565ef66e7dff9f98764da
    1 | KbO          | N            | X62LO        | 2I8Lzt       | 2pIySH       | 8daa1a0a     | 4JzQWOF2q    | 3MG5hN       | 3lH5Bg       | klnqjoz9o40  | 1GQFNnYStLc= | c4ca4238a0b923820dcc509a6f75849b
    2 | KbR          | O            | 10veE5       | 1jUA7        | ut3Bj        | 8daa1a08     | 4KvVrIUgP    | JHQen        | dVh7S        | lwVlqJxIVUI  | i1mAFmK1IWA= | c81e728d9d4c2f636f067f89cc14862c
    3 | KbQ          | P            | ZmQ1k        | hUPiY        | 20H0tJ       | 8daa1a06     | 4Kczhq8Yc    | I7WFx        | 2SaIpS       | kYEjhNuMZqA  | pCwW9Sp8FiY= | eccbc87e4b5ce2fe28308fd9f2a7baf3
    4 | KbL          | Q            | TGQTx        | 47GG5a       | 4sIb8Y       | 8daa1a04     | 4IDMrUsAZ    | 3OqteG       | 20IXZA       | kQI8EjJFbE0  | iWukLDIUOZE= | a87ff679a2f3e71d9181a67b7542122c
    5 | KbK          | R            | SysgM        | 1wm22M       | 2qEVf8       | 8daa1a02     | 4IkqhBILc    | 31kjKa       | wb5hp        | 9sA3YPyizu4  | 7Ui2BXS0gWo= | e4da3b7fbbce2345d7772b0674a318d5
   10 | oAhm         | dud9         | vHlm4        | 2t9Hu7       | 2XdhPX       | 6c336c95     | b30YGYjjR    | 4qtqtt       | 1fQSzj       | ijAzbsOKiWq  | F3+wow5VSEs= | d3d9446802a44259755d38e6d163e820
  100 | d5jeY        | rBLH3        | 1TaZf6       | 3MxvuD       | EgEpY        | 1a3a263b     | beArFDPmi    | 58XSj        | 4kKkaB       | cfSlIjH70Iu  | JmwG5UgxTlU= | f899139df5e1059396431415e770c6dd
 1000 | 2h9ZLC       | 4Gf5ZZ       | DhbzS        | 3F1rs8       | 3iy5q7       | 2d0aa155     | 36VOelXo8    | 3lD9sI       | 20UCjX       | e6prOGANtmA  | s8o1GLqPpGo= | a9b7ba70783b617e9998dc4dd82eb3c5
10000 | 7FXes        | 3PGVMJ       | 1Vamrq       | 2jCmow       | 2bWTs1       | 7449897b     | 5hlCZbug2    | 4tfsxz       | 1XZuZk       | 84MjwIoIQEy  | zLpZpaeQbQQ= | b7a782741f667201b54880c925faec4b
    A | Kd6          | 13           | 3AANWY       | 1ylYXY       | 3SxhX5       | 8daa19ea     | 58yseZWlA    | 38rIu6       | iCgxv        | imVmlxma4w   | hLaV0ECdCRM= | 7fc56270e7a70fa81a5935b72eacbe29
   AA | oAXb         | hTgc         | NLBUX        | 1az9QZ       | 36jgBv       | 6c336e96     | aOlaTN4mr    | 3XJ0Fm       | 21syoZ       | RgRqGxwcGi   | NndpA51HQkg= | 3b98e2dffc6cb06a89dcb0d5c60a0206
  AAA | d5FtO        | AD4Vr        | 3ldqDw       | 20Qac6       | 1Swocv       | 1a3a646b     | frUNW4rvi    | 3SMjN7       | 3h3536       | lSOLEGxTRQe  | trg5GGU7mTI= | e1faffb3e614e6c2fba74296962386b7
 AAAA | 2hlPGB       | 4p3z44       | i6N5f        | 374UXy       | 2Q2SSl       | 2d122936     | 4myasY6Cx    | 45snmh       | 351g9        | dJ1rT0Ytxe0  | dz7EK7e1QM8= | 098890dde069e9abad63f19a0d9e1f32
AAAAA | dYAxC        | RWmVr        | 3SqA7S       | MvEFt        | tuax3        | 7532fdcb     | a2X3hKANJ    | n7V7k        | AKtvQ        | gokiIpg24gi  | CHCyhc0cRM0= | f6a6263167c92de8644ac998b3c4e4d1
    B | Kd9          | 14           | 3DZZPf       | 3KmrlU       | 1mWGtj       | 8daa19e8     | 59uwJU9rR    | 11tPrn       | 2DsUDk       | ep5uTktD3Mc  | +VcyBo/iaW0= | 9d5ed678fe57bcca610140957afab571
   AB | oAYK         | hTgd         | OU0xI        | 4t5pJx       | SXWaH        | 6c336e97     | aOEx45Oiu    | VLInV        | 2t7BY1       | 23OOYlXOScY  | 5bjMP8iDDX4= | b86fc6b051f63d73de262d4c34e3a0a9
  ABC | d5H7v        | ADlZw        | 1H2JtN       | 1eVMqN       | 2ZEuqQ       | 1a3a648c     | ktvBLIWOl    | 2s7Ncq       | 2lPKf3       | cux8DaOXrq4  | mO7PTzXnauY= | 902fbdd2b1df0c4f70b4a5d23525e932
 ABCD | 2hlYXv       | 4pCMoi       | 3RFzAh       | 1lhmeR       | 40KYf3       | 2d122d38     | kt1vYKfJi    | 251jNt       | 37GuCW       | 7jSozyczgke  | bpxxP+8moQo= | cb08ca4a7bb5f9683c19133a84872ca7
ABCDE | dFIQk        | 1JTMTV       | 4Clu0        | 2Ijh5N       | 26n8q1       | 75337a0d     | cqXkDhVeD    | 30DOeA       | 31YEnx       | 9tBQI0p9gAQ  | CfbOx+eZdeQ= | 2ecdde3959051d913f61b14579ea136d
------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                
[Benchmark Result]
----------------------------------------------------------------
name       | num_speed  | dic_speed  | num_coll   | dic_coll  
----------------------------------------------------------------
djb2a      |  7,451,837 | 10,375,159 |    0.0678% |    0.0576%
sdbm       |  6,397,224 |  7,932,060 |    0.0000% |    0.0121%
fnv1a      |  6,166,445 |  7,478,976 |    0.1090% |    0.0122%
murmur3    |  5,406,837 |  7,547,386 |    0.1162% |    0.0123%
crc32      |  3,074,001 |  4,218,007 |    0.0000% |    0.0141%
hashsum    |  3,175,980 |  2,594,694 |    0.0177% |    0.0960%
fnv1a52    |  4,181,967 |  5,495,560 |    0.0000% |    0.0000%
farmhash   |  2,147,934 |  2,728,113 |    0.1155% |    0.0129%
xxhash     |  1,833,691 |  2,271,354 |    0.0225% |    0.0127%
farmhash64 |  1,166,456 |  1,296,449 |    0.0000% |    0.0000%
xxhash64   |    775,606 |    830,617 |    0.0000% |    0.0000%
spark-md5  |  1,263,198 |  1,391,634 |    0.0000% |    0.0000%
----------------------------------------------------------------
name : Hash algorism
num_speed: ops/sec for 0 -> 10000000
dic_speed: ops/sec for word in dictionary
num_coll: Collision rate for number
dic_coll: Collision rate for word


```
