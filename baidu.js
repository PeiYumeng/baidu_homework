$(function() {
    var $name   = $('#name'),
        $tel  = $('#tel'),
        $pwd    = $('#pwd'),
        $zhuce = $('#zhuce'),
        $yanzheng = $('#yanzheng'),
        $ma = $('#ma'),
        isValid = false;
  
    $zhuce.click(function() {
      if(!isValid) return;
    });
    
    $name.focusout(function() {
      isValid = validate('#name');
    });
    $tel.focusout(function() {
      isValid = validate('#tel');
    });
    $pwd.focusout(function() {
        isValid = validate('#pwd');
    });
    $ma.focusout(function() {
        isValid = validate('#ma');
    });
    var i=5,timer;
    $yanzheng.click(function(){
        $yanzheng.html(i);
        $yanzheng.attr("disabled", true);
        timer = setInterval(function(){
            i--;
            if(i===0){
                clearInterval(timer);
                $yanzheng.html('重新获取验证码');
                $yanzheng.removeAttr('disabled');
                i=5;
            }else{
                $yanzheng.html(i);
            }
        },1000)
    })

    function validate(field) {
        var $data  = $(field),
              $message = $(field + '-validate'); 
  
        switch($data[0].id){
            case 'name':
                console.log($data[0].id);
                console.log($data.val());
                if(!(/^(?!(\d+)$)[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test($data.val()))) {
                    $message.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
                    $data.css('border','1px solid red')
                  //  $data.select();
                    return false;
                }
                break;
            case 'tel':
                if(!(/^13|15|17|18\d{9}$/.test($data.val()))) {
                    $message.html('手机号格式不正确');
                    $data.select();
                    return false;
                }
                break;
            case 'pwd':
                if(!(/^[_a-zA-Z0-9]+$/.test($data.val()))) {
                    $message.html('密码格式不正确');
                  //  $data.select();
                    return false;
                }
                break;
            case 'ma':
                console.log($data)
                if($data.val()==='') {
                    console.log($data.val())
                    $message.html('请求超时请稍后再试');
                    return false;
                }
                break;
        }
        $data.css('border','1px solid #E0E0E0')
        $message.html(' &nbsp; ')
        return true;
    }
  });
  
  
