$(document).ready(function () {
  $('.completed').hide();
  $('.error').hide();

  $('#next-one').click(function () {
    let text = $('input[type="text"]').val().length;
    if (text >= 8) {
      $('.form-one').css('left', '-50rem');
      $('.form-two').css('left', '0');
      $('.line').css('width', '66.66666%');
    } else {
      $('.error-1').show();
    }
  });

  $('#next-two').click(function () {
    let text = $('input[type="password"]').val().length;
    if (text >= 8) {
      $('.form-two').css('left', '-50rem');
      $('.form-three').css('left', '0');
      $('.line').css('width', '100%');
    } else {
      $('.error-2').show();
    }
  });

  $('#back-one').click(function () {
    $('.form-one').css('left', '0');
    $('.form-two').css('left', '50rem');
    $('.line').css('width', '33.33333%');
  });
  $('#back-two').click(function () {
    $('.form-two').css('left', '0');
    $('.form-three').css('left', '50rem');
    $('.line').css('width', '66.66666%');
  });

  $('#login').click(function () {
    // let text = $('input[type="email"]').val().length;
    // let value = (text = $('input[type="email"]').val());
    // function check() {
    //   return (value = '@');
    // }

    // if (text >= 8 && value.some(check) !== false) {
    $('.completed').show();
    $('form').hide();
    $('.form-step').hide();
    // } else {
    //   $('.error-3').show();
    // }
  });
});

function onClick() {
  let name = document.getElementById('val-name').value;
  let pass = document.getElementById('val-pass').value;
  let email = document.getElementById('val-email').value;

  if (name && pass && email) {
    info = '<u> Thông tin tài khoản của bạn: </u>' + '</br>' + '<br/>';
    info += '<u> Tên đăng nhập: &nbsp;</u>' + name + '</br>';
    info += '<u> Mật Khẩu: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>' + pass + '</br>';
    info += '<u> Địa chỉ gmail: &nbsp;&nbsp;</u>' + email + '</br>';
  }
  document.getElementById('value').innerHTML = info;
}
