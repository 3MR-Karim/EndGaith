document.querySelectorAll('.economic-impact .info').forEach(function (info) {
   
  info.addEventListener('click', function () {
  
    const item = this.parentElement;
  
    item.classList.toggle('active'); 
  
  });
  
});
  