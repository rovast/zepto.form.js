# zepto.form.js

在使用zepto过程中会遇到ajax提交表单的情况，在使用jquery库的情况下，可以使用jquery.form.js来完成。在zepto下，使用jquery.form.js是不能正常使用的（即使jquery.form.js说支持，但是情况不理想）。

之后在网上找到解决方案 `http://blog.csdn.net/laotoumo/article/details/51205109`，但是此办法依旧存在问题，仔细研究下发现它提交的字段有限制，并且对于`<input name='code[]' type='text'>`这种表单存在问题，即数组型的支持不好。

基于上述进行修改，把获取字段名和内容那一块使用`serializeArray()`方法来替代。

Relace of jquery.form.js, fix some bugs base on `http://blog.csdn.net/laotoumo/article/details/51205109`。Weclome U to complete the English Docment。

## usage & demo
`
    $(obj).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
                // handle the sucess callback
                console.log('request success');
            },
            error:function(xhr){
                // handle the error callback
                console.log('request error');
            },
            beforeSend:function(){
                // handle the beforeSend
                console.log('beforeSend');
            },
            complete:function(){
                // handle the complete
                console.log('request complete');
            }
        });
`