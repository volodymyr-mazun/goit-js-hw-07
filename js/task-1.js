
const catElems = document.querySelectorAll('.item');
const catElemsStr = `Number of categories: ${catElems.length}`;
console.log(catElemsStr);

catElems.forEach(category => {  
    const catTitle = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul > li').length; 
    const catTitleStr = `Category: ${catTitle}`;
    const itemsCountStr = `Elements: ${itemsCount}`;
    console.log(catTitleStr);
    console.log(itemsCountStr);
});  

