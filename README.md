Math JS
=======

MathJax &amp; Node. Yes please. MathJax Node is available [here](https://github.com/mathjax/MathJax-node).

### Installing

```
npm install etc...
npm start # boot the server
```

then try hitting up this url in your browser:

```
http://0.0.0.0:4000/math?math=++1+%2B++%5Cfrac%7Bq%5E2%7D%7B%281-q%29%7D%2B%5Cfrac%7Bq%5E6%7D%7B%281-q%29%281-q%5E2%29%7D%2B%5Ccdots+%3D+%5Cprod_%7Bj%3D0%7D%5E%7B%5Cinfty%7D%5Cfrac%7B1%7D%7B%281-q%5E%7B5j%2B2%7D%29%281-q%5E%7B5j%2B3%7D%29%7D
```

...and you should see something like this:

![screen shot 2014-06-15 at 09 58 21](https://cloud.githubusercontent.com/assets/4483/3281248/91fa0e34-f49d-11e3-907d-cf16eb5c3ba2.png)

### If the install fails

You might have trouble installing this on OS X Mavericks with a failure todo with `node-gyp`. If [this](https://github.com/TooTallNate/node-gyp/issues/341#issuecomment-33969512) affects you then do the following:

```
# Find out what path xcodebuild is at (which xcodebuild)
sudo mv /usr/bin/xcodebuild /usr/bin/xcodebuild.old

# Make a new file at /usr/bin/xcodebuild with the following contents:

#!/bin/bash

exit 0

# Now try npm install again...
```

### Is it green?

Hopefully/probably? You can keep an eye on Travis stuff here:

[![Build Status](https://travis-ci.org/arfon/math-js.svg)](https://travis-ci.org/arfon/math-js)
