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

### 1) decamelize:

**Converts a camelized string into all lowercase separated by underscores.**


```javascript
  decamelize('innerHTML');         // 'inner_html'
  decamelize('action_name');       // 'action_name'
  decamelize('css-class-name');    // 'css-class-name'
  decamelize('my favorite items'); // 'my favorite items'
```

### 2) dasherize:

**Replaces underscores, spaces, or camelCase with dashes.**

```javascript
  dasherize('innerHTML');         // 'inner-html'
  dasherize('action_name');       // 'action-name'
  dasherize('css-class-name');    // 'css-class-name'
  dasherize('my favorite items'); // 'my-favorite-items'
```
### 3) camelize:

**Returns the lowerCamelCase form of a string.**

```javascript
  camelize('innerHTML');          // 'innerHTML'
  camelize('action_name');        // 'actionName'
  camelize('css-class-name');     // 'cssClassName'
  camelize('my favorite items');  // 'myFavoriteItems'
  camelize('My Favorite Items');  // 'myFavoriteItems'
```

### 4) classify:

**Returns the UpperCamelCase form of a string.**

```javascript
  'innerHTML'.classify();          // 'InnerHTML'
  'action_name'.classify();        // 'ActionName'
  'css-class-name'.classify();     // 'CssClassName'
  'my favorite items'.classify();  // 'MyFavoriteItems'
  ```

### 5) underscore:

**More general than decamelize. Returns the lower\_case\_and\_underscored form of a string.**

```javascript
  'innerHTML'.underscore();          // 'inner_html'
  'action_name'.underscore();        // 'action_name'
  'css-class-name'.underscore();     // 'css_class_name'
  'my favorite items'.underscore();  // 'my_favorite_items'
```

### 6) capitalize:

**Returns the Capitalized form of a string.**

```javascript
  'innerHTML'.capitalize()         // 'InnerHTML'
  'action_name'.capitalize()       // 'Action_name'
  'css-class-name'.capitalize()    // 'Css-class-name'
  'my favorite items'.capitalize() // 'My favorite items'
```

## Author

**ember-cli contributors**


## License
**ISC**