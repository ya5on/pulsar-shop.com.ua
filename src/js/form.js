$(document).ready(function () {
    // process the form
    $('form').submit(function (e) {
            // process the form
            let thisForm = this;
            $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: 'mail.php', // the url where we want to POST
                data: $(thisForm).serialize(), // our data object or formData
                dataType: 'json', // what type of data do we expect back from the server
                encode: true,
                // beforeSend: function(xhr){
                //     $('#submit-btn').html('Отправить...');
                // },
            })
                // using the done promise callback
                .done(function (data) {
                    // log data to the console so we can see
                    console.log(data);
                    if (!data.success) {
                        // handle errors fields
                        if (data.errors.name) {
                            $(thisForm).find('.msg').html('<div class="alert-danger">' + data.errors.name + '</div>');
                        } else if (data.errors.phone) {
                            $(thisForm).find('.msg').html('<div class="alert-danger">' + data.errors.phone + '</div>');
                        }
                    } else {
                        // ALL GOOD! just show the success message!
                        Swal.fire({
                            icon: 'success',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 2000
                        })
                        $('input, textarea').val(function () {
                            return this.defaultValue;
                        });
                        setTimeout(function () {
                            $(thisForm).find('.msg').html('<div class="alert-success"></div>');
                            $('.modal').addClass('hidden');
                            $('body').removeClass('lock');
                        }, 500);
                    }
                })
                .fail(function (data) {
                    //Server failed to respond - Show an error message
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Could not reach server, please try again later.',
                    })
                    $('.modal').addClass('hidden');
                    $('body').removeClass('lock');
                })
            // stop the form from submitting the normal way and refreshing the page
            e.preventDefault();
    });
});
