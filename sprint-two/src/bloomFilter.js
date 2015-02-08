var keyHasher = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var BloomFilter = function(m, k) {
  this.m = m;
  this.k = k;
  this._storage = LimitedArray(m);
  this._seeds = [];
  for (var i = 0; i < k; i++) {
    this._seeds.push(Math.random());
  }
};

BloomFilter.prototype.insert = function(key) {
  for (var i = 1; i <= this.k; i++) {
    key = '' + key + this._seeds[i-1];
    this._storage.set(keyHasher(key, this.m), true);
  }
};

BloomFilter.prototype.check = function(key) {
  var probablyFound = true;
  for(var i = 1; i <= this.k; i++) {
    key = '' + key + this._seeds[i-1];
    if (this._storage.get(keyHasher(key, this.m)) === undefined) {
      probablyFound = false;
    }
  }
  return probablyFound;
};

BloomFilter.test = function (m, n, k) {
  var fpCounts =  [];
  var k = k || (m/n) * Math.log(2);
  for (var i = 0; i < 10000; i++) {
    var falsePositives = 0;
    var filter = new BloomFilter(m, k);
    var values = [];
    for (var j = 0; j < n; j++) {
      var random = Math.random();
      values.push(random);
      filter.insert(random);
    }
    for (var h = 0; h < n; h++) {
      if (filter.check(Math.random())) {
        falsePositives++;
      }
    }
    fpCounts.push(falsePositives);
  }
  var avg = _.reduce(fpCounts, function(x, y){return x + y;}) / 10000.0;
  var ideal = Math.pow((1 - Math.exp(-k*n/m)), k);
  console.log('False positive rate: ' + (avg/n));
  console.log('Ideal rate:          ' + ideal);
};
