//hash Tables

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _generateHash(key) {
        let hash = 0;
        for (let i = 1; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._generateHash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data
    }

    get(key) {
        const address = this._generateHash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            const result = currentBucket.find(([_key]) => key === _key);
            return result[1];
        }
        return "not found";
    }

    keys() {
        return this.data.map(item => {
            if (item) {
                return item[0][0];
            }
        }).filter(() => true)
    }
}

const hash1 = new HashTable(50);
hash1.set("apples", 100)
hash1.set("grapes", 70)
hash1.set("oranges", 2);
const keys = hash1.keys();

//Google Interview Question
//Find the first recurring character in an array

/* Given const array = [1, 3, 4, 4] => should return 4
         const array = [1, w, 44, 2, 3, 1, 4 , 5 ,3] => should return 1 
         const array = [1, 2 ,3, 4] => should return undefined */

const array4 = [1, 2, 4, 1, 5, 2];

const findFirstRecurringCharacter = (array) => {
    const temp = [];
    for (let item of array) {
        if (temp.includes(item)) {
            return item;
        }
        temp.push(item)
    }
}
findFirstRecurringCharacter(array4)
//0(n^2)

const findFirstRecurringCharacter2 = (array) => {
    const map = {}
    for (const item of array) {
        if (map[item]) {
            // console.log(item);
            return item
        }
        map[item] = true;
        // console.log(map)
    }
}
findFirstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])
