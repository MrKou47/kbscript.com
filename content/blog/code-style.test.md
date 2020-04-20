---
title: gatsby feature test
date: 2020-04-19
description: 'test some gatsby feature, like emotion preview, code highlight, typography-theme, medium-zoom, prismjs and so on.'
---

## prismjs

```js
// test code highlight
/* comment block */
import module from 'module';
const this_is_a_long_name_function_for_testing_scrollbar = () => { console.log('this_is_a_long_name_function_for_testing_scrollbar') };
const foo = () => {
};
async function baz () {
}
[...a, ...b, ...c]
Object.create(null);
for(let [key, value] of obj) {
}
foo ? baz : bar;
if(true) {
}
```
Other language highlight
```ts
export default {
  // highlight-start
  h1: props => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
  // highlight-end
}
```

```html
<!DOCTYPE>
<div>Hello World</div>
<custome-component></custome-component>
```

```css
.imperio {
  color: blue;
}
```

```java
import java.util.Scanner; // import the Scanner class 

class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String userName;
    
    // Enter username and press Enter
    System.out.println("Enter username"); 
    userName = myObj.nextLine();   
       
    System.out.println("Username is: " + userName);        
  }
}
```

Undefined language:

```yaml
- test: 01
  hi: number two
```

Or without any label:

```text
test 123
```

Bash:

```bash
git clone
git rebase
```

Inline code

we should use `inline code`