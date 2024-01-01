(function() {    
    const controlls = document.querySelectorAll(".squad__link");
    const activeClass = "squad_item--active";

    controlls.forEach(function(control) {
        control.addEventListener("click", function(e) {
        e.preventDefault();
        
        const filterName = control.getAttribute("data-filter");

        controlls.forEach(function(link) {
            link.closest(".squad_item").classList.remove(activeClass);
        });

        control.closest(".squad_item").classList.add(activeClass);
    });
 });
})();
