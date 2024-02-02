# Checking-collections
1) Напишите функцию findLongestWord, которая принимает массив строк и возвращает самую длинную строку в массиве.


console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

2) Напишите функцию sumUniqueNumbers, которая принимает массив чисел и возвращает сумму всех уникальных чисел в массиве. Уникальные числа - те, что встречаются в массиве всего один раз. 
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

3) Напишите функцию mergeArrays, которая принимает произвольное количество массивов чисел и возвращает новый массив, содержащий все элементы переданных массивов, но без дубликатов.

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

4) Напишите функцию hasProperty, которая принимает объект и строку (имя свойства) в качестве аргументов и возвращает true, если объект содержит свойство с данным именем, иначе false.


console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

 

5) Напишите функцию getPropertyValue, которая принимает объект и строку (имя свойства) и возвращает значение этого свойства из объекта. Если свойства нет, функция должна возвращать undefined

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".

6 - дополнительное 
Напишите функцию invertObject, которая принимает объект и возвращает новый объект, где ключи и значения исходного объекта поменяны местами. Если исходный объект содержит повторяющиеся значения, в результирующем объекте должно остаться последнее ключ-значение (исходя из порядка объявления в исходном объекте).

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }

Формат ответа - ссылка на github репозиторий 
Формат оценивания - 3 решения - оценка 3, 4 решения - оценка 4, 5 - оценка 5. Дополнительное задание оценивается отдельно 