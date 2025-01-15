function countElements(tagName) {
    const element = document.getElementsByTagName(tagName);
    return element.length 
  }
  
  
  console.log(countElements('td')); // 10
  console.log(countElements('th')); // 5
  console.log(countElements('a')); // 5

  