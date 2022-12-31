const _ = require('lodash')
const fs = require('fs');
const now = require("performance-now")
const numeral = require('numeral')
// const hash = require('object-hash')

const murmur = require("murmurhash-js")
const Hashsum = require("hash-sum")
const XXhash = require('xxhash')
const XXhashJS = require('xxhashjs')
const Fnv1a = require('fnv1a')
const FnvPlus = require('fnv-plus')
const Crypto = require('crypto-js')
const CRC32 = require("crc-32")
const base62 = require("base62/lib/ascii");
const SparkMD5 = require("spark-md5");


const murmurHash3 = require("murmurhash3js");
const Farmhash = require('farmhash');

const MAX_NUMBER = 10000000

const strPath = __dirname + '/words.txt'
const array = fs.readFileSync(strPath).toString().split("\n");
const arrayLen = array.length

//////////////////////////////////////////////////////////////////

function xxhash64(value) {
    return XXhash.hash64(Buffer.from(value),0).toString('base64')
}
function xxhash(value) {
    return base62.encode(XXhash.hash(Buffer.from(value),0))
}
function xxhashjs(value) {
    return base62.encode(XXhashJS.h32(value,0))
}
function djb2a(value) {
    let hash = 5381,
        index = value.length;
    while (index) {
        // Equivalent to: `hash = (hash * 33) ^ value.charCodeAt(--index);`
        hash = ((hash << 5) + hash) ^ value.charCodeAt(--index);
    }
    return base62.encode(hash >>> 0);
}
function fnv1a(value) {
    return base62.encode(Fnv1a(value))
}
// function fnv1a52(value) {
//     return FnvPlus.hash(value).str()
// }
function fnv1a52(value) {
    return base62.encode(FnvPlus.fast1a52(value))
}
function fnv1a52R(value) {
    return base62.encode(FnvPlus.fast1a52(value)).split('').reduce((reversed, character) => character + reversed, '')
}

function crc32(value) {
    const crc = CRC32.buf(Buffer.from(value, "binary"), 0)
    return base62.encode(crc >>> 0)
}
function sdbm(value) {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
        hash = value.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
    }
   // Convert it to an unsigned 32-bit integer.
    return base62.encode(hash >>> 0)
}
// function crc64(value) {
//     return CRC.crc64(Buffer.from(value, "binary")).toString(64);
// }
function murmur3(value) {
    return base62.encode(murmurHash3.x86.hash32(value))
}
// function murmur3_64(value) {
//     return murmurHash3.x86.hash64(value).toString(36)
// }
function hashsum(value) {
    // return Hashsum.sum(value)
    return Hashsum(value)
}
function farmhash(value) {
    return base62.encode(Farmhash.hash32(Buffer.from(value, "binary")))
}
function farmhash64(value) {
    return base62.encode(Number(Farmhash.hash64(Buffer.from(value, "binary"))));
}
function md5(value) {
    return Crypto.MD5(value)
}
function spark_md5(value) {
    return SparkMD5.hash(value)
}

//////////////////////////////////////////////////////////////////////////

function showExample() {
    console.log('[Examples]')
    console.log('------ '+_.repeat(_.repeat('-',15),Object.keys(functionList).length))
    let header = '  key'
    _.forEach(functionList, (func, name) => {
        header += ' | ' + _.padEnd(name,12)
    })
    console.log(header)
    console.log('------ '+_.repeat(_.repeat('-',15),Object.keys(functionList).length))
    const strarr = ['0','1','2','3','4','5','10','100','1000','10000','A','AA','AAA','AAAA','AAAAA','B','AB','ABC','ABCD','ABCDE']
    for(let i=0; i < strarr.length; i++) {
        let res = []
        _.forEach(functionList, (func, name) => {
            res.push(_.padEnd(func(strarr[i]),13))
        })
        const log = `${_.padStart(strarr[i],5)} | ` + res.join('| ')
        console.log(log)
    }
    console.log('------ '+_.repeat(_.repeat('-',15),Object.keys(functionList).length))
}

