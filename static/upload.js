$(document).ready(function() {
    var dropZone = $('#drop-zone');
    var thumbnailContainer = $('#thumbnail-container');

    dropZone.on('dragover', function(e) {
        e.preventDefault();
        $(this).addClass('drag-over');
    });

    dropZone.on('dragleave', function(e) {
        e.preventDefault();
        $(this).removeClass('drag-over');
    });

    dropZone.on('drop', function(e) {
        e.preventDefault();
        $(this).removeClass('drag-over');
        var files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
    });

    $('#file-input').on('change', function() {
        var files = $(this)[0].files;
        handleFiles(files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            $('#file-list p').removeClass('empty').text(''); 
        }

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function(e) {
                var img = $('<img>').attr('src', e.target.result);
                thumbnailContainer.append(img);
            };
            reader.readAsDataURL(file);
        }
        uploadFiles(files);
    }

    function uploadFiles(files) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }
});
