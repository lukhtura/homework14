function slider() {
    let count = 1;

    $('#next').on('click', function () {
        $('#first').attr('id', null).next().attr('id', "first");
        count++;
        if (count === $('#slider').children().length) {
            $('#next').attr('disabled', true); 
        } else {
            $('#prev').attr('disabled', false);
        }
    })
    $('#prev').on('click', function () {
        $('#first').attr('id', null).prev().attr('id', "first");
        count--;
        if (count === 1) {
            $('#prev').attr('disabled', true) 
        } else {
            $('#next').attr('disabled', false) 
        };
    });
};
slider()


