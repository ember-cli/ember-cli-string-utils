# ember-cli-string-utils

Library for string utils extracted for other addons and blueprints.

## Installation

```
$ npm i ember-cli-string-utils
```

## Code Example

**How to use in project :**

```javascript
var stringUtils = require("ember-cli-string-utils");


stringUtils.camelize('action_name');	   // 'actionName'
stringUtils.camelize('css-class-name');    // 'cssClassName'
stringUtils.camelize('my favorite items'); // 'myFavoriteItems'
stringUtils.camelize('My Favorite Items'); // 'myFavoriteItems'
```

## Usage

### 1) Decamelize:

**Converts a camelized string into all lowercase separated by underscores.**


```javascript
function decamelize(str) {
  return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
}

  decamelize('innerHTML');         // 'inner_html'
  decamelize('action_name');       // 'action_name'
  decamelize('css-class-name');    // 'css-class-name'
  decamelize('my favorite items'); // 'my favorite items'
```

### 2) Dasherize:

**Replaces underscores, spaces, or camelCase with dashes.**

```javascript
function dasherize(str) {
  var cache = STRING_DASHERIZE_CACHE,
      hit   = cache.hasOwnProperty(str),
      ret;

  if (hit) {
    return cache[str];
  } else {
    ret = decamelize(str).replace(STRING_DASHERIZE_REGEXP,'-');
    cache[str] = ret;
  }

  return ret;
}

  dasherize('innerHTML');         // 'inner-html'
  dasherize('action_name');       // 'action-name'
  dasherize('css-class-name');    // 'css-class-name'
  dasherize('my favorite items'); // 'my-favorite-items'
```
### 3) Camelize:

**Returns the lowerCamelCase form of a string.**

```javascript
function camelize(str) {
  return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match) {
    return match.toLowerCase();
  });
}

  camelize('innerHTML');          // 'innerHTML'
  camelize('action_name');        // 'actionName'
  camelize('css-class-name');     // 'cssClassName'
  camelize('my favorite items');  // 'myFavoriteItems'
  camelize('My Favorite Items');  // 'myFavoriteItems'
```

### 4) Classify:

**Returns the UpperCamelCase form of a string.**

```javascript
function classify(str) {
  var parts = str.split('.'),
      out = [];

  for (var i=0, l=parts.length; i<l; i++) {
    var camelized = camelize(parts[i]);
    out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));
  }

  return out.join('.');
}

  'innerHTML'.classify();          // 'InnerHTML'
  'action_name'.classify();        // 'ActionName'
  'css-class-name'.classify();     // 'CssClassName'
  'my favorite items'.classify();  // 'MyFavoriteItems'
  ```

### 5) Underscore:

**More general than decamelize. Returns the lower\_case\_and\_underscored form of a string.**

```javascript
function underscore(str) {
  return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').
    replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
}

  'innerHTML'.underscore();          // 'inner_html'
  'action_name'.underscore();        // 'action_name'
  'css-class-name'.underscore();     // 'css_class_name'
  'my favorite items'.underscore();  // 'my_favorite_items'
```

### 6) Capitalize:

**Returns the Capitalized form of a string.**

```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

  'innerHTML'.capitalize()         // 'InnerHTML'
  'action_name'.capitalize()       // 'Action_name'
  'css-class-name'.capitalize()    // 'Css-class-name'
  'my favorite items'.capitalize() // 'My favorite items'
```

## Author

**ember-cli contributors**


## License
**ISC**