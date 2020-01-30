$(function() {
  function checkLogin() {
      layer.load();
      setTimeout(function(){
        layer.closeAll('loading');
      }, 5000);
    $.ajax({
      url: "http://127.0.0.1:800/admin/checkLogin",
      type: "POST",
      data: $("#form").serialize(), //序列化表单值
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function(data) {
          layer.closeAll('loading');
        if(data.success){
            layer.msg("登陆成功!",function(){
                location.href="/admin"
            });
        }else{
            layer.msg("账号或密码错误！",function(){
                $("#form")[0].reset();//重置表单
            });
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  $("#form").validate({
    rules: {
      userName: {
        required: true,
        maxlength: 16
      },
      userPwd: {
        required: true,
        maxlength: 12
      }
    },
    messages: {
      userName: {
        required: `<svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-gantanhao-copy"></use>
                    </svg>用户名未填写`
      },
      userPwd: {
        required: `<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gantanhao-copy"></use>
                    </svg>密码未填写`
      }
    },
    submitHandler: checkLogin
  });
});
