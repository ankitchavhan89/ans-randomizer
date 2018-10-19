# ans-randomizer
This package is used to create random string including alphanumeric, numeric, string with lower and uppercase

## Features

 - Get alphanumeric string
 - Get numeric string
 - Get lowercase string
 - Get uppercase string


 ## Functions

 - strLower = to get lowercase string
 - strUpper = to get uppercase string
 - numbOnly = to get numbers string
 - strAlpha = to get alpha numeric string


## Getting Started

include ans-randomizer package from node_modules

```bash
const ansRandomizer = require('../ans-randomizer');
```

```bash

   # To get random string in lower case
   ansRandomizer.strLower(10));

    # To get random string in upper case
   ansRandomizer.strUpper(10));

   # To get random string in numbers only
   ansRandomizer.numbOnly(10));

   # To get random string in alphanumeric
   ansRandomizer.strAlpha(10));
```
