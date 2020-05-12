const tabItems = document.querySelectorAll('.tab-items');
//const tabContentItems = document.querySelectorAll('.tab-content-items');

function selectItem(e){
    
    this.classList.add('tab-border');
}
Console.log(tabItems)


tabItems.forEach(item => item.addEventListener('click', selectItem));
