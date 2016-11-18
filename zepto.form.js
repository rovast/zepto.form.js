(function($) {
    $.fn.ajaxSubmit = function(options) {
        var form = this;
        var formAction = form.attr('action');
        var formMethod = form.attr('method');
        if(formMethod == null || !/^(POST|GET)$/i.test(formMethod.trim())){
            formMethod = "GET";
        }

        var params = $(this).serializeArray();

        var dataType = options.dataType;
        if(dataType == null)
            dataType = 'json';
        var success = options.success;
        if(success == null){
            success = function(){
            };
        }
        var error = options.error;
        if(error == null){
            error = function(){
            };
        }
        var beforeSend = options.beforeSend;
        if(beforeSend == null){
            beforeSend = function(){
            };
        }
        var complete = options.complete;
        if(complete == null){
            complete = function(){
            };
        }
        $.ajax({
            type: formMethod,
            url: formAction,
            data: params,
            dataType: dataType,
            success: success,
            error: error,
            beforeSend: beforeSend,
            complete: complete
        });
    };
})(Zepto);