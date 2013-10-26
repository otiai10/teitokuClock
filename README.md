Set Up
==========
```
npm install -g typescript
npm install
# npm run-script bower install なんでこれrun-scriptでいけへんのやろ
./node_modules/bower/bin/bower install
```

Run Test
==========
```
# tsc tests/src/sample-spec.ts --out tests/build/sample-spec.js
tsc tests/src/**/*.ts --outDir tests/build
npm run-script test
```

### 2013/10/26 18:15
![tests](http://gyazo.com/834e35e0fe97b86605b39d1f71889a10.png)
