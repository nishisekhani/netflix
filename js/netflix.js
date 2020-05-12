const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-items');

function selectItem(e){
    
    this.classList.add('tab-border');
}
console.log(tabItems)


tabItems.forEach(item => item.addEventListener('click', selectItem));