function runSpeedTestNum() {
    process.stdout.write("runSpeedTestNum start...");
    _.forEach(functionList, (func, name) => {
        // console.log(`[ ${name} ] Testing...`)
        const start = now()
        for(i=0; i < MAX_NUMBER; i++) {
            func(i.toString())
        }
        const elpsed = (now() - start).toFixed(3)
        // console.log(elpsed)
        result[name].num_speed = numeral(MAX_NUMBER / elpsed * 1000).format('0,0')
        process.stdout.write(".");
    })
    process.stdout.write("finish\r");
    process.stdout.write("                                                \r");
}
function runSpeedTestDic() {
    process.stdout.write("runSpeedTestDic start...");
    _.forEach(functionList, (func, name) => {
        // console.log(`[ ${name} ] Testing...`)
        const start = now()
        for(i=0; i < arrayLen; i++) {
            func(array[i])
        }
        const elpsed = (now() - start).toFixed(3)
        // console.log(elpsed)
        result[name].dic_speed = numeral(arrayLen / elpsed * 1000).format('0,0')
        process.stdout.write(".");
    })
    process.stdout.write("finish\r");
    process.stdout.write("                                                \r");
}
function runCollisionTestNum() {
    process.stdout.write("runCollisionTestNum start...");
    _.forEach(functionList, (func, name) => {
        const set = new Set()
        // console.log(`[ ${name} ]`)
        for(i=0; i < MAX_NUMBER; i++) {
            const hash = func(i.toString())
            set.add(hash)
        }
        // console.log('set.size:', set.size)
        result[name].num_coll = (((MAX_NUMBER - set.size) / MAX_NUMBER) * 100).toFixed(4) + '%'
        process.stdout.write(".");
    })
    process.stdout.write("finish\r");
    process.stdout.write("                                                \r");
}

function runCollisionTestDic() {
    process.stdout.write("runCollisionTestDic start...");
    _.forEach(functionList, (func, name) => {
        const set = new Set()
        // console.log(`[ ${name} ]`)
        for(i=0; i < arrayLen; i++) {
            const hash = func(array[i])
            // if(set.has(hash)) console.log(array[i], hash)
            set.add(hash)
        }
        // console.log('set.size:', set.size)
        result[name].dic_coll = (((arrayLen-set.size) / arrayLen) * 100).toFixed(4) + '%'
        process.stdout.write(".");
    })
    process.stdout.write("finish\r");
    process.stdout.write("                                                \r");
}


function showResult() {
    console.log('[Benchmark Result]')
    console.log('----------------------------------------------------------------')
    let header = 'name      '
    _.forEach(result.djb2a,(v,k) => {
        header += ' | ' + _.padEnd(k,10)
    })
    console.log(header)
    console.log('----------------------------------------------------------------')
    _.forEach(result, (v,k) => {
        let row = `${_.padEnd(k,10)}`
        _.forEach(v,(v1) => {
            row += ' | ' + _.padStart(v1,10)
        })
        console.log(row)
    })
    console.log('----------------------------------------------------------------')
    console.log('name : Hash algorism')
    console.log('num_speed: ops/sec for 0 -> '+MAX_NUMBER)
    console.log('dic_speed: ops/sec for word in dictionary')
    console.log('num_coll: Collision rate for number')
    console.log('dic_coll: Collision rate for word')
    console.log()
}


const functionList = {
    'djb2a': djb2a,
    'sdbm': sdbm,
    'fnv1a': fnv1a,
    'murmur3': murmur3,
    'crc32': crc32,
    'hashsum': hashsum,
    'fnv1a52': fnv1a52,
    'farmhash': farmhash,
    'xxhash': xxhash,
    'farmhash64': farmhash64,
    'xxhash64': xxhash64,
    // 'xxhashjs': xxhashjs,
    // 'xxhash64': xxhash64,
    // 'md5': md5,
    'spark-md5': spark_md5,
}
const result = {}
Object.keys(functionList).map(key => {result[key]={}})


showExample()
runSpeedTestNum()
runSpeedTestDic()
runCollisionTestNum()
runCollisionTestDic()
process.stdout.write("");
console.log()
showResult()


