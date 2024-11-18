
document.addEventListener('DOMContentLoaded', function(){

    let fields = document.querySelectorAll('.fields');

    fields.forEach(function(element){
        let input = element.querySelector('.input');
        let highlight = element.querySelector('.highlight');

        input.addEventListener('keyup', function() {
            let value = this.value;
            highlight.innerHTML = value;
        });
    })
});
