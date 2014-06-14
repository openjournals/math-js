js-math
=======

MathJax &amp; Node. Yes please. MathJax Node is available [here](https://github.com/mathjax/MathJax-node).

### Installing

```
npm install etc...
npm start # boot the server
```

then try hitting up this url in your browser:

```
http://0.0.0.0:4000/math?math=%0A%5Cbegin%7Baligned%7D%0A%5Cdot%7Bx%7D+%26amp%3B+%3D+%5Csigma%28y-x%29+%5C%5C%0A%5Cdot%7By%7D+%26amp%3B+%3D+%5Crho+x+-+y+-+xz+%5C%5C%0A%5Cdot%7Bz%7D+%26amp%3B+%3D+-%5Cbeta+z+%2B+xy%0A%5Cend%7Baligned%7D%0A
```

...and you should see something like this:

![screen shot 2014-06-13 at 16 37 07](https://cloud.githubusercontent.com/assets/4483/3275996/ec9bfe6c-f342-11e3-950b-6cfea655f7d6.png)

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
